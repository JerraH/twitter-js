const express = require('express');
const app = express();






app.get('/', (req, res) => {
    res.status(200).send('HELLO I LOVE CATS!!!')
} )

app.get('/cats', (req, res) => {
    res.sendStatus(200)
} )








app.listen(3000, function() {
    console.log('server listening')
});
