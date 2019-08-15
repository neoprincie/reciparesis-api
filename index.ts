import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
//import auth from "./routes/auth"
//import specks from "./routes/specks"

dotenv.config();

let app = express();
let port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (request, response) => {
  response.status(200).send("Hello, World!");
});

//app.use('/auth', auth);

// mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
//   .then(async () => {
//     app.listen(port, () => {
//         console.log('Reciparesis listening on port ' + port);
//     })
// })

app.listen(port, () => {
  console.log("Reciparesis listening on port " + port);
});
