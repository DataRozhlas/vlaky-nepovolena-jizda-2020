/*
 ! alert
 ? question
 TODO task
 * important, prej
*/

// TODO Turn off animation of the chart?

var colors = {
  'default': '#aaa',
  '2020': '#e63946',
  '2018': '#009FB8',
  '2019': '#3E80B6',
}

Highcharts.chart('vis-nehody-rocne', {
  chart: {
      type: 'column',
      height: 300,
      style: {
        fontFamily: 'Asap'
      },
      animation: false
  },
  title: {
      text: 'V první polovině roku je nehod méně než loni', 
      style: {
        fontWeight: 'bold',
        fontFamily: 'Noticia text'
      }
  },
  subtitle: {
      text: 'Nedovolené jízdy za návěstidla s nehodami i bez v letech 2018, 2019 a 2020'
  },
  xAxis: {
    categories: ['a', 'b', 'c'],
    labels: {
      enabled: true
    }
      // categories: ['leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec'],
      // labels: {
      //     formatter: function () {
      //         if (['červen', 'červenec', 'srpen'].includes(this.value)) {
      //             return '<span style="font-weight: bold; color: #000">' + this.value + '</span>';
      //         } else {
      //             return this.value;
      //         }
      //     }
      // },
      // plotBands: [{
      //   color: '#f2f2f2',
      //   from: 4.8,
      //   to: 7.2,
      //   label: {
      //     text: 'Období s největšími<br>srážkami v roce',
      //     style: {
      //       color: '#444'

      //     }
      //   }
      // }
    // ]
  },
  yAxis: {
    title: false,
    // categories: ['a', 'b', 'c'],

      // title: {
      //     text: 'Úhrn srážek'
      // },
      // showFirstLabel: false,
      labels: {
        // formatter: function() {
        //   return this.value + '<br>jízd';
        // }
        formatter: function() {
          if (this.isLast) {
            return this.value + '<br>' +
                        '<span class="light-gray-text">jízd za</span>' + '<br>' +
                        '<span class="light-gray-text">návěstidla</span>'
          } else {
            return this.value
          }
        } 
      }
  }, 
    tooltip: {
      valueSuffix: ' jízd',
      // shared: true
    },
  exporting: {
      enabled: false
  },
  credits: {
      // href : 'http://portal.chmi.cz/historicka-data/pocasi/uzemni-srazky',
      text : 'Zdroj: TODO'
  },
  plotOptions: {
      column: {
          dataLabels: {
              enabled: true
          },
          enableMouseTracking: false,
          pointPadding: 0,
          // groupPadding: 10,
          // pointWidth: 10,
          // color: colors.default,
          // lineWidth: 0.5,  
          // dataLabels: {
          //   enabled: false
          // },
          // marker: false
          // marker: {
          //   symbol: 'circle', 
          //   radius: 2
          // }
      }
  },
  series: [
  /*{ Mockup
    name: 'název řady',
    data: [44, 38, 48, 42, 69, 79, 88, 80, 58, 43, 49, 50],
    color: colors.avg,  // pokud chceš nastavit spešl barvu pro sérii dat
    lineWidth: 2, 
    dashStyle: 'ShortDash',
    zIndex: 8000,
    marker: {
      symbol: 'circle', 
      radius: 2
    }
  },*/
  // To, co je uvedeno jako prvni se kresli jako prvni, tudiz ostatni veci to muzou prekreslit
  // {
  //   name: '2018',
  //   data: [72],
  //   color: colors['2018']
  // },
  // {
  //   name: '2019',
  //   data: [87],
  //   color: colors['2019']
    
  // },
  // {
  //   name: '2020',
  //   data: [76],
  //   color: colors['2020']
  //   // color: colors[function() { console.log(this); return '2020' }()]
  // },
  {
    name: 'Celkový počet mimořádných událostí',
    data: [{ y: 72, color: colors['2018']},
          { y: 87, color: colors['2019']},
          { y: 76, color: colors['2020']}]
  }
]
});