import fs from "fs";
import jwt from "jsonwebtoken";

this.privateKey = fs.readFileSync("./private.key", "utf8");
this.publicKey = fs.readFileSync("./public.key", "utf8");

export const sign = (payload): string => {
  let signOptions: jwt.SignOptions = {
    issuer: "Reciparesis",
    expiresIn: "30d",
    algorithm: "RS256"
  };

  return jwt.sign(payload, this.privateKey, signOptions);
};

export const verify = (token): string | object => {
  let verifyOptions = {
    issuer: "Reciparesis",
    expiresIn: "30d",
    algorithm: ["RS256"]
  };

  try {
    return jwt.verify(token, this.publicKey, verifyOptions as any);
  } catch (err) {
    return "verify failed";
  }
};

export const decode = token => {
  return jwt.decode(token, { complete: true });
};
