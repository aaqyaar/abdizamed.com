import type { NextApiRequest, NextApiResponse } from "next";
import { sendEmail, emailTemplate } from "../../documents/nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // const nodemailer = require("nodemailer");
  // res.status(200).json({ name: "John Doe" });
  if (req.method === "POST") {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }
    try {
      const result = await sendEmail({
        from: email,
        subject: "New message from your friends",
        text: emailTemplate(req.body),
      });
      res.status(200).json({ result });
    } catch (error) {
      res.status(400).json({ error });
    }
  }

  res.status(400).json({ error: "Something went wrong" });
}
