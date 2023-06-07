const router = require("express").Router();

const mint = require("./mint.js");

router.use("/mint", mint);

module.exports = router;
