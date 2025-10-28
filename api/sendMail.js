// import nodemailer from "nodemailer";

// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method not allowed" });
//   }

//   const { firstName, lastName, email, phone, message } = req.body;
//   const name = `${firstName} ${lastName}`;

//   try {
//     // ✅ Nodemailer transporter with TLS for Vercel
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//       tls: {
//         rejectUnauthorized: false, // allow self-signed certs
//       },
//     });

//     const mailOptions = {
//       from: email,
//       to: process.env.EMAIL_USER,
//       subject: `Portfolio Contact from ${name}`,
//       html: `
//         <h3>Contact Details</h3>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${phone}</p>
//         <p><strong>Message:</strong></p>
//         <p>${message}</p>
//       `,
//     };

//     const info = await transporter.sendMail(mailOptions);
//     console.log("✅ Email sent successfully:", info.messageId);

//     return res.status(200).json({ code: 200, status: "Message Sent" });
//   } catch (error) {
//     console.error("❌ Error sending email:", error);

//     // Return detailed error in dev mode only
//     const isDev = process.env.NODE_ENV !== "production";
//     return res.status(500).json({
//       code: 500,
//       status: "Message Failed",
//       error: isDev ? error.toString() : undefined,
//     });
//   }
//   console.log("EMAIL_USER:", process.env.EMAIL_USER);
// console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "*****" : "MISSING");


// }


import nodemailer from "nodemailer";

export default async function handler(req, res) {
  console.log("EMAIL_USER:", process.env.EMAIL_USER);
  console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "*****" : "MISSING");

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { firstName, lastName, email, phone, message } = req.body;
  const name = `${firstName} ${lastName}`;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact from ${name}`,
      html: `
        <h3>Contact Details</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully:", info.messageId);

    return res.status(200).json({ code: 200, status: "Message Sent" });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    return res.status(500).json({
      code: 500,
      status: "Message Failed",
      error: process.env.NODE_ENV !== "production" ? error.toString() : undefined,
    });
  }
}
