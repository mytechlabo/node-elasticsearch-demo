const client = require("../configs/connection.js");

client.indices.getMapping(
  {
    index: "gov",
    type: "constituencies",
    include_type_name: true, // add this
  },
  function (error, response) {
    if (error) {
      console.log(error.message);
    } else {
      console.log("Mappings:\n", response.gov.mappings.constituencies.properties);
    }
  }
);
