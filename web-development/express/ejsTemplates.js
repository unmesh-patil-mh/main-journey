const express = require('express')
const app = express()
const port = 3000

app.set('view engine','ejs');
// EJS TEMPLATE ENGINE USE KARNA CHAHTA HU

app.get('/', (req,res) =>{
    let sitename ="Welcome to Webpage"
    let searchText = 9022010210
    // PROBLEM IS NOW HOW TO ADD DATA PRESENT ABOVE TO OUR WEB.HTML FILE PRESENT IN OUR TEMPLATE  SO TO SOLVE THIS PROBLEM WE USE EJS TEMPLATE ENGINE
    res.render("web", {sitename: sitename,searchText: searchText})
})

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})