// require('dotenv').config()
import 'dotenv/config';
import { MongoClient, ServerApiVersion, ObjectId } from 'mongodb';
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const uri = process.env.MONGO_URI;

app.use(express.static(join(__dirname, '../public')));

app.use(express.json({ limit: '10mb' }));

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
const db = client.db('hotel');
const collection = db.collection('items');

// Updated Seed Data with Factions, Series Eras, and Working TFWiki Images
const seedData = [
  {
    name: "Megatron",
    faction: "Decepticon",
    era: "Generation 1",
    altMode: "Tank / Walther P38",
    image: "https://tfwiki.net/mediawiki/images2/thumb/9/99/Megatronguido.jpg/350px-Megatronguido.jpg",
    wikiLink: "https://tfwiki.net/wiki/Megatron_(G1)",
    notes: "Decepticon Supreme Commander"
  },
  {
    name: "Optimus Prime",
    faction: "Autobot",
    era: "Generation 1",
    altMode: "Freightliner FL86 Cab-over Semi",
    image: "https://tfwiki.net/mediawiki/images2/thumb/7/7c/OptimusPrimeG1.jpg/350px-OptimusPrimeG1.jpg",
    wikiLink: "https://tfwiki.net/wiki/Optimus_Prime_(G1)",
    notes: "Autobot Leader — Includes Ion Blaster & Matrix"
  },
  {
    name: "Soundwave",
    faction: "Decepticon",
    era: "Generation 1",
    altMode: "Microcassette Recorder",
    image: "https://tfwiki.net/mediawiki/images2/thumb/c/c8/G1_Soundwave_Dreamwave.jpg/350px-G1_Soundwave_Dreamwave.jpg",
    wikiLink: "https://tfwiki.net/wiki/Soundwave_(G1)",
    notes: "Communications Officer — Cassette chest compartment"
  },
  {
    name: "Optimus Primal",
    faction: "Maximal",
    era: "Beast Wars",
    altMode: "Silverback Gorilla",
    image: "https://tfwiki.net/mediawiki/images2/thumb/2/2f/OptimusPrimalBW.jpg/350px-OptimusPrimalBW.jpg",
    wikiLink: "https://tfwiki.net/wiki/Optimus_Primal",
    notes: "Maximal Exploration Ship Axalon Captain"
  }
];

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, '../public', 'hotel.html'));
});

// iss08 & iss10: Get all items (supports optional ?faction= or ?category= query)
app.get('/api/items', async function (req, res) {
  const { category, faction } = req.query;
  const filter = {};
  if (category) filter.category = category;
  if (faction) filter.faction = faction;

  const records = await collection.find(filter).toArray();
  res.json(records);
});

// iss09: Get one item by ID
app.get('/api/items/:id', async function (req, res) {
  const id = new ObjectId(req.params.id);
  const record = await collection.findOne({ _id: id });
  res.json(record);
});

// iss11: Create a new figure
app.post('/api/items', async function(req, res) {
  const newItem = req.body;
  const result = await collection.insertOne(newItem);
  res.status(201).json(result);
});

app.post('/api/students', function (req, res) {
  console.log(req.body);
  res.json({ received: req.body });
});

// iss07: Seed & Clear database
app.post('/api/dev/seed', async function (req, res) {
  const result = await collection.insertMany(seedData);
  res.json(result);
});

app.delete('/api/dev/clear', async function (req, res) {
  const result = await collection.deleteMany({});
  res.json(result);
});

// iss12: Update figure by ID
app.patch('/api/items/:id', async function(req, res) {
  const id = new ObjectId(req.params.id);
  const changes = req.body;
  const result = await collection.updateOne({ _id: id }, { $set: changes });
  res.json(result);
});

// iss20: Delete figure by ID
app.delete('/api/items/:id', async function(req, res) {
  const id = new ObjectId(req.params.id);
  const result = await collection.deleteOne({ _id: id });
  res.json(result);
});

app.listen(5500, () => {
  console.log('Server is running on http://localhost:5500');
});