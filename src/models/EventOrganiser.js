const { Schema, model } = require("mongoose");

const EventOrganiserSchema = {
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  venue: [
    {
      type: Schema.Types.ObjectId,
      ref: "Venue",
    },
  ],
  verificationCode: {
    type: String,
    required: true,
    trim: true,
  },
};

const schema = new Schema(EventOrganiserSchema, {
  toJSON: {
    virtuals: true,
  },
  id: false,
  timestamps: true,
});

const EventOrganiser = model("EventOrganiser", schema);

module.exports = EventOrganiser;