const apiKey = "0417f3674217cafae115eb7dd685ea7c";
const city = "Sousse";

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`;

async function getWeather() {
    try {
        console.log("🔄 Envoi de la requête à OpenWeatherMap...");
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Erreur HTTP : ${response.status}`);
        }
        const data = await response.json();

        console.log("Ville :", data.name);
        console.log("Température :", data.main.temp, "°C");
        console.log("Humidité :", data.main.humidity, "%");
        console.log("Description :", data.weather[0].description);
        console.log("Vitesse du vent :", data.wind.speed, "m/s");

    } catch (error) {
        console.error("Une erreur s'est produite :", error.message);
    }
}

getWeather();