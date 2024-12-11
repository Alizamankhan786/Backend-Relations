import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/db/index.js";
import courseRoute from "./src/routes/course.routes.js";
import studentRoute from "./src/routes/student.routes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// API routes
app.use("/api/v1", courseRoute);
app.use("/api/v1", studentRoute);

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`⚙️  Server is running at port: ${port}`);
    });
  })
  .catch((err) => {
    console.error("MONGO DB connection failed !!! ", err);
  });
