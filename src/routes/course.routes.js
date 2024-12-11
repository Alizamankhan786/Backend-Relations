import express from "express";
const router = express.Router();

router.get("/courses", (req, res) => {
  res.send({
    message: "All Course Get Successfully"
  });
});

router.post("/courses", (req, res) => {
  res.send({
    message: "Course Added Successfully"
  });
});

export default router;
