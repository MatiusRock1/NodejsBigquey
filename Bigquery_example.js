"use strict";
const { authenticate } = require("@google-cloud/local-auth");
const { BigQuery } = require("@google-cloud/bigquery");
const { client } = require('google-cloud-bigquery');
const { join } = require('path');
const json = require("./key.json");
const { auth } = require("google-auth-library");

this.name = "Bigquery_example";
const optionsKey = {
    keyFilename: "./key.json",
    projectId: "laboratorio-387121",
  };
  // Queries a public Shakespeare dataset.
  //await quickstart();
  // Create a client
 

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
    const bigqueryClient = new BigQuery(optionsKey);

  // The SQL query to run
  

  
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
        console.log( `table ${tableId} already exist`);
        //console.error(error);
    }
  
}

async function createTableSchema() {
    const bigQuery = await client.new({ jsonKeyFile: join(__dirname, './key.json') })
    const db = bigQuery.db.get('LaboratorioBigQuery')
    const userTbl =  db.table('user');

    userTbl.exists()
	.then(yes => yes 
		? console.log(`Table '${userTbl.name}' already exists in DB '${db.name}'`)
		: userTbl.create.new({ 
			schema: {
				id: 'integer',
				username: 'string',
				friends: [{
					id: 'integer',
					username: 'string',
					score: 'float'
				}],
				country: {
					code: 'string',
					name: 'string'
				},
				married: 'boolean',
				tags:['string'],
				inserted_date: 'timestamp'
			} 
		}).then(() => console.log(`Table '${userTbl.name}' successfully added to DB '${db.name}'`)))
}
async function insertData() {
    const bigQuery = await client.new({ jsonKeyFile: join(__dirname, './key.json') })
    const db = bigQuery.db.get('LaboratorioBigQuery')
    const userTbl =  db.table('user');
    userTbl.insert.values({ data:[{
		id: 1,
		username: 'Nicolas',
		inserted_date: new Date()
	}, {
		id: 2,
		username: 'Brendan',
		country: {
			code: 'AU',
			name: 'Australia'
		},
		friends:[{
			id: 1,
			username: 'Nicolas',
			score: 0.87
		}, {
			id: 3,
			username: 'Boris',
			score: 0.9
		}],
		inserted_date: new Date()
	}, {
		id: '3',
		username: 'Boris',
		tags:['admin',1],
		inserted_date: Date.now()/1000
	}]
})

}
exports.insertData = insertData;
exports.createTableSchema = createTableSchema;
exports.createTable = createTable;
