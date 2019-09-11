const express = require("express");
const app = express();
const port = process.env.PORT || 5001;

app.use(express.static("public")).listen(port, function() {
  console.log(`Express listening on port ${port} !`);
});
