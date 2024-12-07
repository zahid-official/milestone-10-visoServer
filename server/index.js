const { MongoClient, ServerApiVersion } = require("mongodb");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

// server home page
app.get("/", (req, res) => {
  res.send("Server Connected Successfully!");
});



// MongoDB
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.iaxmq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // versel এ ডিপ্লয় করার সময় কমেন্ট করে দিতে হবে নিচের লাইন
    await client.connect();

    // database collection
    const database = client.db("visasDB");
    const visasCollection = database.collection("visas");





    // read
    app.get('/visa', async(req, res) => {
        const cursor = visasCollection.find();
        const result = await cursor.toArray();
        res.send(result);
    })
    
    // create 
    app.post('/visa', async(req, res) =>{
        const data = req.body;
        const result = await visasCollection.insertOne(data);
        res.send(result);
    })

    





    // Send a ping to confirm a successful connection
    // versel এ ডিপ্লয় করার সময় কমেন্ট করে দিতে হবে নিচের লাইন
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB Server!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.log);

app.listen(port, () => {
  console.log(`Server Running on...: ${port}`);
});
