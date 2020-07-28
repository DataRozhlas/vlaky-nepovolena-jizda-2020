let chartWidthNehody =
  document.getElementById("vis-nehody-rocne").offsetWidth > 600
    ? 600
    : document.getElementById("vis-nehody-rocne").offsetWidth;


Highcharts.chart('vis-nehody-rocne', {
  chart: {
      type: 'column',
      width: chartWidthNehody
  },
  title: {
      text: 'V první polovině roku docházelo k&nbsp;nepovoleným průjezdům návěstidel méně než vloni',
      useHTML: true
  },
  subtitle: {
      text: 'Celkový počet nepovolených průjezdů byl v&nbsp;loňském prvním pololetí vyšší než letos',
      // + '<br><span style="color: #fff">.</span>',
      useHTML: true,
  },
  xAxis: {
    categories: ['<span class="eighteen">2018</span>', 
                 '<span class="nineteen">2019</span>', 
                 '<span class="twenty">2020</span>'],
    labels: {
      enabled: true
    }
  },
  yAxis: {
    title: {
      text: 'nepovolené jízdy za návěstidla'
    },
    // labels: {
    //   formatter: function() {
    //     if (this.isLast) {
    //       return this.value + '<br>' +
    //                   '<span class="light-gray-text">jízd za</span>' + '<br>' +
    //                   '<span class="light-gray-text">návěstidla</span>'
    //     } else {
    //       return this.value
    //     }
    //   } 
    // }
  }, 
  legend: {
    enabled: false
  },
  tooltip: {
    valueSuffix: ' jízd',
    // shared: true
  },
  exporting: {
      enabled: false
  },
  credits: {
      href : 'http://www.dicr.cz/statistiky-mimoradnych-udalosti',
      text : 'Zdroj: Drážní inspekce'
  },
  plotOptions: {
    column: {
      dataLabels: {
          enabled: true
      },
      enableMouseTracking: false,
      pointPadding: 0
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