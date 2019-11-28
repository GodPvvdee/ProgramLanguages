Highcharts.chart("container", {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: "pie"
  },
  title: {
    text: "2019 оны github дээрх хамгийн их эрэлтэй хэлнүүд "
  },
  tooltip: {
    pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: "pointer",
      dataLabels: {
        enabled: true,
        format: "<b>{point.name}</b>: {point.percentage:.1f} %"
      }
    }
  },
  series: [
    {
      name: "Brands",
      colorByPoint: true,
      data: [
        {
          name: "Javascript",
          y: 20.308,
          sliced: true,
          selected: true
        },
        {
          name: "Python",
          y: 17.068
        },
        {
          name: "Java",
          y: 10.366
        },
        {
          name: "Go",
          y: 8.809
        },
        {
          name: "C++",
          y: 7.051
        },
        {
          name: "TypeScript",
          y: 6.01
        },
        {
          name: "Ruby",
          y: 5.869
        },
        {
          name: "PHP",
          y: 5.064
        },
        {
          name: "Other",
          y: 19.455
        }
      ]
    }
  ]
});
