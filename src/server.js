const app = require("./app");

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`CI/CD Demo S2 démarrée sur le port ${port}`);
});
