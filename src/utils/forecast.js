const request = require('request')

const forecast = (lat, lon, callback) => {
    const url = `https://api.darksky.net/forecast/3adee86b3f626772e438010c2c6e7bca/${lat},${lon}?units=si`
   
     request({ url, json: true }, (error, { body }) => {
         if (error) {
             callback(`Unable to connect to weather service!`, undefined)
         } else if (body.error) {
             callback(`Unable to find location`)
         } else {
             callback(undefined, `${body.daily.data[0].summary} It's currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability}% chance of rain.`)
         }
     })

}

module.exports = forecast