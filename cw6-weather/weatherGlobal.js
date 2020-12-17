class WeatherGlobal {
  constructor() {
    this.htmlCreator = new weatherHTML();
    this.db = new Localdb();
    /////////////////////////////////////////////////////
    this.allCities = [];
    this.allCitiesLocalStorage = this.db.getCities();
    /////////////////////////////////////////////////////
    this.searchInput = document.querySelector('#cityName');
    this.searchBtn = document.querySelector('#citySubmit');
    this.pinsDoc = document.querySelector('.allPins');
  }
  /////////////////
  searchCity() {
    const city = this.searchInput.value;
    this.addCity(city);
  }
  addCity(city) {
    const newCity = new WeatherCity(city);
    const cityData = newCity.getJSON();
    cityData.then((data) => {
      this.allCities.push(city);
      this.addToLocalStorage(city);
      this.addPin(data);
    });
  }
  //from local storage
  addCityLS(city) {
    const newCity = new WeatherCity(city);
    const cityData = newCity.getJSON();
    cityData.then((data) => {
      this.addPin(data);
    });
  }
  addToLocalStorage(city) {
    this.allCitiesLocalStorage.push(city);
    this.db.addToLS(this.allCitiesLocalStorage);
  }
  citiesFromLocalStorage() {
    for (const city of this.allCitiesLocalStorage) {
      this.addCityLS(city);
    }
  }
  /// end of local storage
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
    this.citiesFromLocalStorage();
    this.searchBtn.addEventListener('click', () => {
      this.searchCity();
    });
  }
}

const weatherApp = new WeatherGlobal();
weatherApp.init();
