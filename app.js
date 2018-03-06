const express = require('express');
const app = express();






app.get('/', (req, res) => {
    let myStatus = res.status();
    if (!myStatus.socket.Socket._hadError) {
        myStatus = res.status(200);
    }
    console.log('someone has made a GET request for the route!', myStatus.statusCode);
    res.status(200).send('HELLO I LOVE CATS!!!')
} )

app.get('/cats', (req, res) => {
    console.log('someone has made a GET request for CATS!!!');
    res.send('MORE CATS!!!')
} )

app.get('/news', (req, res) => {
    console.log("someone has made a GET request for NEWS");
    res.send('CNN please stop sending me breaking news alerts it has become very distracting')
})










app.listen(3000, function() {
    console.log('server listening')
});
