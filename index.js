const axios = require('axios');

const apiKey = "0417f3674217cafae115eb7dd685ea7c";
const city = "Sousse";

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`;

async function getWeather() {
    try {
        console.log("Envoi de la requête à OpenWeatherMap avec Axios...");
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

async function testOpenLibrary() {
    try {
        console.log("\nTest Open Library API...");

        const response = await axios.get(
            "https://openlibrary.org/search.json?q=harry+potter"
        );

        const data = response.data;

        console.log("Titre :", data.docs[0].title);
        console.log("Auteur :", data.docs[0].author_name[0]);
        console.log("Année :", data.docs[0].first_publish_year);

    } catch (error) {
        console.error("Erreur OpenLibrary :", error.message);
    }
}

async function testNASA() {
    try {
        console.log("\nTest NASA API...");

        const response = await axios.get(
            "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
        );

        const data = response.data;

        console.log("Titre :", data.title);
        console.log("Date :", data.date);
        console.log("Description :", data.explanation.substring(0, 100), "...");

    } catch (error) {
        console.error("Erreur NASA :", error.message);
    }
}

async function testRandomUser() {
    try {
        console.log("\nTest RandomUser API...");

        const response = await axios.get(
            "https://randomuser.me/api/"
        );

        const user = response.data.results[0];

        console.log("Nom :", user.name.first, user.name.last);
        console.log("Email :", user.email);
        console.log("Pays :", user.location.country);

    } catch (error) {
        console.error("Erreur RandomUser :", error.message);
    }
}

async function runTests() {
    await testOpenLibrary();
    await testNASA();
    await testRandomUser();
}



getWeather();

runTests();