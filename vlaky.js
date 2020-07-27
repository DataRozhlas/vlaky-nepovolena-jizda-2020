/*
 ! alert
 ? question
 TODO task
 * important, prej
*/

/*
  TODO Set column color in series based on the name of the series when var colors' keys are named after the series
  I.e. sth like colors[this.name]
*/


Highcharts.chart('vis-container-navestidla', {
  chart: {
      type: 'column'
  },
  title: {
      text: 'Počet nedovolených jízd za návěstidla letos zatím není výrazný', 
      useHTML: true,
  },
  subtitle: {
      useHTML: true,
      text: 'Meziroční srovnání nepovolených jízd za návěstidla po měsících'
              // + '<br><span style="color: #fff">.</span>',
  },
  xAxis: {
      categories: ['leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec'],
  },
  yAxis: {
      title: {
          text: 'nepovolené jízdy za návěstidla'
      },
      // showFirstLabel: false,
      // labels: {
        // formatter: function() {
        //   if (this.isLast) {
        //     return this.value + '<br>' +
        //                 '<span class="light-gray-text">jízd za</span>' + '<br>' +
        //                 '<span class="light-gray-text">návěstidla</span>'
        //   } else {
        //     return this.value
        //   }
        // } 
      // }
  }, 
    tooltip: {
      valueSuffix: ' jízd',
      shared: true
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
              enabled: false
          },
          enableMouseTracking: true,
          pointPadding: 0.1,
          groupPadding: 0.15,
          borderWidth: 0,
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