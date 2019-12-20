import Util from '../utils/Utils'
const fetch = require('node-fetch');
const util = new Util();
class WeatherController {
    static async getWeatherByCityName(req, res) {
        console.log('weather by name');
        if (!req.query.cityName) {
            util.setError(400, 'Please provide a name of the city');
            return util.send(res);
        }
        const cityName = req.query.cityName;
            let response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName +
                '&appid=b88ae6b1211078df478d7544a65d22f9').then(res => res.json())
                .then(json => {
                    if(json.cod === "404") {
                        util.setError(404, json.message);
                    }
                    else {
                        util.setSuccess(200, 'Success', json);
                    }
                })
                .catch(json => {
                    util.setError(400, json);
                });
        return util.send(res);
    }
    static async getWeatherByCoordinates(req, res) {
        console.log('weather by coords');
        if (!(req.query.lon && req.query.lat)) {
            util.setError(400, 'Please provide both latitude and longitude');
            return util.send(res);
        }
        const lat = req.query.lat;
        const lon = req.query.lon;
        let response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon +
            '&appid=b88ae6b1211078df478d7544a65d22f9')
            .then(res => res.json())
            .then(json => {
                if (json.cod === '404') {
                    util.setError(404, json.message);
                } else {
                    util.setSuccess(200, 'success', json);
                }
            })
            .catch(json => {
                util.setError(400, json);
            });
        return util.send(res);
    }
}

export default WeatherController;