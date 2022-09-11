const { ApolloError } = require("apollo-server");
const { Event } = require("../models");

const createAdvert = async (_, { createAdvertInput }, { user }) => {
  try {
    const loggedUser = await User.findById(user.id);

    if (loggedUser && loggedUser.userType === "eventOrganiser") {
      const findAd = await Event.findByIdAndUpdate(
        createAdvertInput.event,
        {
          $push: { adverts: createAdvertInput },
        },
        { new: true }
      );

      return findAd;
    } else {
      throw new ApolloError("Failed to failed to authenticate user for create advert");
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to create advert | ${error.message}`);
    throw new ApolloError("Failed to create advert");
  }
};

module.exports = createAdvert;
