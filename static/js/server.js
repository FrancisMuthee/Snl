const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// EMAIL ROUTE
app.post("/subscribe", async (req, res) => {
  const { email } = req.body;

  try {
    // transporter settings
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "francisnjaramba2@gmail.com",
        pass: "pudg bqto wdtk xsjk",
      },
    });

    // email options
    await transporter.sendMail({
      from: "francisnjaramba2@gmail.com",
      to: email,
      subject: "You're successfully in!",
      text: "Welcome on board! You're successfully in!",
    });

    res.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.log(error);
    res.json({ message: "Failed to send email" });
  }
});

// SERVER
app.listen(5500, () => {
  console.log("Server running on port 5500");
});
