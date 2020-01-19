const express = require('express')
const app = express()
const port = 4000
var mongoose = require('mongoose');
var graphqlHTTP = require('express-graphql');
var schema = require('./graph-ql/book');
var cors = require("cors");
app.use('*', cors());


mongoose.connect('mongodb://localhost/bookshop', { useNewUrlParser: true })
    .then(() =>  console.log('connection successful'))
.catch((err) => console.error(err));


app.use('/graphql', cors(), graphqlHTTP({
    schema: schema,
    rootValue: global,
    graphiql: true,
}));

app.listen(port, function(){ console.log(`App listening on port ${port}!`)})