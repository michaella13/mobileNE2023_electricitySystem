const crypto = require('crypto');
const PurchasedToken=require('../models/tokenModel')


// Generate token and save the purchase details
const generateToken = async (req, res) => {
  try {
    const { meterNumber, amount } = req.body;
    console.log('in buy '+meterNumber)

    // Calculate the token value days based on the amount
    const tokenValueDays = Math.ceil(amount / 100);

    // Generate a unique 8-character token
    const token = await generateUniqueToken();

    // Create a new PurchasedToken instance
    const purchasedToken = new PurchasedToken({
        meter_number: meterNumber,
      token: token,
      token_value_days: tokenValueDays,
      amount: amount,
    });

    // Save the purchased token in the database
    await purchasedToken.save();


    // Return the generated token and other details in the response
    res.json({
      token: purchasedToken.token,
    });
  } catch (error) {
    console.error('Error generating token:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Helper function to generate a unique 8-character token
const generateUniqueToken = async () => {
  let token;
  while (!token) {
    const randomToken = crypto.randomBytes(4).toString('hex').toUpperCase();
    const existingToken = await PurchasedToken.findOne({ token: randomToken });
    if (!existingToken) {
      token = randomToken;
    }
  }
  return token;
};

const getPurchasedTokensByMeterNumber = async (req, res) => {
    try {
      const { meterNumber } = req.body;
      console.log('meterNumber '+meterNumber)
  
      // Find all tokens with the given meter number
      const tokens = await PurchasedToken.find({ meter_number: meterNumber });
      console.log(tokens);

  
      // Return the tokens in the response
      res.json(tokens);
    } catch (error) {
      console.error('Error retrieving tokens by meter number:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = { generateToken ,getPurchasedTokensByMeterNumber};
