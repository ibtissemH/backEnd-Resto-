
import express, { json } from "express";
import bodyParser from "body-parser";
import dotenv from 'dotenv';
import connectDB from "./config/db.js";
import foodsRoutes from "./routes/foodsRoutes.js";
import userRoute from "./routes/userRoute.js";
import reservation from "./routes/reservation.js";
import cors from "cors"


const app = express();
dotenv.config();

const port =3007;


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));


connectDB();

app.use(express.static("public"));
app.set("view engine");

app.use(cors());
app.use('/api',foodsRoutes)
app.use('/api',userRoute)
app.use('/api',reservation)

app.listen(port, () => {
    console.log(`listning port http://localhost:${port}`);
});