class WeatherGlobal {
  constructor() {
    this.allCitiesInfo = [];
  }
  addCity(city) {
    const newCityW = new WeatherCity(city);
    newCityW.getJSON();
    this.allCitiesInfo.push(newCityW);
  }
}

const xd = new WeatherGlobal();

xd.addCity('Warszawa');
