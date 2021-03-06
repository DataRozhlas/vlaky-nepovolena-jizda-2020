let chartWidth =
  document.getElementById("vis-srazky-rocne").offsetWidth > 600
    ? 600
    : document.getElementById("vis-srazky-rocne").offsetWidth;

Highcharts.chart("vis-srazky-rocne", {
  chart: {
    type: "column",
    height: 320,
    left: '10px',
    width: chartWidth
  },
  title: {
    text: "Kolizí vlaků v&nbsp;období leden⁠⁠–⁠červenec mírně přibylo", // V první polovině roku je nehod méně než loni',
    useHTML: true
  },
  subtitle: {
    text: "Zatím ale nemůžeme hovořit o&nbsp;trendu",
    useHTML: true
  },
  credits: {
    enabled: false
  //   // href : 'http://portal.chmi.cz/historicka-data/pocasi/uzemni-srazky',
  //   // text: "Zdroj: TODO",
  },
  xAxis: {
    categories: [
      "2010",
      "2011",
      "2012",
      "2013",
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
    ],
    labels: {
      enabled: true,
    },
    plotLines: [{
      value: 0,
      width: 0,
      zIndex: 10000,
      label: {
        text: 'Všechny srážky<br>vlaků',
        rotation: 0,
        y: 60,
      }
    }],
  },
  yAxis: {
    title: false,
    gridZIndex: 4,
    gridLineWidth: 2,
    gridLineColor: "#fff",
    tickPixelInterval: 30,
    tickInterval: 1,
    labels: {
      enabled: false
    }
  },
  legend: {
    enabled: false,
  },
  tooltip: {
    valueSuffix: " jízd",
    // shared: true
  },
  exporting: {
    enabled: false,
  },
  plotOptions: {
    column: {
      dataLabels: {
        enabled: true,
        style: {
          fontSize: '0.8rem'
        }
      },
      enableMouseTracking: false,
      pointPadding: 0,
      pointWidth: chartWidth / 20,
    },
    series: {
      // disable legend clicking
      events: {
        legendItemClick: function (e) {
          e.preventDefault();
        },
      },
    },
  },
  series: [
    {
      name: "Srážky",
      data: [1, 2, 1, 2, 3, 2, 2, 4, {y: 5, color: colors['2018']}, { y: 7, color: colors['2019']}, { y: 7, color: colors["2020"] }],
      color: "#424b54",
    },
  ]
});
