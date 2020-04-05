const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.send({ hi: 'there' })
});

const PORT = process.env.PORT || 9974;
app.listen(PORT);