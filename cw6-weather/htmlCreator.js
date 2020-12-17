class weatherHTML {
  constructor() {}
  createPin(cityName, cityHour, cityTemp, cityWind, cityHum, cityPress) {
    const weatherPin = document.createElement('div');
    weatherPin.classList.add('weatherPin');
    weatherPin.innerHTML = `
    <div class="upperBar">
      <div class="cityName">${cityName}</div>
      <div class="cityHour">${cityHour}</div>
    </div>
    <div class="middleBar">
      <div class="cityTemp"><h1>${cityTemp}'C</h1></div>
      <span>Snowy</span>
    </div>
    <div class="bottomBar">
      <div class="cityDetales">
        <ul>
          <li>${cityWind}</li>
          <li>${cityHum}</li>
          <li>${cityPress}</li>
        </ul>
      </div>
      <div class="cityWeatherImg">
      <img src="" alt="" />
      </div>
    </div>`;
    return weatherPin;
  }
}
