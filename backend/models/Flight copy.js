const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema({
  flight_number: {
    type: String,
    required: true,
    unique: true,
  },
  airline: {
    type: String,
    required: true,
  },
  airline_code: {
    type: String,
    required: true,
  },
  origin: {
    city: {
      type: String,
      required: true,
    },
    airport: {
      type: String,
      required: true,
    },
    airport_full_name: {
      type: String,
      required: true,
    },
  },
  destination: {
    city: {
      type: String,
      required: true,
    },
    airport: {
      type: String,
      required: true,
    },
    airport_full_name: {
      type: String,
      required: true,
    },
  },
  departure_time: {
    type: Date,
    required: true,
  },
  return_time: {
    type: Date,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  cabin_class: {
    type: String,
    required: true,
  },
  price: {
    type: String, // Using String to match the format in the sample data; could be Number if you prefer.
    required: true,
  },
  available_seat_number: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Flight", flightSchema);
