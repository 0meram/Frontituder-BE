const express = require("express");
const axios = require("axios");
const router = express.Router();

router.post("/getCity", async (req, res) => {
	try {
			let result = "";
			const base = `http://dataservice.accuweather.com/locations/v1/cities/search`;
			const query = `?apikey=UIR2sXAbp5TQZRAuMOwP2o89JPkd9aHr&q=${req.body.inputChange}`;
			await axios.get(base + query).then((response) => {
				if (response.data.length !== 0) {
					return (result = response.data[0].Key);
				} else {
					return (result = "error");
				}
			});
			return res.send(result);
	} catch (err) {
		console.log(err);
		res.send(err);
	}
});

router.post("/getForecast", async (req, res) => {
	try {
			let result = "";
			const base = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/`;
			const query = `${req.body.cityId}?apikey=UIR2sXAbp5TQZRAuMOwP2o89JPkd9aHr`;
			await axios.get(base + query).then((response) => {
				if (response.data.DailyForecasts.length !== 0) {
					return (result = response.data.DailyForecasts);
				} else {
					return (result = "error");
				}
		});
		return res.send(result);
	} catch (err) {
		console.log(err);
		res.send(err);
	}
});

module.exports = router;
