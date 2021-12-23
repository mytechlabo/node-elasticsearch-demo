const client = require("../configs/connection.js");

client.indices.putMapping(
  {
    index: "gov",
    type: "constituencies",
    body: {
      properties: {
        // constituencyname: {
        //   type: "string", // type is a required attribute if index is specified
        //   index: "not_analyzed",
        // },
        // signatures_by_constituency: {
        //   type: "nested",
        //   properties: {
        //     name: {
        //       type: "string",
        //       index: "not_analyzed",
        //     },
        //   },
        // },
        // signatures_by_country: {
        //   type: "nested",
        //   properties: {
        //     name: {
        //       type: "string",
        //       index: "not_analyzed",
        //     },
        //   },
        // },
      },
    },
    include_type_name: true,
  },
  function (err, resp, status) {
    if (err) {
      console.log(err);
    } else {
      console.log(resp);
    }
  }
);
