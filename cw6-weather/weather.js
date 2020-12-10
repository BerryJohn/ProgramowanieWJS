class WeatherCity {
  constructor(city = 'Krakow') {
    this.apiKey = 'eb713f0ad1136c3db5b6a516a71eee0c'; // apikey
    this.city = city;
    this.cityData;
  }
  getJSON() {
    let cityInfo = `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.apiKey}`;
    fetch(cityInfo)
      .then((response) => response.json())
      .then((data) => (this.cityData = data))
      .catch((err) => console.log(`Wrong city! Error -> ${err}`));
  }
}
