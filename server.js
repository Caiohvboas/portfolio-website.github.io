import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Configuração do transporte SMTP (exemplo com Gmail, ajustar conforme necessário)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "caiohenriquekaka9@gmail.com", // substitua pelo seu email
    pass: "opxz pamd drmx fjxq", // substitua pela sua senha ou app password
  },
});

app.post("/send-email", (req, res) => {
  console.log("Requisição recebida em /send-email");
  console.log("Corpo da requisição:", req.body);

  const { email, message } = req.body;

  const mailOptions = {
    from: "caiohenriquekaka9@gmail.com", // email autenticado
    to: "caiohenriquekaka9@gmail.com", // destinatário
    subject: "Mensagem do formulário de contato",
    text: `Mensagem de: ${email}\n\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Erro ao enviar email:", error);
      return res
        .status(500)
        .json({
          success: false,
          message: "Erro ao enviar email",
          error: error.toString(),
        });
    } else {
      console.log("Email enviado: " + info.response);
      return res
        .status(200)
        .json({ success: true, message: "Email enviado com sucesso" });
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
