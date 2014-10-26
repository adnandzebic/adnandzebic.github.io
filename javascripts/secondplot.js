$(function () {
    var d1 = [];
    var parser = math.parser();
    for (var j = 0; j < 14; j += 0.1)
    {
        d1.push([j, math.eval(''+j)]);
    }

$.plot("#placeholder2", [
      { label: "H(s)", data: d1 },
    ], {

      yaxis: {
        ticks: 10,
        min: -2,
        max: 15,
        tickDecimals: 3
      },
      grid: {
        backgroundColor: "#073642",
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
      { label: "H(s)", data: d1 },
    ], {

      yaxis: {
        ticks: 10,
        min: -2,
        max: 15,
        tickDecimals: 3
      },

      grid: {
        backgroundColor: "#073642",
        borderWidth: {
          top: 1,
          right: 1,
          bottom: 2,
          left: 2
        }
      }
    });}
});
