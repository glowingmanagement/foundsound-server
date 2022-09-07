const { ApolloError } = require("apollo-server");
const { Venue, Tag, Event } = require("../models");

const createEvent = async (_, { eventInput }) => {
  try {
<<<<<<< HEAD
    if (!input) {
      throw new ApolloError("All required fields are not provided!");
    }

    if (input) {
      const event = await Event.create({
        ...eventInput,
      });

      return { event };
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to create venue | ${error.message}`);

    throw new ApolloError("Failed to create venue");
=======
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
>>>>>>> b7a56649ac6d0633cece488ddc80d5193c9a1394
  }
};

module.exports = createEvent;
