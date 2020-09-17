const express = require('express');
const cors = require('cors');
const sendGrid = require('@sendGrid/mail');
const path=require("path");
const app = express();

app.use(express.json());

app.use(cors());
app.use(express.static(path.join(__dirname, "Client/build")));
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();

});

app.get('/api', (req,res, next)=>{
    res.send('API status: Running')
});

app.post('/api/emial', (req, res, next)=>{
    sendGrid.setApiKey('');

});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/Client/build/index.html"));
    });
    
app.listen(process.env.PORT || 5000, () => {
    console.log("Server running on port", 5000);
    });
