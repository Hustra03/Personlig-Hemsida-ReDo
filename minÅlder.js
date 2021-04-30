let timerPosition = document.getElementById("#minålder");
var minutes = 1000 * 60;
var hours = minutes * 60;
var days = hours * 24;
var years = days * 365;
var temp = 0;
var day = 0;

function MinÅlder() {
  timerPosition.innerHTML = "";
  var d = new Date();
  var t = d.getTime();
  t = t - 33 * years - 10 * 30 * days - 25 * days;
  t = t / years;
  temp = t;
  t = Math.round(t);
  day = temp - round;
  day = Math.Round(day / days);
  let p = document.createElement("p");
  console.log(t);
  p.innerText = "Jag är " + t + " år och " + days + " dagar gammal";
  timerPosition.append(p);
}
MinÅlder();
