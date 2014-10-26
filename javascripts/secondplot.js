$(function () {
    var d1 = [];
    var parser = math.parser();
    for (var s = 0.01; s < 10; s += 0.01)
    {
      var scope = {s:s};
      var hs = 's*i*(s*i+50)/((s*i)^2+s*i+16)';
        d1.push([s, math.eval('20*log(sqrt(re(' + hs + ')^2 + im(' + hs + ')^2))' , scope)]);
    }

$.plot("#placeholder2", [
      { label: "H(s)", data: d1 },
    ], {

      yaxis: {
        ticks: 10,
        min: -100,
        max: 100,
        tickDecimals: 3
      },

xaxis: { ticks: [0.01,0.1,1,10,100,1000],
                 transform:  function(v) {return Math.log(v+0.01); /*move away from zero*/} , tickDecimals: 3, min: 0, max: 1000},

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
        ticks: 50,
        min: -100,
        max: 100,
        tickDecimals: 3
      },

xaxis: { ticks: [0.1,1,10,100,1000],
                 transform:  function(v) {return Math.log(v+0.01); /*move away from zero*/} , tickDecimals: 3, min: 0, max: 1000},

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
