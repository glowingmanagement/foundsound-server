const { ApolloError } = require("apollo-server");
const { Venue, Tag, Event } = require("../models");

const createEvent = async (_, { eventInput }) => {
  try {
    console.log(eventInput);
    if (!eventInput) {
      throw new ApolloError("All required fields are not provided!");
    }

    if (eventInput) {
      const event = await Event.create(eventInput);

      return event;
    }
  } catch (error) {
    console.log(3);
    throw new ApolloError("Failed to create event");
  }
};

module.exports = createEvent;
