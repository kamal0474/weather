const apiKey ="6d82143db1f6e9b1775f2ab3f154a688";
    const apiUrl ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=delhi";
    async function checkWeather() {
      const response = await fetch(apiUrl + `&aappid=${apiKey}`);
      var data = await response.json();
      console.log(data);
    }
    checkWeather();