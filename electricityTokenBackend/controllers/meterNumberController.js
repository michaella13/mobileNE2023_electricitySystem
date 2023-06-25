const MeterNumber = require('../models/meterNumberModel');

// Add a new meter number
const addMeterNumber = async (req, res) => {
  try {
    const { meterNumber } = req.body;

    // Create a new MeterNumber instance
    const newMeterNumber = new MeterNumber({
      meterNumber: meterNumber,
    });

    // Save the new meter number in the database
    await newMeterNumber.save();

    // Return the newly created meter number in the response
    res.json(newMeterNumber);
  } catch (error) {
    console.error('Error adding meter number:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all meter numbers
const getAllMeterNumbers = async (req, res) => {
  try {
    // Find all meter numbers
    const meterNumbers = await MeterNumber.find();
    console.log(meterNumbers)

    // Return the meter numbers in the response
    res.json(meterNumbers);
  } catch (error) {
    console.error('Error retrieving meter numbers:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { addMeterNumber, getAllMeterNumbers };
