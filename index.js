const configs = require("./credentials.json");

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: configs.host,
  port: configs.port,
  secure: configs.secure,
  auth: {
    user: configs.email,
    pass: configs.pass,
  },
});

async function main() {
  const info = await transporter.sendMail({
    from: configs.email,
    to: configs.to,
    subject: "Hello =",
    text: "Hello world?",
    html: "<b>Hello world?</b>",
  });


  transporter.sendMail(info, (error, info) => {
    if (error) {
      console.error("Error sending email: ", error);
    } else {
      console.log("Email sent: ", info.response);
    }
  });
}

main().catch(console.error);
