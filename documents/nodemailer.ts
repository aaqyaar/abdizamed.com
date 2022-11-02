import type { values as ValuesType } from "utils/validateForm";

const nodemailer = require("nodemailer");

export const sendEmail = (options: any) => {
  const smtpTransparent = nodemailer.createTransport({
    host: process.env.SMTP_SERVER,
    service: "gmail",
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_KEY,
    },
  });

  const mailOptions = {
    from: options.from,
    to: `"To " <${process.env.SMTP_USER}>`,
    subject: options.subject,
    html: options.text,
  };

  return smtpTransparent.sendMail(mailOptions);
};

export const emailTemplate = (data: ValuesType) => {
  return `
  <body 
  style="
  color: rgb(68, 68, 68);
  background-color: #f9fafb;
  border-radius: 10px;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  "
  >
  <h2 class="title" style="text-align: center; font-size:20px;">Hi, Abdi Zamed</h2>
  <hr />

  <div class="content" style="margin-top: 20px;">
    <p style="font-size: 16px; margin-bottom: 10px;">
      You have a new message from <b>${data.firstName} ${data.lastName}</b> with email <b>${data.email}</b>
    </p>
    <p style="font-size: 16px; margin-bottom: 10px;">
      Message: <b>${data.message}</b>
      <br />
      Phone: <b>${data.phone}</b>
    </p>


  </div>
  
  <p class="footer" style="font-size: small; font-style: italic; padding-top:10px;">
  <span>Thank you,</span> <br />
  <span>Abdi Zamed Mohamed</span>
  </p>
  </body>
  `;
};
