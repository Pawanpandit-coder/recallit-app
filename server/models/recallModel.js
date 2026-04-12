import mongoose from "mongoose";

const recallSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    file: { type: String },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const recall = mongoose.model("recall", recallSchema);
export default recall;
