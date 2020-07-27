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
  '2020-light': '#F6B6BB',
  '2018-light': '#C1E5EB',
  '2019-light': '#C1D8EC',
  // '2020-light': '#F07F89',
  // '2018-light': '#8FD1DB',
  // '2019-light': '#84B3D9',
}

Highcharts.chart('vis-pomer-nehody', {
  chart: {
      type: 'bar',
      height: 300,
      style: {
        fontFamily: 'Asap'
      },
      animation: false
  },
  title: {
      // text: 'Podíl srážek v mimořádných událostech', 
      text: 'Kolik mimořádných událostí vedlo ke srážce v jednotlivých letech', 
      style: {
        fontWeight: 'bold',
        fontFamily: 'Noticia text'
      }
  },
  subtitle: {
      text: 'Nedovolené jízdy za návěstidla s nehodami i bez v letech 2018, 2019 a 2020'
  },
  xAxis: {
    categories: ['rok<br>2018', 'rok<br>2019', 'rok<br>2020'],

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
    visible: false,
    
      // title: {
      //     text: 'Úhrn srážek'
      // },
      // showFirstLabel: false,
      labels: {
        // formatter: function() {
        //   return this.value + '<br>jízd';
        // }
        // formatter: function() {
        //   if (this.isLast) {
        //     return this.value + '<br>' +
        //                 '<span class="light-gray-text">jízd za</span>' + '<br>' +
        //                 '<span class="light-gray-text">návěstidla</span>'
        //   } else {
        //     return this.value
        //   }
        // } 
      }
  }, 
    tooltip: {
      // valueSuffix: ' jízd',
      shared: true
    },
  exporting: {
      enabled: false
  },
  credits: {
      // href : 'http://portal.chmi.cz/historicka-data/pocasi/uzemni-srazky',
      text : 'Zdroj: TODO'
  },
  legend: {
    enabled: false
  },
  plotOptions: {
      bar: {
          stacking: 'normal',
          dataLabels: {
              enabled: true,
              style: {
                textOutline: 0,
                fontSize: '0.9rem'
              }
          },
          // enableMouseTracking: false,
          groupPadding: 0.05,
          pointPadding: 0,
          // pointWidth: 50,
          borderWidth: 0,
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
  {
    name: 'mimořádné událost bez srážky',
    // borderWidth: 0,
    fill: '#fff',
    // data: [{y: 68, borderColor: colors['2018-light'], color: '#fff' }, 
    data: [{y: 68, color: colors['2018'], opacity: 0.2 }, 
           {y: 81, color: colors['2019'], opacity: 0.2 },
           {y: 72, color: colors['2020'], opacity: 0.2 }],
    // color: colors['2018']
    color: '#bbb',
  },
  {
    name: 'srážky',
    data: [{y: 4, color: colors['2018'] }, 
           {y: 6, color: colors['2019'] },
           {y: 4, color: colors['2020'] }],
    // color: colors['2019']
    color: '#555'
    
  },
]
});