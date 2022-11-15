const express = require("express");
const redirectController = require("../controller/redirectController");
const urlController = require("../controller/urlController");

const router = express.Router();

router.get("/:code", redirectController);
router.post("/shorten", urlController);

module.exports = router;
