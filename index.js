const express = require('express');

const app = express();
app.use('/', express.static(__dirname));
app.get('/', (req, res) => {
    res.sendFile(`__dirname/${index.html}`);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Running on port ${port}`);
})