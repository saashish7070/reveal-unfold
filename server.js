require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static('.'));

const messagesFile = path.join(__dirname, 'messages.json');

const initializeMessagesFile = () => {
  if (!fs.existsSync(messagesFile)) {
    fs.writeFileSync(messagesFile, JSON.stringify([], null, 2));
  }
};

const getMessages = () => {
  try {
    const data = fs.readFileSync(messagesFile, 'utf8');
    return JSON.parse(data);
  } catch {
    return [];
  }
};

const saveMessage = (message) => {
  const messages = getMessages();
  messages.push({
    ...message,
    id: Date.now(),
    createdAt: new Date().toISOString()
  });
  fs.writeFileSync(messagesFile, JSON.stringify(messages, null, 2));
  return message;
};

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

const sendEmailNotification = async ({ name, email, inquiryType, message }) => {
  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
    to: 'saashish1746@gmail.com',
    replyTo: email,
    subject: `New message from ${name}${inquiryType ? ` — ${inquiryType}` : ''}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #111;">New Contact Form Submission</h2>
        <table style="width:100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 120px;">Name</td>
            <td style="padding: 8px 0;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Email</td>
            <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          ${inquiryType ? `
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Inquiry Type</td>
            <td style="padding: 8px 0;">${inquiryType}</td>
          </tr>` : ''}
          <tr>
            <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Message</td>
            <td style="padding: 8px 0; white-space: pre-wrap;">${message}</td>
          </tr>
        </table>
        <hr style="margin: 24px 0; border: none; border-top: 1px solid #eee;" />
        <p style="color: #888; font-size: 12px;">Sent from your portfolio contact form. Reply to this email to respond directly to ${name}.</p>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};

initializeMessagesFile();

app.post('/submit', async (req, res) => {
  const { name, email, inquiryType, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  saveMessage({ name, email, inquiryType, message });

  if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
    try {
      await sendEmailNotification({ name, email, inquiryType, message });
    } catch (err) {
      console.error('Failed to send email notification:', err.message);
    }
  } else {
    console.warn('Email not sent: GMAIL_USER or GMAIL_APP_PASSWORD env vars not set.');
  }

  res.json({ success: true, message: 'Message sent successfully' });
});

app.get('/read', (req, res) => {
  const messages = getMessages();
  res.json({ messages, count: messages.length });
});

app.get('/download-cv', (req, res) => {
  const cvPath = path.join(__dirname, 'assets', 'AashishShrestha_CV.pdf');
  res.download(cvPath, 'AashishShrestha_CV.pdf');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
