var container = ``;

// Example API (JSONPlaceholder)
const apiUrlGETGeor = 'https://api.opencagedata.com/geocode/v1/json?q=egypt&key=219a711761dc4cf1afe5fbd7d07944bf';

fetch(apiUrlGETGeor)
  .then(response => response.json())
  .then(data => {

    var lat = data['results'][0].geometry['lat'];
    var lng = data['results'][0].geometry['lng'];
    // console.log(lat)

    // ______________________________________________
    

      
      const today = new Date();
      var end_date = formatRealDate(today);
        
      const nextDay = new Date();
      nextDay.setDate(today.getDate() - 6);
        
      var start_date = formatRealDate(nextDay);
    //   alert(start_date)
        // alert((today.toISOString()));  // Might show 2025-04-12T21:00:00.000Z
    
const apiUrlGETWeather = `https://meteostat.p.rapidapi.com/point/daily?lat=${lat}&lon=${lng}&start=${start_date}&end=${end_date}`;


fetch(apiUrlGETWeather, {
    method: 'GET',
    headers: {
"x-rapidapi-host": "meteostat.p.rapidapi.com",
        "x-rapidapi-key": "5e82e7d630msh66565de4429c392p1a2b21jsnbb38fe28d1aa",
        "Accept": "application/json"
    }
  })
  .then(responseWeather => responseWeather.json())
  .then(weatherData => {  
    // Make sure it's an array before using forEach
    if (Array.isArray(weatherData['data'])) {


        var Today = weatherData['data'][5]; 
        var tavg = Today['tavg'] ?? 0;//


        var tmin = Today['tmin'] ?? 0 ;//
        var tmax = Today['tmax'] ?? 0;//
        var Precipitation = Today['prcp'];//
        var wpgt = Today['wpgt'] ?? "-";
        var windspeed = Today['wspd'];//
        var tsun = Today['tsun'] ? Today['tsun']+' h' : "-";



        document.getElementById('avg-temp').innerHTML= tavg+'<sup>°</sup>';

        

        document.getElementById('temp-high').innerHTML= tmax+'<sup>°</sup>';
        document.getElementById('temp-low').innerHTML= tmin+'<sup>°</sup>';
        document.getElementById('wind-value').innerHTML= windspeed+' m/s';
        document.getElementById('rain-value').innerHTML= Precipitation+' mm';
        document.getElementById('sunshine').innerHTML= tsun;
        document.getElementById('wind-gusts').innerHTML= wpgt;


        var icon = '';
        if (Today['prcp'] > 0) {
            icon = 'rainy';
          } else if (Today['snow'] > 0) {
            icon = 'Snow';
          } else if (Today['tavg'] > 25) {
            icon = 'clear';
          } else {
            icon = 'cloudy';
          }

          document.getElementById('main-icon').src = "images/weather/"+icon+".png";


var iter = 0;
var bgBox = '';
var orderBox = '0';
var item_temp =  '';
      weatherData['data'].forEach(item => {
        // Process each item in the 'data' array
        console.log(item);  // You can replace this with your logic

        dateStr = item['date'];
    var date = new Date(dateStr.replace(" ", "T"));

// Get day name
var options = { weekday: 'long' };
var dayName = date.toLocaleDateString('en-US', options);


date_only = dateStr.replace(" 00:00:00", "");
// console.log(end_date); // Output: Friday
// console.log(date_only); // Output: Friday
        if(end_date == date_only){
             bgBox = 'background-color:orange !important;';
        }else{
             bgBox = '';

        }

        if(iter == 6){
            orderBox = "order:-1;";
        }
        else{
            orderBox=  "";
        }
        
        item_temp = item['tavg'] ? item['tavg']+"<sup>°</sup>" : '-';


        var icon_container = '';
        if (item['prcp'] > 0) {
            icon_container = 'rainy';
          } else if (item['snow'] > 0) {
            icon_container = 'Snow';
          } else if (item['tavg'] > 25) {
            icon_container = 'clear';
          } else {
            icon_container = 'cloudy';
          }


        container+=`
        <div class="degrees-box" style="${bgBox}${orderBox}" >
                    <span class="degree">${dayName}</span>
                    <img src="images/weather/${icon}.png" width="30" alt="">
                    <span class="degree-title">${item_temp}</span>
                </div>
        `;
        document.getElementById('daily-container').innerHTML = container;


        // For example:
        // Create list items or display data on the page.
        iter = iter + 1;
      });
    } else {
      console.error('Expected an array but got:', weatherData['data']);
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });











    //__________________________________

    // console.log('API Response:', data['results'][0].geometry['lng']); // <-- check this

    // Make sure it's an array before using forEach
    if (Array.isArray(data['results'])) {
      
    } else {
      console.error('Expected an array but got:', data);
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });









  function formatDate(date) {
    return date.toISOString().split('T')[0]; // Format: YYYY-MM-DD
  }

  function formatRealDate(date) {
    const year = date.getFullYear();                  // local year
    const month = String(date.getMonth() + 1).padStart(2, '0'); // local month
    const day = String(date.getDate()).padStart(2, '0');        // local day
    return `${year}-${month}-${day}`;
  }
  