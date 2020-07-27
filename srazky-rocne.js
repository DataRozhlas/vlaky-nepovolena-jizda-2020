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

let chartWidth = document.getElementById('vis-srazky-rocne').offsetWidth > 600 ? 600 : document.getElementById('vis-srazky-rocne').offsetWidth

Highcharts.chart('vis-srazky-rocne', {
  chart: {
      type: 'column',
      height: 320,
      // width: 400,
      width: chartWidth,
      style: {
        fontFamily: 'Asap',
        fontSize: '1rem'
      },
      animation: false
  },
  title: {
      text: 'Srážky vlaků v prvním pololetí', // V první polovině roku je nehod méně než loni', 
      style: {
        fontWeight: 'bold',
        fontFamily: 'Noticia text'
      }
  },
  subtitle: {
    text: 'zahrnuje střet jako následek nepovoleného projetí návěstidla',
      style: {
        fontSize: '0.85rem'
      }
  },
  xAxis: {
    categories: ['2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020'],
    labels: {
      enabled: true
    }
  },
  legend: {
    enableMouseTracking: false
  },
  yAxis: {
    title: false,
    gridZIndex: 4,
    gridLineWidth: 2,
    gridLineColor: '#fff',
    tickPixelInterval: 30,
    tickInterval: 1,
    labels: {
      enabled: false,
      align: 'center',
      formatter: function() {
        if (this.isLast) {
          return this.value + '<br>' +
                      '<span class="light-gray-text">nehod</span>'
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
          pointWidth: chartWidth / 20
          // pointWidth: function(chart) { console.log(this); return 10}() //this.chart.width / 12
      }, 
      series: {
        events: {
          legendItemClick: function(e) {
              e.preventDefault();
          }
      }
      }
  },
  series: [
  {
    name: 'Srážky',
    data: [0,2,1,2,2,2,1,4,4,6,{ y: 4, color: colors['2020']}],
    color: '#424b54'
  }],
  // responsive: {
  //   rules: [{
  //     condition: {
  //       maxWidth: 500
  //     }
  //   }]
  // }
});
