// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })

const express=require('express');
const app = express();
const port=3000;

const users=[
    {id:1,name:"wahid",email:"wahid@example",phone:"0187879899898"},
    {id:2,name:"wahid",email:"zahidd@example",phone:"0187879899898"},
    {id:3,name:"wahid",email:"wahid@example",phone:"0187879899898"},
    {id:14,name:"wahid",email:"wahid@example",phone:"0187879899898"},
    {id:1,name:"wahid",email:"wahid@example",phone:"0187879899898"},
    {id:8,name:"wahid",email:"wahid@example",phone:"0187879899898"},
    {id:9,name:"wahid",email:"wahid@example",phone:"0187879899898"},
    {id:1,name:"wahid",email:"wahid@example",phone:"0187879899898"},
    {id:1,name:"wahid",email:"wahid@example",phone:"0187879899898"},
    {id:1,name:"wahid",email:"wahid@example",phone:"0187879899898"},
    {id:1,name:"wahid",email:"wahid@example",phone:"0187879899898"},
    {id:1,name:"wahid",email:"wahid@example",phone:"0187879899898"}
]

app.get('/', (req,res)=>{
    res.send('Hello World from express js v3.0 are vai 2.0')
})
app.get('/users',(req,res)=>{
    res.send(users);
})
app.get('/users/:id',(req,res)=>{
    const id=req.params.id;
    const user=users[id]
    res.send(user);
})
app.listen(port,()=>{
    console.log('listening to port 3000')
});