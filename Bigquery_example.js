"use strict";
const { authenticate } = require("@google-cloud/local-auth");
const { BigQuery } = require("@google-cloud/bigquery");
const json = require("./key.json");
const { auth } = require("google-auth-library");

this.name = "Bigquery_example";

async function quickstart() {
  console.log(json);
  const keys = json;
  const client = auth.fromJSON(keys);
  client.scopes = ["https://www.googleapis.com/auth/bigquery"];
  const url = `https://dns.googleapis.com/dns/v1/projects/laboratorio-387121`;
  const res = await client.request({ url });
  console.log(res.data);
}

async function createTable() {
  const optionsKey = {
    keyFilename: "./key.json",
    projectId: "laboratorio-387121",
  };
  // Queries a public Shakespeare dataset.
  //await quickstart();
  // Create a client
  const bigqueryClient = new BigQuery(optionsKey);

  // The SQL query to run
  const sqlQuery = `SELECT word, word_count
                    FROM \`bigquery-public-data.samples.shakespeare\`
                    WHERE corpus = @corpus
                    AND word_count >= @min_word_count
                    ORDER BY word_count DESC`;

  
  const datasetId = "LaboratorioBigQuery";
  const tableId = "my_table";
  const schema = "Name:string, Age:integer, Weight:float, IsMagic:boolean";

  const options = {
    schema: schema,
    location: "US",
  };
    try {
        const [table] = await bigqueryClient
    .dataset(datasetId)
    .createTable(tableId, options);
    console.log(`Table ${table.id} created.`);
    } catch (error) {
        console.log();
    }
  
  
  
}

exports.createTable = createTable;
