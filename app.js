// import express
const express = require('expess')
const app = express()

// create routes
app.get('/', (req,res)=>{
    res.send('Home page')
})

// create server
app.listen(3000,()=>{
    console.log('The 97 server is up and running')
})
