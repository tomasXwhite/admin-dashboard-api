import express from "express";
import cors from "cors";
import "dotenv/config";
// import { dataRoute } from "./routes/getData/getData";
import { router } from "./routes"

const app = express();


const PORT = process.env.PORT || 3001;

const corsOptions = {
    allowedHeaders: [
        'Origin',
        'X-Requested-With',
        'Content-Type',
        'Accept',
        'X-Access-Token',
        'Authorization'
    ],
    credentials: true,
    origin: `${process.env.FRONT_PORT || 3000}`,
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
}

app.use(cors(corsOptions))
app.use(express.json())

app.use('/', router)


app.listen(PORT, () => console.log(`Listening on port ${PORT}`))