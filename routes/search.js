const express = require("express");
const lngDetector = new (require("languagedetect"))();
const router = express.Router();

router.post("/send", async (req, res) => {
	try {
		const result = lngDetector.detect(req.body.wordToAdd);
		res.send(result);
	} catch (err) {
		console.log(err);
		res(err);
	}
});

router.get("/getCity", async (req, res) => {
    console.log('~ req', req.body);
	try {
			let res = "";
			const base = `http://dataservice.accuweather.com/locations/v1/cities/search`;
			const query = `?apikey=UIR2sXAbp5TQZRAuMOwP2o89JPkd9aHr&q=${city}`;
			await axios.get(base + query).then((response) => {
				if (response.data.length !== 0) {
					return (res = response.data[0].Key);
				} else {
					return (res = "error");
				}
			});
			res.send(res);
	} catch (err) {
		console.log(err);
		res(err);
	}
});


// export const getCity = async (city) => {

// 	let res = "";
// 	const base = `http://dataservice.accuweather.com/locations/v1/cities/search`;
// 	const query = `?apikey=UIR2sXAbp5TQZRAuMOwP2o89JPkd9aHr&q=${city}`;
// 	await axios.get(base + query).then((response) => {
// 		if (response.data.length !== 0) {
// 			return (res = response.data[0].Key);
// 		} else {
// 			return (res = "error");
// 		}
// 	});
// 	return res;
// };

// export const getForcast = async (id) => {
// 	let res = "";
// 	const base = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/`;
// 	const query = `${id}?apikey=UIR2sXAbp5TQZRAuMOwP2o89JPkd9aHr`;
// 	await axios.get(base + query).then((response) => {
// 		res = response;
// 		if (response.data.DailyForecasts.length !== 0) {
// 			return (res = response.data.DailyForecasts);
// 		} else {
// 			return (res = "error");
// 		}
// 	});
// 	return res;
// };


module.exports = router;
