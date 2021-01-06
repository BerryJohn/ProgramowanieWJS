class WeatherGlobal {
  constructor() {
    this.htmlCreator = new weatherHTML();
    this.db = new Localdb();
    this.charts = new ChartGen();
    /////////////////////////////////////////////////////
    this.allCities = [];
    this.allCitiesLocalStorage = this.db.getCities();
    /////////////////////////////////////////////////////
    this.searchInput = document.querySelector('#cityName');
    this.searchBtn = document.querySelector('#citySubmit');
    this.pinsDoc = document.querySelector('.allPins');
    this.interval;
  }
  /////////////////
  searchCity() {
    const city = this.searchInput.value;
    this.searchInput.value = '';
    this.addCity(city);
  }

  addCity(city) {
    if (this.allCitiesLocalStorage.includes(city)) return;
    const newCity = new WeatherCity(city);
    const cityData = newCity.getJSON();
    cityData.then((data) => {
      //data.name -> another check if city already exist in our local storage
      if (this.allCitiesLocalStorage.includes(data.name)) return;
      this.allCities.push(city);
      this.addToLocalStorage(data.name);
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
    //charts
    this.charts.genCityButtons(this.allCitiesLocalStorage);
  }
  citiesFromLocalStorage() {
    for (const city of this.allCitiesLocalStorage) {
      this.addCityLS(city);
    }
  }
  /// end of local storage
  createHTMLElement(cityName, cityHour, cityTemp, cityWind, cityHum, cityPress, cityWeatherDesc, icon) {
    const pin = this.htmlCreator.createPin(cityName, cityHour, cityTemp, cityWind, cityHum, cityPress, cityWeatherDesc, icon);
    this.pinsDoc.appendChild(pin);
    const pinBtn = pin.querySelector('.closeBtn');

    pinBtn.addEventListener('click', (e) => this.removePin(e.target.parentElement));
  }
  removePin(pin) {
    const pinCity = pin.querySelector('.cityName');
    const cityToRemove = pinCity.outerText;
    //find
    const newAllCities = this.allCitiesLocalStorage.filter((el) => el != cityToRemove);
    this.allCitiesLocalStorage = newAllCities;
    this.db.addToLS(this.allCitiesLocalStorage);
    pin.remove();
    //charts
    this.charts.genCityButtons(this.allCitiesLocalStorage);
  }
  addPin(data) {
    const cityName = data.name;
    const cityHour = data.timezone;
    const cityTemp = data.main.temp;
    const cityTempFeel = data.main.feels_like;
    const cityWind = data.wind.speed;
    const cityHum = data.main.humidity;
    const cityPress = data.main.pressure;
    const cityWeatherDesc = data.weather[0].main;
    const icon = data.weather[0].icon;
    this.createHTMLElement(cityName, cityHour, cityTemp, cityWind, cityHum, cityPress, cityWeatherDesc, icon);
  }
  updatePins() {
    this.pinsDoc.innerHTML = '';
    this.citiesFromLocalStorage();
  }
  updatePinsInit(time = 60000) {
    this.interval = setInterval(() => this.updatePins(), time);
  }
  ///
  init() {
    this.citiesFromLocalStorage();
    this.searchBtn.addEventListener('click', () => {
      this.searchCity();
    });
    this.updatePinsInit();
    this.charts.genCityButtons(this.allCitiesLocalStorage);
  }
}

const weatherApp = new WeatherGlobal();
weatherApp.init();
