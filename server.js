// import app file
const app = require("./backend/app");
// make Server Listening on port 3000
// http://localhost/3000
app.listen(3000, () => {
  console.log("BE server is listening on Port 3000 ...");
});
