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
const advertResponses = require("./advertResponses");
const getArtist = require("./getArtistById");
const getAllAds = require("./getAllAds");
const getAllArtists = require("./getAllArtists");
const getAllAdsForEventOwner = require("./getAllAdsForEventOwner");

const resolvers = {
  Query: {
    addressLookup,
    getAllEvents,
    getAllAds,
    getAnEvent,
    getAdById,
    getAllEventsForOwner,
    getAllAdsForEventOwner,
    getArtist,
    getAllArtists,
  },
  Mutation: {
    login,
    signup,
    createEvent,
    createAdvert,
    createArtistProfile,
    advertResponses,
  },
};

module.exports = resolvers;
