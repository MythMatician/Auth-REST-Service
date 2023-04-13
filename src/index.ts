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

if (process.env.NODE_ENV === "development") {
  dbUrl = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_URL}/AuthService-DEV?retryWrites=true&w=majority`;
} else {
  dbUrl = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_URL}/AuthService-PROD?retryWrites=true&w=majority`;
}

const main: any = async () => {
  mongoose.set("strictQuery", false);
  mongoose.connect(dbUrl, () => {
    console.log("Connected to DB", process.env.NODE_ENV);
  });
};

main().catch((err: any) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("⚡️WORKING⚡️");
});

app.use("/api/v1", routerV1);

app.use(handleError);

app.listen(Port, () => {
  console.log("Express is serving Auth Service on Port:", process.env.PORT);
});
