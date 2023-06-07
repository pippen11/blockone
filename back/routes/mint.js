const router = require("express").Router();
const dotenv = require("dotenv");

dotenv.config();
const { Configuration, OpenAIApi } = require("openai");
//es6문법이 openai안됨

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

router.post("/minting", async (req, res) => {
  console.log(req.body.prompt);
  //   const response = await openai.createImage({
  //     prompt: req.body.prompt,
  //     n: 1,
  //     size: "512x512",
  //     //512,1024
  //   });
  //   console.log(response.data.data);
  //   res.send(response.data.data);
  res.send(req.body.prompt);
  //   res.end();
});

module.exports = router;
