const express = require("express");
const dotenv = require("dotenv");
const formData = require("form-data");
const Mailgun = require("mailgun.js");
const path = require("path");

dotenv.config();

if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
  throw new Error("MAILGUN_API_KEY and MAILGUN_DOMAIN must be set");
}

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY,
});

// Create app from express
const app = express();
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/email", (req, res) => {
  const { from, subject, text } = req.body;
  const data = {
    from: `Excited User <${from}>`,
    to: ["ms.jasmin1999@gmail.com"],
    subject: `${subject}`,
    text: `${text}`,
  };

  mg.messages
    .create(process.env.MAILGUN_DOMAIN, data)
    .then((body) => {
      res.send({ message: "Message sent successfully" });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send({ message: "Error in sending message" });
    });
});

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, "build")));

// Handle all other routes by serving the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
