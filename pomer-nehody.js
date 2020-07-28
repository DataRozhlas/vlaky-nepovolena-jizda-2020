Highcharts.chart('vis-pomer-nehody', {
  chart: {
      type: 'bar',
      height: 300
  },
  title: {
      text: 'Srážky jsou důsledkem nepovolených prujezdů návěstidly pouze v&nbsp;jednotkách případů', 
      useHTML: true
  },
  subtitle: {
      useHTML: true,
      text: //'V letošním roce došlo k 72 průjezdům z nichž 4 skončily srážkou a 68 beze srážky' +
        '<text class="highcharts-plot-line-label">Nepovolené průjezdy se srážkou jsou vyznačeny sytou barvou, nepovolené průjezdy bez srážky jemným odstínem.</text>',
  },
  credits: {
    href : 'http://www.dicr.cz/statistiky-mimoradnych-udalosti',
    text : 'Zdroj: Drážní inspekce'
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
              },
              // formatter: function() {
              //   console.log(this)
              //   return this.colorIndex == 1 ? this.y : this.y + ' nepovolených průjezdů bez srážky'
              //   return this.y + ' nepovolených průjezdů bez srážky'
              // }
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
    data: [{y: 68, color: colors['2018'], opacity: 0.25 }, 
           {y: 81, color: colors['2019'], opacity: 0.25 },
           {y: 72, color: colors['2020'], opacity: 0.25 }],
  },
  {
    name: 'srážky',
    data: [{y: 4, color: colors['2018'] }, 
           {y: 6, color: colors['2019'] },
           {y: 4, color: colors['2020'] }],    
  },
]
});