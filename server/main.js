import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import journel from "./routes/journelRoute.js";
import dotenv from "dotenv";
import auth from "./routes/authRoute.js";
import recall from "./routes/recallRoute.js";
dotenv.config();

import dns from 'dns'
dns.setServers(['8.8.8.8', '1.1.1.1']);

const app = express();

app.use(
  cors({
    origin: `${process.env.VITE_FRONTEND_URL}`,
    credentials: true,
  }),
);

// app.options("*", cors()); // 👈 yeh line add karo

app.use(express.json());
app.use("/api/journel", journel);
app.use("/api/auth", auth);
app.use("/api/recall", recall);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connection successfully"))
  .catch((err) => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
