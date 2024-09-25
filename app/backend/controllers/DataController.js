const { connectToMongoDB } = require('../config/mongodb.config');

// GET TOKEN FROM 'tokens' COLLECTION
const fetchTokensFromMongoDB = async (token) => {
    try {
        const db = await connectToMongoDB();
        console.log('MongoDB tokens fetching');
        const tokensCollection = db.collection('tokens');
        const tokenDoc = await tokensCollection.findOne({ token });
        return tokenDoc;
    } catch (error) {
        console.error('Error fetching tokens from MongoDB:', error);
        throw error;
    }
};

// GET ALL TOKENS FROM 'tokens' COLLECTION
const fetchAllTokensFromMongoDB = async () => {
    try {
      const db = await connectToMongoDB();
      console.log('MongoDB tokens fetching');
      const tokensCollection = db.collection('tokens');
      const tokens = await tokensCollection.find({}).toArray();
      return tokens;
    } catch (error) {
      console.error('Error fetching tokens from MongoDB:', error);
      throw error;
    }
  };

// GET ALL RESERVED STANDS FROM 'reservedStands' COLLECTION
const fetchReservedStandsFromMongoDB = async () => {
    try {
        const db = await connectToMongoDB();
        console.log('MongoDB reservedStands fetching');
        const reservedStandsCollection = db.collection('reservedStands');
        const stands = await reservedStandsCollection.find({}).toArray();
        return stands;
    } catch (error) {
        console.error('Error fetching reserved stands from MongoDB:', error);
        throw error;
    }
};

const saveDataToMongoDB = async (id, token, companyName) => {
    try {
        // Insert into reservedStands
        await insertDataIntoReservedStands(id, token, companyName);
        // Update tokens
        await updateTokenSelection(token, id);
    } catch (error) {
        console.error('Error saving data to MongoDB:', error);
        throw error;
    }
};

const insertDataIntoReservedStands = async (id, token, companyName) => {
    try {
        const db = await connectToMongoDB();
        console.log('MongoDB reservedStands updating');
        const reservedStandsCollection = db.collection('reservedStands');
        await reservedStandsCollection.insertOne({
            id,
            token,
            companyName,
        });
    } catch (error) {
        console.error('Error inserting data into reservedStands:', error);
        throw error;
    }
};

const updateTokenSelection = async (token, id) => {
    try {
        const db = await connectToMongoDB();
        console.log('MongoDB tokens updating');
        const tokensCollection = db.collection('tokens');
        await tokensCollection.updateOne(
            { token },
            { $set: { selectedStand: id } }
        );
    } catch (error) {
        console.error('Error updating token selection:', error);
        throw error;
    }
};

module.exports = {
    fetchTokensFromMongoDB,
    fetchReservedStandsFromMongoDB,
    saveDataToMongoDB,
    fetchAllTokensFromMongoDB,
};