const login = require("./login");
const signup = require("./signup");
const addressLookup = require("./addressLookup");
const createAdvert = require("./createAdvert");
const createEvent = require("./createEvent");
const getAllEvents = require("./getAllEvents");
const getAnEvent = require("./getAnEvent");
const getAdById = require("./getAdById");
const createArtistProfile = require("./createArtistProfile");
const getAllEventsForOwner = require("./getAllEventsForOwner");

const resolvers = {
  Query: {
    addressLookup,
    getAllEvents,
    getAnEvent,
    getAdById,
    getAllEventsForOwner,
  },
  Mutation: {
    login,
    signup,
    createEvent,
    createAdvert,
    createArtistProfile,
  },
};

module.exports = resolvers;
