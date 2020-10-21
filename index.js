let express = require("express");
let app = express();
let path = require ("path");


app.get('/', (req,res)=> {
    res.sendFile(path.join(__dirname + '/index.html'));
})
app.use(express.static("."));

app.listen(3000, ()=> {
    console.log("listening at localhost:3000");
})