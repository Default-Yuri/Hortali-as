/* globals Chart:false */

(() => {
  'use strict'

  // Graphs
  const ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        '00:00',
        '01:00',
        '02:00',
        '03:00',
        '04:00',
        '05:00',
        '06:00',
        '07:00',
        '08:00',
        '09:00',
        '10:00',
        '11:00',
        '12:00',
        '13:00',
        '14:00',
        '15:00',
        '16:00',
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
        '23:00',
      ],
      datasets: [{
        label: 'Temperatuta do Ar',
        data: [
          100,
          200,
          300,
          300,
          300,
          200,
          300,
          150,
          200,
          300,
          300,
          300,
          200,
          160,
          200,
          300,
          300,
          300,
          200,
          180,
          200,
          300,
          300,
          300,
          200,
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBackgroundColor: '#007bff'
      },
      {
        label: 'Humidade',
        data: [
          150,
          250,
          280,
          330,
          270,
          190,
          280,
          150,
          250,
          280,
          330,
          270,
          190,
          150,
          250,
          280,
          330,
          270,
          190,
          150,
          250,
          280,
          330,
          270,
          190,
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#ff0000',
        borderWidth: 4,
        pointBackgroundColor: '#ff0000'
      }]
    },
    options: {
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          boxPadding: 3
        }
      }
    }
  })
})()
