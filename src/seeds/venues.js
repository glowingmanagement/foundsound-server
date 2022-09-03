const { Venue } = require("../models");

const venues = [
  {
    address: {
      addressLine1: "Some address in UK",
      addressLine2: "Second address in Uk",
      city: "Birmingham",
      postcode: "B140EL",
    },
    capacity: "1",
    facilities: "isAcessibile",
  },
  {
    address: {
      addressLine1: "Some address in UK",
      addressLine2: "Second address in Uk",
      city: "Birmingham",
      postcode: "B140EL",
    },
    capacity: "1",
    facilities: "hasFood",
  },
  {
    address: {
      addressLine1: "Some address in UK2",
      addressLine2: "Second address in UK2",
      city: "London",
      postcode: "M140EL",
    },
    capacity: "1",
    facilities: "hasCurfew",
  },
  {
    address: {
      addressLine1: "Some address in UK3",
      addressLine2: "Second address in Uk3",
      city: "Manchester",
      postcode: "L140EL",
    },
    capacity: "1",
    facilities: "isAcessibile",
  },
];

const seedVenues = async () => {
  await Venue.insertMany(venues);

  console.log("[INFO]: Successfully seeded venues");
};

module.exports = { seedVenues };