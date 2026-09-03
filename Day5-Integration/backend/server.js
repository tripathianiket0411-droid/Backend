const dotenv = require("dotenv")
dotenv.config();
const app = require("./src/app");

let port = process.env.port || 4000;

app.listen(port, () => {

    console.log(`Aur yaha port ${port} pe server ne pelam pel macha diya hai `)
})