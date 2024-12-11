import express from "express";
const router = express.Router();

router.get("/students", (req, res) => {
  res.send({
    message: "All Students Get SuccessFully"
  });
});

router.post("/students", (req, res) => {
  res.send({
    message: "New Student Added"
  });
});

export default router;
