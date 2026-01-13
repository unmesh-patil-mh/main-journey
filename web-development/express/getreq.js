const express = require('express')
const blog = require('./routes/blog')
// IS SE HUM JO APNE BLOG JO ROUTES ME STORE HAI USKA JS USE KARENGE APNE ISS CODE ME
const app = express()
const port = 3000

app.use(express.static("public"))
app.use('/blog',blog)
// ISS SE HUM INITIALIZE KAR RAHE HAI KE HUMARE /blog JAB APNE LOCAL HOST KE BAAD LAGAYENGE TO BLOG.JS ME JO HAI VO RUN HOGA ISSE KEHETE HAI HUMHARA ROUTING JO CODE KO NEAT RAKHNE ME MADAT KARTA HAI HUMHARI

app.get('/', (req,res) =>{
    res.send('Hey this is GET request')
    console.log('GET request initialized')
})

app.post('/', (req,res) =>{
    res.send('Hello world post')
    console.log('POST request is running')
})

app.get('/index', (req,res) =>{
    res.sendFile('templates/index.html' ,{root: __dirname})
    // RES.SENDFILE HUM USE KARTE HAI APNE PURI KE PURI HTML FILE DISPLAY KARNE KE LIYE ROOT HUMNE USE KIYA HAI APNA PATH DEFINE KARNE KE LIYE KYUKI HUMNE APNA PURA PATH ABHI TAK UTILIZE NAHI KIYA HAI NA ISLIYE
    // GITHUB SE ASRE API FUNCTION DEKH LENA EK BARR
    console.log('INDEX file')
})

app.get('/api', (req,res) =>{
    res.json({a:1,b:2,c:3,name:["Unmesh","Hii"]})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})