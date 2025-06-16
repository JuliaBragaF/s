const express = require('express');
const app = express();
const port = 3000;
const router = require("./rotas/Router")
app.use(express.json());


app.use("/edit", router )


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
