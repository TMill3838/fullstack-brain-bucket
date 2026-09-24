import { MongoClient, ServerApiVersion } from 'mongodb';
import 'dotenv/config';

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

import express from 'express'
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//const { MongoClient, ServerApiVersion } = require('mongodb');


const uri = process.env.MONGO_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

app.use(express.static(join(__dirname, '../public')));
app.use( express.json());


// app.get('/', (req, res) => {
//   res.send('Hello World')
// })

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, '../public', 'hotel.html'));
})

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

app.get('/api/hello', function (req, res) {

  //const message = 'hello from the server as a variable'

  const message = {
    message: 'Hello from hard code json',
    success: 'true'

  }
  res.json(message);


  res.send(
    'hello from the server'
  );

  app.post(
  '/api/students',
  function(req, res) {

    console.log(
      req.body
    );

    res.json({

      received:
        req.body

    });

  }
);

}
);

app.post(
  '/api/students',
  function(req, res) {

    console.log(
      req.body
    );

    res.json({

      received:
        req.body

    });

  }
);


app.listen(5500, () => {
  console.log('Server is running on http://localhost:5500')
})
