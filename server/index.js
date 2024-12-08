const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());






// MongoDb
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster1.rjxsn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // versel এ ডিপ্লয় করার সময় কমেন্ট করে দিতে হবে নিচের লাইন
    await client.connect();

    // database collection
    const database = client.db("visasDB");
    const visasCollection = database.collection("visas");
    const applicationsCollection = database.collection("applications");





    
    // read data for home page latest section
    app.get("/", async(req, res) => {
      const cursor = visasCollection.find().sort({_id: -1}).limit(12);
          const result = await cursor.toArray();
          res.send(result);
    });
    

    // read
    app.get('/visa', async(req, res) => {
      const cursor = visasCollection.find();
      const result = await cursor.toArray();
      res.send(result);
  })

  // readOne for visa details
  app.get('/visaDetails/:id', async(req, res) => {
    const id = req.params.id;
    const query = {_id: new ObjectId(id)};
    const result = await visasCollection.findOne(query);
    res.send(result);
  })

  // read my visas data
  app.get('/visa/:email', async(req, res) => {
    const email = req.params.email;
    const query = {userEmail: email};
    const cursor = visasCollection.find(query);
    const result = await cursor.toArray();
    res.send(result);
  })


  // readOne for my visas
  app.get('/visas/:id', async(req, res) => {
    const id = req.params.id;
    const query = {_id: new ObjectId(id)};
    const result = await visasCollection.findOne(query);
    res.send(result);
  })

  
  // read applicatons data
  app.get('/applications/:email', async(req, res) => {
    const email = req.params.email;
    const query = {applicantEmail: email};
    const cursor = applicationsCollection.find(query);
    const result = await cursor.toArray();
    res.send(result);
  })

  
  // create 
  app.post('/visa', async(req, res) =>{
      const data = req.body;
      const result = await visasCollection.insertOne(data);
      res.send(result);
  })


  // create applications
  app.post('/applications', async(req, res) => {
    const data = req.body;
    const result = await applicationsCollection.insertOne(data);
    res.send(result);
  })


  // delete application
  app.delete('/applicationDetails/:id', async(req, res) => {
    const id = req.params.id;
    const query = {_id: new ObjectId(id)};
    const result = await applicationsCollection.deleteOne(query);
    res.send(result);
  })

  // delete visa
  app.delete('/visaDetails/:id', async(req, res) => {
    const id = req.params.id;
    const query = {_id: new ObjectId(id)};
    const result = await visasCollection.deleteOne(query);
    res.send(result);
  })


  // update myVisa
  app.put('/update/:id', async(req, res) => {
    const id = req.params.id;
    const data = req.body;
    const query = {_id: new ObjectId(id)};
    const options = { upsert: true };
    const updatedData = {
      $set: {
        countryName: data.country,
        countryFlag: data.flag,
        visaType: data.type,
        processingTime: data.time,
        visaFee: data.fee,
        validatiy: data.valid,
        applicationMethod: data.applyMethod,
      }
    }
    const result = await visasCollection.updateOne(query, updatedData, options);
    res.send(result);
  })



  // filter visas
  app.get('/filters/:visaType', async(req, res) => {
    const visaType = req.params.visaType;
    const query = {visaType};
    const cursor = applicationsCollection.find(query);
    const result = await cursor.toArray();
    res.send(result);
  })





    // Send a ping to confirm a successful connection
    // versel এ ডিপ্লয় করার সময় কমেন্ট করে দিতে হবে নিচের লাইন
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {

  }
}
run().catch(console.log);

app.listen(port, () => {
  console.log(`Server Running on...: ${port}`);
});
