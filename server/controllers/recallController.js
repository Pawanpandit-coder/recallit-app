import recall from "../models/recallModel.js";

export const getAllRecall = async (req, res) => {
  try {
    const allRecalls = await recall.find({ userId: req.user.id });
    return res.status(200).json(allRecalls);
  } catch (err) {
    console.error(err);
  }
};

export const addRecall = async (req, res) => {
  try {
    const userId = req.user.id;
    const { title, desc, date, time, file } = req.body;
    const newRecall = await recall.create({
      title,
      desc,
      date,
      time,
      file,
      userId,
    });
    res.status(200).json(newRecall);
  } catch (err) {
    console.error(err);
  }
};

export const getSearchResult = async (req, res) => {
  try {
    const q = req.query.q;
    const searchedRecall = await recall
      .find({
        userId: req.user.id,
        $or: [
          { title: { $regex: q, $options: "i" } },
          // { date: { $regex: q, $options: "i" } },
        ],
      })
      .lean();
    res.status(200).json(searchedRecall);
  } catch (err) {
    console.error(err);
  }
};
