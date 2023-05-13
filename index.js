const express = require('express');
const app = express();
const port = 8080;

const { DefaultAzureCredential } = require("@azure/identity");
const { SecretClient } = require("@azure/keyvault-secrets");

const credential = new DefaultAzureCredential();

console.log(credential);

const keyvaultname='anujkeyvault';
const url='http://'+keyvaultname+'.vault.azure.net';

const client=new SecretClient(url,credential);

app.get('/test', (req, res) => {
   res.send('Hello, World!');
});

app.get('/key', async (req, res) => {
   const secret=await client.getSecret('pass');
   res.send(secret.value);
});
app.listen(process.env.port || process.env.PORT || port, () => {console.log(`Server listening on port ${port}`);
});