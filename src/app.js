const express = require('express');
const app = express();
const movies = require('./routes/movies_routes');
const genre = require('./routes/genres_routes');

app.set('port', process.env.PORT || 3001);
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type,Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use('/movies', movies);
app.use('/genres', genre);
app.get('/test', (req, res)=>{
    res.send("A funcionar!");
})

app.listen(app.get('port'), ()=>{
    console.log('Start server on port ' + app.get('port'));
})