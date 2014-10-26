$(function () {
    var d1 = [];
    var d2 = [];
    var d3 = [];
    for (var i = 0; i < 14; i += 0.1)
    {
        d1.push([i, Math.cos(i)]);
        d2.push([i, Math.sin(i)]);
        d3.push([i, Math.exp(i)]);
    }

$.plot("#placeholder2", [
      { label: "cos(x)", data: d1 },
      { label: "cos(x)", data: d2 },
      { label: "exp(x)", data: d3 }
    ], {

      yaxis: {
        ticks: 10,
        min: -2,
        max: 15,
        tickDecimals: 3
      },
      grid: {
        backgroundColor: { colors: [ "#eee", "#000" ] },
        borderWidth: {
          top: 1,
          right: 1,
          bottom: 2,
          left: 2
        }
      }
    });
    
    window.onresize = function(event) {
$.plot("#placeholder2", [
      { label: "cos(x)", data: d1 },
      { label: "sin(x)", data: d2 },
      { label: "exp(x)", data: d3 }
    ], {

      yaxis: {
        ticks: 10,
        min: -2,
        max: 15,
        tickDecimals: 3
      },

      grid: {
        backgroundColor: { colors: [ "#eee", "#000" ] },
        borderWidth: {
          top: 1,
          right: 1,
          bottom: 2,
          left: 2
        }
      }
    });}
});
