const axios = require('axios');

const apiKey = "0417f3674217cafae115eb7dd685ea7c";
const city = "Sousse";

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`;

async function getWeather() {
    try {
        console.log("🔄 Envoi de la requête à OpenWeatherMap avec Axios...");
        const response = await axios.get(url);

        // Avec axios, les données sont directement dans response.data
        const data = response.data;

        console.log("Ville :", data.name);
        console.log("Description :", data.weather[0].description);
        console.log("Température :", data.main.temp, "°C");
        console.log("Humidité :", data.main.humidity, "%");

    } catch (error) {
        if (error.response) {
            console.error("Erreur HTTP :", error.response.status);
        } else {
            console.error("Erreur :", error.message);
        }
    }
}

getWeather();