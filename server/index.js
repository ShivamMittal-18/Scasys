const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

console.log("MAIL_USER:", process.env.MAIL_USER);
console.log("MAIL_PASS:", process.env.MAIL_PASS ? "LOADED" : "MISSING");


    // Send to Org
    await transporter.sendMail({
      from: `"Scasys Website" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER,
      subject: `New Query from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Query</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8f9fa;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #FEFEFE;">
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #2B7FFF 0%, #01A5FF 100%); padding: 30px 20px; text-align: center;">
              <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 15px;">
                <img src="https://d230vkgpbs03p1.cloudfront.net/5619aa3e-3f66-44d1-9ef7-34840110fb07.png" alt="Scasys Logo" style="width: 40px; height: 40px; margin-right: 12px;">
                <div style="font-family: 'Agile', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 24px; font-weight: 700; color: #FEFEFE; letter-spacing: 1px;">
                  SCASYS
                </div>
              </div>
              <h1 style="color: #FEFEFE; margin: 0; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                New Contact Query
              </h1>
              <p style="color: #FEFEFE; margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">
                Scasys Technologies Website
              </p>
            </div>
            
            <!-- Content -->
            <div style="padding: 40px 30px;">
              <!-- Alert Badge -->
              <div style="background-color: #2B7FFF; color: #FEFEFE; padding: 8px 16px; border-radius: 20px; display: inline-block; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 25px;">
                🔔 New Inquiry
              </div>
              
              <!-- Customer Details -->
              <div style="background-color: #f8f9fa; border-left: 4px solid #2B7FFF; padding: 25px; margin-bottom: 25px; border-radius: 0 8px 8px 0;">
                <h3 style="color: #115850; margin: 0 0 20px 0; font-size: 18px; font-weight: 600;">
                  Customer Information
                </h3>
                
                <div style="margin-bottom: 15px;">
                  <span style="color: #1C398E; font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Name:</span>
                  <p style="color: #333; margin: 5px 0 0 0; font-size: 16px; font-weight: 500;">${name}</p>
                </div>
                
                <div>
                  <span style="color: #1C398E; font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Email:</span>
                  <p style="color: #2B7FFF; margin: 5px 0 0 0; font-size: 16px; font-weight: 500;">
                    <a href="mailto:${email}" style="color: #2B7FFF; text-decoration: none;">${email}</a>
                  </p>
                </div>
              </div>
              
              <!-- Message -->
              <div style="background-color: #FEFEFE; border: 2px solid #01A5FF; padding: 25px; border-radius: 8px;">
                <h3 style="color: #115850; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">
                  Message
                </h3>
                <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; border-left: 3px solid #01A5FF;">
                  <p style="color: #333; margin: 0; font-size: 15px; line-height: 1.6;">${message}</p>
                </div>
              </div>
              
              <!-- CTA -->
              <div style="text-align: center; margin-top: 30px;">
                <a href="mailto:${email}" style="background: linear-gradient(135deg, #2B7FFF 0%, #01A5FF 100%); color: #FEFEFE; padding: 12px 30px; text-decoration: none; border-radius: 25px; font-weight: 600; font-size: 14px; display: inline-block; box-shadow: 0 4px 15px rgba(43, 127, 255, 0.3);">
                  Reply to Customer
                </a>
              </div>
            </div>
            
            <!-- Footer -->
            <div style="background-color: #115850; padding: 20px; text-align: center;">
              <div style="display: flex; align-items: center; justify-content: center;">
                <img src="https://d230vkgpbs03p1.cloudfront.net/5619aa3e-3f66-44d1-9ef7-34840110fb07.png" alt="Scasys Logo" style="width: 20px; height: 20px; margin-right: 8px;">
                <p style="color: #FEFEFE; margin: 0; font-size: 14px; opacity: 0.8; font-family: 'Agile', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-weight: 600; letter-spacing: 0.5px;">
                  SCASYS TECHNOLOGIES | Contact Form Notification
                </p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    // Confirmation to User
    // Confirmation to User
await transporter.sendMail({
  from: `"Scasys Technologies" <${process.env.MAIL_USER}>`,
  to: email,
  subject: "We Received Your Query",
  html: `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank You for Contacting Us</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8f9fa;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #FEFEFE;">
        <div style="background: linear-gradient(135deg, #2B7FFF 0%, #01A5FF 100%); padding: 40px 20px; text-align: center;">
          <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 20px;">
            <img src="https://d230vkgpbs03p1.cloudfront.net/5619aa3e-3f66-44d1-9ef7-34840110fb07.png" alt="Scasys Logo" style="width: 50px; height: 50px; margin-right: 15px;">
            <div style="font-family: 'Agile', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 28px; font-weight: 700; color: #FEFEFE; letter-spacing: 1.2px;">
              SCASYS
            </div>
          </div>
          <h1 style="color: #FEFEFE; margin: 0; font-size: 32px; font-weight: 700; letter-spacing: -0.5px;">
            Thank You!
          </h1>
          <p style="color: #FEFEFE; margin: 15px 0 0 0; font-size: 18px; opacity: 0.9;">
            We've received your message
          </p>
        </div>

        <div style="padding: 40px 30px;">
          <div style="text-align: center; margin-bottom: 35px;">
            <div style="background-color: #2B7FFF; color: #FEFEFE; padding: 10px 20px; border-radius: 25px; display: inline-block; font-size: 14px; font-weight: 600; margin-bottom: 20px;">
              ✨ Confirmation
            </div>
            <h2 style="color: #115850; margin: 0; font-size: 24px; font-weight: 600;">
              Hello ${name}!
            </h2>
          </div>

          <div style="background: linear-gradient(135deg, #f8f9fa 0%, #FEFEFE 100%); border: 2px solid #01A5FF; padding: 30px; border-radius: 12px; margin-bottom: 30px;">
            <p style="color: #333; margin: 0 0 20px 0; font-size: 16px; line-height: 1.6;">
              Thank you for reaching out to <strong style="color: #2B7FFF;">Scasys Technologies</strong>. We appreciate your interest and have successfully received your inquiry.
            </p>

            <div style="background-color: #FEFEFE; border-left: 4px solid #01A5FF; padding: 20px; border-radius: 0 8px 8px 0; margin: 20px 0;">
              <h4 style="color: #1C398E; margin: 0 0 10px 0; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                Your Message:
              </h4>
              <p style="color: #666; margin: 0; font-size: 14px; line-height: 1.5; font-style: italic;">
                "${message}"
              </p>
            </div>

            <p style="color: #333; margin: 20px 0 0 0; font-size: 16px; line-height: 1.6;">
              Our team will review your message and get back to you within <strong style="color: #2B7FFF;">24-48 hours</strong>. We're excited to discuss how we can help you achieve your goals.
            </p>
          </div>

          <div style="background-color: #115850; padding: 25px; border-radius: 8px; margin-bottom: 30px;">
            <h3 style="color: #FEFEFE; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">
              What happens next?
            </h3>
            <ul style="color: #FEFEFE; margin: 0; padding-left: 20px; font-size: 14px; line-height: 1.6;">
              <li style="margin-bottom: 8px;">Our team will review your inquiry carefully</li>
              <li style="margin-bottom: 8px;">We'll prepare a personalized response</li>
              <li style="margin-bottom: 8px;">You'll hear from us within 24-48 hours</li>
              <li>We'll discuss the best solutions for your needs</li>
            </ul>
          </div>

          <div style="text-align: center; padding: 20px; background-color: #f8f9fa; border-radius: 8px;">
            <p style="color: #666; margin: 0 0 15px 0; font-size: 14px;">
              Need immediate assistance? Feel free to reach out:
            </p>
            <p style="color: #2B7FFF; margin: 0; font-weight: 600; font-size: 16px;">
              <a href="mailto:${process.env.MAIL_USER}" style="color: #2B7FFF; text-decoration: none;">${process.env.MAIL_USER}</a>
            </p>
          </div>
        </div>

        <div style="background: linear-gradient(135deg, #1C398E 0%, #115850 100%); padding: 30px 20px; text-align: center;">
          <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 15px;">
            <img src="https://d230vkgpbs03p1.cloudfront.net/5619aa3e-3f66-44d1-9ef7-34840110fb07.png" alt="Scasys Logo" style="width: 30px; height: 30px; margin-right: 10px;">
            <h3 style="color: #FEFEFE; margin: 0; font-size: 20px; font-weight: 700; font-family: 'Agile', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; letter-spacing: 1px;">
              SCASYS TECHNOLOGIES
            </h3>
          </div>
          <p style="color: #FEFEFE; margin: 0; font-size: 14px; opacity: 0.9;">
            Innovative Solutions | Exceptional Service | Your Success
          </p>
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid rgba(254, 254, 254, 0.2);">
            <p style="color: #FEFEFE; margin: 0; font-size: 12px; opacity: 0.7;">
              This is an automated confirmation email. Please do not reply to this message.
            </p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `,
});

    res.status(200).json({ success: true, message: "Emails sent successfully" });
  } catch (err) {
    console.error("Error sending email:", err);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

app.listen(4000, () => console.log("Server running on http://localhost:4000"));