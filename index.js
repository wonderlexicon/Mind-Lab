let express = require("express");
let app = express();
let path = require ("path");
let nedb = require ("nedb");

let thoughtsDb =  new nedb("thoughts.db");
thoughtsDb.loadDatabase();

app.get('/getThoughts', (req,res)=> {
    thoughtsDb.find({}, (err, docs) => {
        res.json({data:docs})
    })
})
app.post('/postThoughts', (req,res)=> {
    // thoughtsDb.find({}, (err, docs) => {
    //     res.json({data:docs})
    // })
    console.log('posting');
    let newThought = {
        date: Date(), 
        thought: req.thought
    }
    db.insert(newThought, (err, newDocs)=>{
        if (err){
            res.json({task: "failed"});

        } else{
            res.json({task: "success!!!"}); 
        }
    }
    )
})

app.get('/', (req,res)=> {
    res.sendFile(path.join(__dirname + '/index.html'));
})
app.use(express.static("."));

app.listen(3000, ()=> {
    console.log("listening at localhost:3000");
})