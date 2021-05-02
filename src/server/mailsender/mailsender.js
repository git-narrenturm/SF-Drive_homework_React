const { URL } = require("../constants/general");
const nodemailer = require("nodemailer");
const AES = require("crypto-js/AES");
const bcrypt = require("bcrypt");

const { PRIVATE_KEY } = require("../auth/authConstants");

const sendMail = async (req, res) => {
  const { personName, personEmail } = req.body;
  const personEmailEncrypted = AES.encrypt(personEmail, PRIVATE_KEY);

  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  const testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  // send mail with defined transport object
  await transporter.sendMail(
    {
      from: `SkillDrive <no-reply@skilldrive.com>`,
      to: `${personName} <${personEmail}>`,
      subject: "Сброс пароля на SkillDrive",
      text: `Здравствуйте, ${personName}! Вас приветсвует команда SkillDrive. Нами был получен запрос на сброс пароля. Чтобы сбросить пароль, перейдите по ссылке: ${URL}/reset-password/${personEmailEncrypted}. Если Вы не запрашивали сброс пароля, просим Вас проигнорировать это письмо.`,
      html: `
      <p>Здравствуйте, <b>${personName}!</b><br><br>
      Вас приветсвует команда SkillDrive. Нами был получен запрос на сброс пароля.<br>
      Чтобы сбросить пароль, перейдите по <a href="${URL}/reset-password?${personEmailEncrypted}" target="_blank">ссылке</a>.<br>
      Если Вы не запрашивали сброс пароля, просим Вас проигнорировать это письмо.
      </p>
    `,
    },
    (error, info) => {
      if (!!error) {
        return res.status(400).send({
          success: false,
          error: {
            message: "Could not deliver a message. Please try again later",
          },
        });
      } else {
        let messageId = info.response;
        messageId = messageId.slice(messageId.indexOf("MSGID=") + 6);
        console.log(
          `Preview email: https://ethereal.email/message/${messageId}`
        );
        return res.status(200).send({
          success: true,
          error: false
        });
      }
    }
  );
};

module.exports = sendMail;
