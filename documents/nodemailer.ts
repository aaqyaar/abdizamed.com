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
  font-family: 'Droid Sans', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  "
  >
  <h2 class="title" style="text-align: center; font-size:20px;">Hi, Abdi Zamed</h2>
  <hr />
  <h4 style="font-size:12.5px;">Client Full Name :-  ${data.firstName} ${data.lastName},</h4>
  <p style="margin:20px 0 20px 0; font-size:12.5px">
  <span style="font-weight:bold;">Client Message</span> :- ${data.message}                  
  </p>
  
  
  <h4 style="font-size:12.5px;">Client Phone Number :-  ${data.phone}</h4>
  
  <p class="footer" style="font-size: small; font-style: italic; padding-top:10px;">
  <span>Thank you,</span> <br />
  <span>Abdi Zamed Mohamed</span>
  </p>
  </body>
  `;
};
