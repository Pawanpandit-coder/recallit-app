import journel from "../models/journelModel.js";
import Journel from "../models/journelModel.js";

export const getRecentJournel = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const skip = (page -1 ) * limit;

    const journels = await Journel
    .find({ userId: req.user.id })
    .sort({createdAt: -1})
    .skip(skip)
    .limit(limit)
    .lean();
    res.status(200).json(journels);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching Journels" });
  }
};

export const addJournel = async (req, res) => {
  try {
    const userId = req.user.id;
    const { title, content } = req.body;
    const newJournel = await Journel.create({ title, content, userId });
    res.status(201).json(newJournel);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating journel", error: error.message });
  }
};

export const getSearchResult = async (req, res) => {
  try {
    const q = req.query.q;
    const results = await journel.find({
      userId: req.user.id,
      title: { $regex: q, $options: "i" },
    }).lean();
    res.json(results);
  } catch (err) {
    res.status(500).json({ message: "Error searching" });
  }
};
