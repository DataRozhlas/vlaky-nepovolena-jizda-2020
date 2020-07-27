Highcharts.chart('vis-pomer-nehody', {
  chart: {
      type: 'bar',
      height: 300
  },
  title: {
      text: 'Srážky jako následky mimořádných událostí se pohybují v&nbsp;řádu jednotek', 
      useHTML: true
  },
  subtitle: {
      useHTML: true,
      text: 'Počet srážek vlaků jako následek nepovolených průjezdů je malý',
  },
  xAxis: {
    categories: ['rok<br>2018', 'rok<br>2019', 'rok<br>2020'],
  },
  yAxis: {
    visible: false,
  }, 
  tooltip: {
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
                fontSize: '0.85rem'
              }
          },
          groupPadding: 0.05,
          pointPadding: 0,
          borderWidth: 0,
      }
  },
  series: [
  {
    name: 'mimořádné události bez srážky',
    fill: '#fff',
    // data: [{y: 68, borderColor: colors['2018-light'], color: '#fff' }, 
    data: [{y: 68, color: colors['2018'], opacity: 0.2 }, 
           {y: 81, color: colors['2019'], opacity: 0.2 },
           {y: 72, color: colors['2020'], opacity: 0.2 }],
  },
  {
    name: 'srážky',
    data: [{y: 4, color: colors['2018'] }, 
           {y: 6, color: colors['2019'] },
           {y: 4, color: colors['2020'] }],    
  },
]
});