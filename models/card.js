import mongoose, { Schema } from "mongoose";

const cardSchema = new Schema(
  {
    name: String,
    inIasi: Boolean,
    technologies: [String],
    packets: [
      {
        date: Number,
        amount: Number,
      },
    ],
    helpingMethod: [String],
    contactPeriod: String,
  },
  {
    timestamps: true,
  }
);

const Card = mongoose.models.Card || mongoose.model("Card", cardSchema);

export default Card;
