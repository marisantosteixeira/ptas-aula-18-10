const express = require("express");
const bcrypt = require("bcryptjs"); //fazer a criptografia de uma senha
const app = express();

app.use(express.json());

app.listen(4000, () => {console.log("ta rodando...")});

app.post("/crypto", async function crypto(req,res){
  const { password} = req.body;
  const newpassword = await bcrypt.hash(password,10); //hash é um paramentro q vc passa a senha e a força
  return res.send(newpassword);
});

app.post("/descrypt", async function descrypt(req,res){
  const { password, passwordCrypto} = req.body;
  const response = await bcrypt.compare(password,passwordCrypto);
  return res.send(response);
})
