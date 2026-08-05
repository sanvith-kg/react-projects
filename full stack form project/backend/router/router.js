const express = require("express");
const user_model = require("../schema/schema");

const router = express.Router();

router.route("/user").post(async (req, res) => {
  console.log(req.body);
  await user_model.create(req.body);
  res.status(200).json({
    report: "done",
  });
});

router.route("/user").get(async (req, res) => {
  const data = await user_model.find();
  res.status(200).json({
    data: data,
    report: "collected",
  });
});

router.route("/user/:id").delete(async (req, res) => {
  const id = req.params.id;
  const deletedId = await user_model.findByIdAndDelete(id);
  res.status(200).json({
    report: "deleted",
    data: deletedId,
  });
});

router.route("/user/:id").put(async (req, res) => {
  const updateduser = await user_model.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
  );
  res.status(200).json({
    data: updateduser,
    report: "updated",
  });
});
module.exports = router;
