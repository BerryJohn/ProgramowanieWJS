class ChartGen {
  constructor() {
    this.ctx = document.getElementById('myChart').getContext('2d');
  }
  generateChart(data) {
    const myLineChart = new Chart(this.ctx, {
      type: 'line',
      data: {
        labels: data.dates,
        datasets: [
          {
            data: data.data,
            label: 'Miasto',
            borderColor: '#3e95cd',
            fill: false,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: 'Forecast for next 5 days',
        },
        elements: {
          line: {
            tension: 0.2,
          },
        },
        maintainAspectRatio: false,
      },
    });
  }
}

const dane = {
  dates: ['22.12.2020', '23.12.2020', '24.12.2020', '25.12.2020', '26.12.2020'],
  data: [-30.25, 25, 1, 6, 3, 7],
};

const dane2 = {
  dates: ['22.12.2020', '23.12.2020', '24.12.2020', '25.12.2020', '26.12.2020'],
  data: [0.25, 125, 1, 63, -13, 7],
};

const czart = new ChartGen();
czart.generateChart(dane);
