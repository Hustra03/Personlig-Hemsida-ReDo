let timerPosition = document.getElementById("#minålder");
var minutes = 1000 * 60;
var hours = minutes * 60;
var days = hours * 24;
var years = days * 365;
var temp = 0;
var day = 0;
var temp2=0;
var hour=0;

function MinÅlder() {
  timerPosition.innerHTML = "";
  var d = new Date();
  var t = d.getTime();
  t = t - 33 * years - 10 * 30 * days - 25 * days;
  t = t / years;
  temp = t;
  t = Math.round(t);
  temp -= t;
  temp2=temp*365;
  day = Math.round(temp*365);
  temp2 -= day;
  hour = Math.round(temp2*24)
  let p = document.createElement("p");
  p.innerText = "Jag är " + t + " år, " + day + " dagar och "+hour +" timmar gammal";
  timerPosition.append(p);
}
MinÅlder();
