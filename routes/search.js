const express = require("express");
const lngDetector = new (require("languagedetect"))();
const router = express.Router();
lngDetector.setLanguageType("iso2");

router.post("/send", async (req, res) => {
	try {
		const result = lngDetector.detect(req.body.wordToAdd);
		res.send(result);
	} catch (err) {
		console.log(err);
		res(err);
	}
});

module.exports = router;
