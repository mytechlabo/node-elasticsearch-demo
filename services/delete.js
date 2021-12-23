const client = require("../configs/connection.js");

client.indices.delete({ index: "gov" }, function (err, resp, status) {
  console.log("delete", resp);
});
