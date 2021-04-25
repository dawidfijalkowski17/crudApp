const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require("cors");

const { mongoose } = require('./mongoose');
const CampaignSchema = require('./models/campaign_mode');

app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET , PUT , POST , DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, x-requested-with");
    next();
})

app.listen(3000, ()=>{
    console.log('Server is listening on port 3000')
})

app.get('', (req, res) =>{
    
})

app.post('/addItem', (req, res) =>{
    let name = req.body.name;
    let keywords = req.body.keywords;
    let bidAmount = req.body.bidAmount;
    let campaignFound = req.body.campaignFound;
    let status = req.body.status;
    let town = req.body.town;
    let radius = req.body.radius;


    let Campaign = new CampaignSchema({
        name,
        keywords,
        bidAmount,
        campaignFound,
        status,
        town,
        radius
    });

    Campaign.save().then((data) =>{
        res.send(data);
    })

})

app.delete('/mainPage/list/:id', (req, res) =>{
    CampaignSchema.findOneAndDelete( { _id: req.params.id  }).then((data)=>{   
        res.send(data);
    })
})

app.get('/list', (req, res) =>{
  
    CampaignSchema.find({}).then((data)=>{
        res.send(data);
    }).catch( (err) =>{
        console.log(err);
    }
    )
});

app.patch('/mainPage/list/edit-campaign/:id', (req, res) =>{
    
    CampaignSchema.findOneAndUpdate({ _id: req.params.id}, {$set: req.body }).then(()=>{
        res.sendStatus(200)
    })
});