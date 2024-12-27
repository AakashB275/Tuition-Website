const Contact = require("../model/contactModel");

const createContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate the required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Create a new contact instance
    const newContact = new Contact({
      name,
      email,
      subject,
      message,
    });

    // Save the contact to the database
    const savedContact = await newContact.save();

    // Send a success response
    res.status(201).json({
      message: "Contact created successfully",
      contact: savedContact,
    });
  } catch (error) {
    console.error("Error creating contact:", error.message);

    // Send an error response
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { createContact };
