$(function () {
    var d1 = [];
    var parser = math.parser();
    for (var s = 0; s < 14; s += 0.1)
    {
      //var expression = sprintf('%d * %d',j,j);
      var scope = {s:s};
      var hs = '(s*i+10)^2/((s*i+1)*(s*i+1000))';
        d1.push([s, math.eval('re(' + hs + ')^2', scope)]);
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
