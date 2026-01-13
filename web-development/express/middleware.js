const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000
// HUM JAISE PICHLE ISME ROUTES USE KIYA HAI WAHA BHI HAR ROUTES KE LIYE SEPRATE MIDDLEWARE USE KAR SAKTE HAI JIISE HUMHARE ROUTES EAILY WORK KARE

// MIDDLEWARE 1 - Can be used as Information collector
app.use((req,res,next) =>{
    console.log('m1')
    fs.appendFileSync("logs.txt" ,`${Date.now()} is a ${req.method}\n`)
    // ye humhara sara data ek txt file me store karega jitne baar bhi program run hoga
    console.log(`${Date.now()} is a ${req.method}`)
    // res.send("Hacked by Middleware 1")
    // YAHA PAR YAHI HUMHARE REQ RUKH JAYEGI KYUKI USKO RESPONCE MIL GAYA HAI NA ISLIYE PAR YE USE NAHI KARNA KABHI BHI AUR AGAR KIYA HAI USE TO NEXT NAHI DENA YE USE KARNE KE BAAD
    req.Unmesh = "I am Unmesh"
    // YE HAM BAAD ME KABHI BHI ACCESS KAR SAKTE HAI
    next()
})
// MIDDLEWARE KA SYNTAX app.use(function()=>{KOI BHI PROCESS BICH ME})

// MIDDLEWARE 2 
app.use((req,res,next) =>{
    console.log('m2')
    req.Unmesh = "Hii this is Unmesh"
    // final output me ye run hoga kyuki ye last me aaya hai
    next()
})

// MIDDLEWARE COMMPULSORY APNE PROGRAM ME RUN HOGA VO BHI SEQUENCE ME HUMHARE PEHELE MIDDLEWARE1 PHIR 2 AUR NEXT() KE WAJE SE 2 RUN HOGA AGAR HUMNE NEXT NAHI DIYA TO HUMHARE WEBSITE LOADING ME PHAS JAYEGI AUR AGE NAHI JAYEGI EK BARR MIDDLEWARE 1 KA NEXT NIKAL KE DEKHO SAMAJ JAOGE

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/Contact', (req, res) => {
  res.send('Hello Contact' + req.Unmesh)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})