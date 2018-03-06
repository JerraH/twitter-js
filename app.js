const express = require('express');
const app = express();
const admin = express();
const nunjucks = require('nunjucks');



const locals = {
    title: 'An Example', 
    people: [ {name:'Gandalf'},
    {name:'Frodo'},
    {name: 'Hermione'}
    ]
    
};
nunjucks.configure('/views',{noCache:true});
nunjucks.render('index.html', locals, function (err, output) {
    console.log(output)
});
app.get('/', (req, res) => {
    let myStatus = res.status(200);
   
    console.log('someone has made a GET request for the route!', myStatus.statusCode);
    res.status(200).send('HELLO I LOVE CATS!!!')
} )
app.use('/special', function (req, res, next){
    res.send('this is a special page');
    next();
})


app.get('/cats', (req, res) => {
    console.log('someone has made a GET request for CATS!!!');
    // res.send()
});

app.get('/news', (req, res) => {
    console.log("someone has made a GET request for NEWS");
    res.send('CNN please stop sending me breaking news alerts it has become very distracting')
});




app.listen(3000, function() {
    console.log('server listening')
});

