const elasticsearch = require("elasticsearch");

const client = new elasticsearch.Client({
  hosts: [
    "http://localhost:9200",
    // "http://es-container:9200",
    // "https://[username]:[password]@[server]:[port]/"
  ],
});

module.exports = client;
