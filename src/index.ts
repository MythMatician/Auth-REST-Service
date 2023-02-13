import * as express from "express";
import * as morgan from "morgan";
import * as mongoose from "mongoose";
import * as cors from "cors";
import { config } from "dotenv";
import { routerV1 } from "./api/v1/routes/index.js";
import { handleError } from "./middleware/errorHandling.js";

config();

const app: any = express();
const Port: string = process.env.PORT;
let dbUrl: string;

// Dev Cluster
if (process.env.NODE_ENV === "development") {
  dbUrl = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_URL}/AuthService-DEV?retryWrites=true&w=majority`;
} else {
  dbUrl = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_URL}/AuthService-PROD?retryWrites=true&w=majority`;
}

// DB Connection
const main: any = async () => {
  mongoose.set("strictQuery", false);
  mongoose.connect(dbUrl, () => {
    console.log("Connected to DB", process.env.NODE_ENV);
  });
};

main().catch((err: any) => console.log(err));

// Middleware App-level
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Logging Middleware
app.use(morgan("tiny"));

// Test Endpoint
app.get("/", (req, res) => {
  res.send("⚡️WORKING⚡️");
});

// Route Middleware
app.use("/api/v1", routerV1);

// Error Middleware
app.use(handleError);

app.listen(Port, () => {
  console.log("Express is serving Auth Service on Port:", process.env.PORT);
});
