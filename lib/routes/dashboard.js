const router = require("express").Router();
const axios = require("axios");
const comicModel = require("../models/comic");

// @route       GET api/
// @desc        acquires current comic
router.get("/", async (req, res) => {
  const ip = req.headers["x-forwarded-for"] || req.ip;
  try {
    axios.get("http://xkcd.com/info.0.json").then(async (response) => {
      let comic = await comicModel.findOneAndUpdate(
        { num: response.data.num },
        { $addToSet: { viewers: ip }, date: new Date() }
      );

      if (!comic) {
        comic = new comicModel({
          num: response.data.num,
          viewers: [ip],
          date: new Date(),
        });
        await comic.save();
      }

      response.data["viewCount"] = comic.viewers.length;
      res.json(response.data);
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
});

module.exports = router;
