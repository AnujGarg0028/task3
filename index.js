const express = require('express');
const app = express();
const port = 8080;

app.get('/test', (req, res) => {
   res.send('Hello, World!');
});

app.listen(process.env.port || process.env.PORT || port, () => {console.log(`Server listening on port ${port}`);
});
