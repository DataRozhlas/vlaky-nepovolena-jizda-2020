/*
 ! alert
 ? question
 TODO task
 * important, prej
*/

/*
  TODO Set column color in series based on the name of the series when var colors' keys are named after the series
  I.e. sth like colors[this.name]
  
  TODO Set tooltip to display all three values 
*/

var colors = {
  'default': '#aaa',
  '2020': '#e63946',
  '2018': '#009FB8',
  '2019': '#3E80B6',
}

Highcharts.chart('vis-container-navestidla', {
  chart: {
      type: 'column',
      style: {
        fontFamily: 'Asap'
      }
  },
  title: {
      text: 'Nehody při nedovolené jízdě za návěstidla zatím neobvykle nepřibývá', 
      style: {
        fontWeight: 'bold',
        fontFamily: 'Noticia text'
      }
  },
  subtitle: {
      text: 'Nedovolené jízdy za návěstidla s nehodami i bez v letech 2018, 2019 a 2020'
  },
  xAxis: {
      categories: ['leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec'],
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
          enableMouseTracking: true,
          color: colors.default,
          lineWidth: 0.5,  
          dataLabels: {
            enabled: false
          },
          pointPadding: 0.1,
          groupPadding: 0.15,
          borderWidth: 0,
          marker: false
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
  {
    name: '2018',
    data :[12,15,6,8,19,12,13,12,23,11,15,2],
    color: colors['2018']
  },
  {
    name: '2019',
    data :[14,21,20,11,7,14,10,11,6,7,17,11],
    color: colors['2019']
    
  },
  {
    name: '2020',
    data: [15,15,11,10,7,18,0,0,0,0,0,0],
    color: colors['2020']
    // color: colors[function() { console.log(this); return '2020' }()]
  },
]
});