document.getElementsByClassName('widget')[0].style.display = 'none';
let today = new Date();
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Des"];
var dayName = days[today.getDay()];
var day = today.getDate();
var m = today.getMonth() + 1;
const month = monthNames[m];
var date1 = dayName + ', ' + day + ' ' + month + '' + today.getFullYear();
var temp = 0;
//================================================================================
const apiKey = '9ad883bdccd12827fc9c35fd6402a466';
const btn = document.querySelector('#generate');
btn.addEventListener('click', getDate);
async function getDate() {
  try {
    var Zipcode = document.querySelector('#zip').value;
    var fullUrll = `http://api.openweathermap.org/data/2.5/weather?zip=${Zipcode}&appid=${apiKey}&units=metric`;
    var city = `Zipcode: ${Zipcode}`;
    if (!Zipcode) {
      var city = document.getElementById('citySel').value;
      var fullUrll = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    }
    document.getElementById('loc').innerHTML = `${city}`;
    const response = await fetch(fullUrll)
      .then(response => response.json())
      .then(data => {
        temp = data.main.temp;
      }).then(updateUI)
  } catch (err) {
    console.log(err);
  }
};

const updateUI = async function() {
  document.getElementById('date').innerHTML = date1;
  document.getElementById('temp').innerHTML = `${temp}&deg;`;
  document.getElementsByClassName('widget')[0].style.display = 'block';
  var Zipcode = document.querySelector('#zip').value = '';
}