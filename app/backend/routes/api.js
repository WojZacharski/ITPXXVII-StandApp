const express = require('express');
const router = express.Router();
const uuid = require("uuid");
const dataController = require('../controllers/DataController');
const { connectToMongoDB } = require('../config/mongodb.config');

// TODO: notification for reservedStands, whenever a company picks a stand from the map

// GET TOKEN DATA
router.get('/fetchData/:token', async (req, res) => {
    try {
        const { token } = req.params;
        const data = await dataController.fetchTokensFromMongoDB(token);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching data' });
    }
});

// GET ALL TOKEN DATA
router.get('/fetchTokens', async (req, res) => {
    try {
      const tokens = await dataController.fetchAllTokensFromMongoDB();
      res.json(tokens);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching tokens' });
    }
  });

// GET all reserved stands
router.get('/fetchReservedStands', async (req, res) => {
    try {
      const stands = await dataController.fetchReservedStandsFromMongoDB();
      res.json(stands);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching reserved stands' });
    }
  });

// SAVE TOKEN DATA
router.post('/saveData', async (req, res) => {
    try {
        const { id, token, companyName } = req.body;
        await dataController.saveDataToMongoDB(id, token, companyName);
        res.status(200).json({ message: 'Data saved successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error saving data' });
    }
});

// GENERATE NEW TOKEN
const TYPES = ["4", "6", "8", "S"];
router.post("/generateToken", async (req, res) => {
    const token = uuid.v1();
    console.log(req.body);
    const { name, type } = req.body;

    const typeError = !type || !TYPES.includes(type) ? "Type is wrong or undefined." : undefined;
    const nameError = !name ? "Name is undefined" : undefined;

    if (typeError || nameError) {
        const errorObject = {
            code: 400,
            typeError,
            nameError,
        };
        console.error("Name: ", name, ", type: ", type);
        res.send({ errorObject });
        return;
    }

    const data = {
        companyName: name,
        type: type,
        token,
    };

    try {
        const db = await connectToMongoDB();
        const tokensCollection = db.collection("tokens");
        await tokensCollection.insertOne(data);
        data.code = 200;
        res.send(data);
        console.info("Token created: ", data);
    } catch (error) {
        res.status(500).send({ error: error.message });
        console.error(error);
    }
});

module.exports = router;