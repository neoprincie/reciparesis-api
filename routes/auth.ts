import express from "express"
import { OAuth2Client } from "google-auth-library";
import { sign } from "../services/JwtService";

let router = express.Router();

router.post('/google/verify', async (request, response) => {
    const client = new OAuth2Client("");
    const ticket = await client.verifyIdToken({
        idToken: request.body.token,
        audience: ""
    });
    const googlePayLoad = ticket.getPayload();

    let payload = {
        name: googlePayLoad.name,
        subject: googlePayLoad.email
    }

    let accessToken = sign(payload);

    //console.log("Is it legit?: " + jwtService.verify(accessToken))

    response.status(200).send({ "accessToken": accessToken})
})

export default router;