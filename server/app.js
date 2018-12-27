const express = require('express');
app = express();
const mongoose = require('mongoose');

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
  const deliveryInfo = req.body.delivery;
  console.log("Delivery Info", deliveryInfo);
});

app.listen(3000, () => {
  console.log("API Server listening on 3000");
});
