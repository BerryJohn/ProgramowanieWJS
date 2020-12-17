class WeatherGlobal {
  constructor() {
    this.allCities = [];
    this.allCitiesLocalStorage = [];
    this.searchInput = document.querySelector('#cityName');
    this.searchBtn = document.querySelector('#citySubmit');
    this.pinsDoc = document.querySelector('.allPins');
    this.htmlCreator = new weatherHTML();
  }
  addCity(city) {
    const newCity = new WeatherCity(city);
    const polek = newCity.getJSON();
    polek.then((data) => {
      this.allCities.push(city);
      this.addPin(data);
    });
  }
  searchCity() {
    const city = this.searchInput.value;
    this.addCity(city);
  }
  createHTMLElement(cityName, cityHour, cityTemp, cityWind, cityHum, cityPress) {
    const pin = this.htmlCreator.createPin(cityName, cityHour, cityTemp, cityWind, cityHum, cityPress);
    this.pinsDoc.appendChild(pin);
  }
  addPin(data) {
    const cityName = data.name;
    const cityHour = data.timezone;
    const cityTemp = data.main.temp;
    const cityTempFeel = data.main.feels_like;
    const cityWind = data.wind.speed;
    const cityHum = data.main.humidity;
    const cityPress = data.main.pressure;

    this.createHTMLElement(cityName, cityHour, cityTemp, cityWind, cityHum, cityPress);
  }
  init() {
    this.searchBtn.addEventListener('click', () => {
      this.searchCity();
      //this.addPins();
    });
  }
}

const weatherApp = new WeatherGlobal();
weatherApp.init();
