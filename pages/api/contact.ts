import type { NextApiRequest, NextApiResponse } from "next";
import { sendEmail, emailTemplate } from "../../documents/nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
      const { email } = req.body;
      if (!email) {
        return res.status(400).json({ error: "Email is required" });
      }
      const result = await sendEmail({
        from: email,
        subject: "New message from your friends",
        text: emailTemplate(req.body),
      });
      return res.status(200).json({ result });
    } else return res.status(400).json({ error: "Something went wrong" });
  } catch (error) {
    return res.status(400).json({ error });
  }
}
