const express = require('express');
app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept, Authorization'
//   );
//   if (req.method === 'OPTIONS') {
//     res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
//     return res.status(200).json({});
//   }
//   next();
// });

mongoose.Promise = Promise;

mongoose.connect("mongodb://localhost/weed-deliver", { useNewUrlParser: true })
.then(res => console.log("Connected to DB"))
  .catch(err => console.log("Error connecting to DB: ", err))

const deliverySchema = new mongoose.Schema({
  name: String,
  address: String,
  notes: String
});

const Delivery =  mongoose.model("Delivery", deliverySchema);

app.get('/api/deliveries', (req, res) => {
  Delivery.find({}, (err, allDeliveries)=> {
    if (err){
      console.log("Error finding all deliveries: ", err);
      res.send("Error");
      return;
    }
    res.send(allDeliveries);
  });
});

app.post('/api/deliveries', (req, res) => {
  Delivery.create(req.body, (err, newDelivery)=>{
    if(err){
      console.log("Err posting");
      return;
    }
    res.redirect('back');
  })
});

app.listen(3000, () => {
  console.log("API Server listening on 3000");
});
