let pub_country="Egypt";
let start_counter = 0;
let pub_data ;
function countriesData(){
var ii = 0;
  var country_name = '';
  var country_flag = '';
  var country_geo_lat = '';
  var country_geo_lng = '';
  var countries = `<li>
  <input type="text" class="dropdown-search" placeholder="Search...">
  </li>`;
  
  
  const apiUrlGET_Countries = 'https://restcountries.com/v3.1/all';
  
  fetch(apiUrlGET_Countries,{
    method: 'GET',
  })
  .then(response => response.json())
  .then(data => {
    
    data.forEach(item => {
      ii++;
      country_name = item['name']['common'];
      country_flag = item['flags']['png'];
      country_geo_lat = item['latlng'][0];
      country_geo_lng = item['latlng'][1];
      


      if (country_name.includes('Israel')) return;

          countries+=`<li><a class="dropdown-item country-select" href="#" data-country="${country_name}" data-lat="${country_geo_lat}" data-lng="${country_geo_lng}">
                    <span>${country_name}</span>
                    <img src="${country_flag}" width="10" height="10" alt="rainy">
                    </a></li>`;
                    
                    
                  });
                  // console.log(countries)
                  document.getElementById('countries-container').innerHTML = countries;

                  document.querySelector('.dropdown-search').addEventListener('input', function () {
                    const filter = this.value.toLowerCase();
                    const items = document.querySelectorAll('.dropdown-menu .dropdown-item');
                    
                    items.forEach(item => {
                        const text = item.innerText.toLowerCase();
                        item.style.display = text.includes(filter) ? 'flex' : 'none';
                    });
                });
                  // console.log(ii)
                  
                })
                .catch(error => {
                  console.error('Error fetching data:', error);
                });
                
                
              }



// async function countriesData(){
//   var countries = `<li>
//   <input type="text" class="dropdown-search" placeholder="Search...">
//   </li>`;
//   var country_name = '';
//   var country_flag = '';
//   var country_governrates = ``;
//   var geonameId;
//   const apiUrlGET_Countries = 'http://api.geonames.org/countryInfoJSON?username=v11545';
  
//   fetch(await apiUrlGET_Countries,{
//     method: 'GET',
//   })
//   .then(response => response.json())
//   .then( data => {

//     const countries_data = Array.isArray(data['geonames']) ? data['geonames'] : [];

//     // Check if the countries_data array is not empty
//     if (countries_data.length > 0) {
//       countries_data.forEach(item => {
//         // Process each country item
//         console.log(item);
//       });
//     } else {
//       console.log('No countries data available');
//     }    
//     countries_data.forEach(item => {

//       country_name = item['countryName'];
//       geonameId = item['geonameId'];

//       if (country_name.includes('Israel')) return;

//           countries+=`<li><a class="dropdown-item" href="#">
//                     <span>${country_name}</span>
//                     <img src="" width="10" height="10" alt="rainy">
//                     </a></li>`;
          
//                     country_governrates =  governrates(geonameId);
//                     countries+=country_governrates;
                    
//                   });
//                   // console.log(data['geonames'][0]['countryName'])
//                   document.getElementById('countries-container').innerHTML = countries;

//                   document.querySelector('.dropdown-search').addEventListener('input', function () {
//                     const filter = this.value.toLowerCase();
//                     const items = document.querySelectorAll('.dropdown-menu .dropdown-item');
                    
//                     items.forEach(item => {
//                         const text = item.innerText.toLowerCase();
//                         item.style.display = text.includes(filter) ? 'flex' : 'none';
//                     });
//                 });
                  
//                 })
//                 .catch(error => {
//                   console.error('Error fetching data:', error);
//                 });
                
                
//               }


// function governrates(country){

//   const countryID = country;
//   var governrates = ``;
//   var governrate_name = '';
//   var country_flag = '';
//   var geonameId;
//   const apiUrlGET_Governrates = `http://api.geonames.org/childrenJSON?geonameId=${countryID}&username=v11545`;
  
//   fetch(apiUrlGET_Governrates,{
//     method: 'GET',
//   })
//   .then(response => response.json())
//   .then(data => {

//     var governrates_data = data['geonames'];
//     console.log(data)
//     governrates_data.forEach(item => {

//       governrate_name = item['toponymName'];
//       geonameId = item['geonameId'];


//           governrates+=`<li><a class="dropdown-item" href="#">
//                     <span>${governrate_name}</span>
//                     <img src="" width="10" height="10" alt="rainy">
//                     </a></li>`;

                    
                    
//                   });
                  
//                   console.log(governrates)
//                   return governrates;
                  
//                 })
//                 .catch(error => {
//                   console.error('Error fetching data:', error);
//                 });
                
               

// }
              
              countriesData();

  function getFlag(){

    
    
    const apiUrlGET_Countries = 'https://restcountries.com/v3.1/name/egypt';
    
    fetch(apiUrlGET_Countries,{
      method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
      // console.log(data)
      // data.forEach(item => {
      //   if (item['name']['common'].includes('Israel')) return;
  
      //   console.log("nn:",item['name']['common']);
      //       countries+=`<li><a class="dropdown-item" href="#">
      //                 <span>${item['name']['common']}</span>
      //                 <img src="${item['flags']['png']}" width="10" height="10" alt="rainy">
      //                 </a></li>`;
                      
                      
      //               });
                    
                  })
                  .catch(error => {
                    console.error('Error fetching data:', error);
                  });
                  
                  

  }

  function formatDate(date) {
    return date.toISOString().split('T')[0]; // Format: YYYY-MM-DD
  }

  function formatRealDate(date) {
    const year = date.getFullYear();                  // local year
    const month = String(date.getMonth() + 1).padStart(2, '0'); // local month
    const day = String(date.getDate()).padStart(2, '0');        // local day
    return `${year}-${month}-${day}`;
  }
  





async function get_country_dimensions() {
  const countryName = pub_country;
  const api = `https://api.opencagedata.com/geocode/v1/json?q=${countryName}&key=219a711761dc4cf1afe5fbd7d07944bf`;

  try {
    const response = await fetch(api);
    const data = await response.json();

    const lat = data.results[0].geometry.lat;
    const lon = data.results[0].geometry.lng;

    return { lat, lon };
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

// Use it like this:
// get_country_dimensions().then(result => {
//   console.log(result); // { lat: ..., lon: ... }
// });



async function get_country_id(two_dimensions) {
  try {
    const dimensions = two_dimensions;
    const d_lat = await dimensions['lat'];
    const d_lon = await dimensions['lon'];
    // console.log("d_lat: ",d_lat)
    // console.log("d_lon: ",d_lon)

    const api = `https://meteostat.p.rapidapi.com/stations/nearby?lat=${d_lat}&lon=${d_lon}`;

    const response = await fetch(api,{
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'aaa6deacc5msh6361d256ffe5a0ep13a7d1jsn263666bb3d8e',       // Replace with your actual API key
        'X-RapidAPI-Host': 'meteostat.p.rapidapi.com'
      }
    });
    const data = await response.json();

    const station_id = await  data['data'][0]['id'];
 

    return station_id;
  } catch (error) {
    // console.error('Error fetching data:', error);
    // alert('Country data not available');alert(pub_country)
    return null;
  }
  
}



async function weather_data(country_id , startdate = null , c_name = null){

  if(country_id == null){
    return null;  }

  const countryid = country_id;
  const countryname = pub_country;
  // console.log(pub_country)
  const {start_date , end_date} = await getCountryDateRange(startdate);

try {
  const api = `https://meteostat.p.rapidapi.com/stations/daily?station=${countryid}&start=${start_date}&end=${end_date}`;

const response = await fetch(api, {
  method: 'GET',
  headers: {
"x-rapidapi-host": "meteostat.p.rapidapi.com",
      "x-rapidapi-key": "aaa6deacc5msh6361d256ffe5a0ep13a7d1jsn263666bb3d8e",
      "Accept": "application/json"
  },
  
});

const data = await response.json();
if(c_name !== null){
  pub_country = c_name;
}
// pub_data = data;
return data;
} catch (error) {
  
}
}





async function weather_today_data(data ,day = 6, week_day = 0) {

  try {

    if(data == null){
      return null;
    }
    var weatherData = data['data'];
    if (!Array.isArray(weatherData)) {
      return null;
    }
  
    var Today;
    // Today weather data
    if(week_day == 1){
       Today = weatherData[0]; 
  
    }
  
    else{
       Today = weatherData[day]; 
  
    }

    // console.log("Today:",Today)
  
    // Today weather data details
          var icon = 'default_loader_weather';
          // var tavg = Today['tavg'] ? Today['tavg'] : "-";
          var tavg='';
          if (!Today || Today['tavg'] === null || Today['tavg'] === undefined) {
            tavg = "-";
            icon = 'default_loader_weather';
            
        } else {
            tavg = Today['tavg'];   
            
            
            if (Today['snow'] && Today['snow'] > 0) {
              icon = 'Snow';
          } else if (Today['prcp'] && Today['prcp'] > 0) {
              icon = 'rainy';
          } else if (Today['tavg'] && Today['tavg'] > 25) {
              icon = 'clear';
          } else {
              icon = 'cloudy';
          }

        }

  
         
  
  
          // Display today weather data into page
          document.getElementById('avg-temp').innerHTML= tavg+'<sup>°</sup>';
          document.getElementById('main-icon').src = "images/weather/"+icon+".png";
  
  
  
    
  } catch (error) {
    
  }

  
}




async function weather_today_data_details(data , day = 6 , week_day = 0) {
  if(data == null){
    return null;
  }
  var weatherData = data['data'];
  if (!Array.isArray(weatherData)) {
    return null;
  }
  var Today;
  // Today weather data
  if(week_day == 1){
     Today = weatherData[0]; 

  }

  else{
     Today = weatherData[day]; 

  }

  // console.log("Today",Today)


  // Today weather data details
       if(Today){
        var tmin = Today['tmin'] ?? 0 ;//
        var tmax = Today['tmax'] ?? 0;//
        var Precipitation = Today['prcp'] ?? '-';//
        var wpgt = Today['wpgt'] ?? "-";
        var windspeed = Today['wspd'];//
        var tsun = Today['tsun'] ? Today['tsun']+' h' : "-";
       }
       else{
        var tmin =  0 ;//
        var tmax =  0;//
        var Precipitation =  '-';//
        var wpgt =  "-";
        var windspeed = 0;//
        var tsun =  "-";
       }
        

        // Display today weather data into page
        document.getElementById('temp-high').innerHTML= tmax+'<sup>°</sup>';
        document.getElementById('temp-low').innerHTML= tmin+'<sup>°</sup>';
        document.getElementById('wind-value').innerHTML= windspeed+' m/s';
        document.getElementById('rain-value').innerHTML= Precipitation+' mm';
        document.getElementById('sunshine').innerHTML= tsun;
        document.getElementById('wind-gusts').innerHTML= wpgt;
 

}


async function weather_week_data(data  , startdate = null){
  week_days_loading();

  try {
  if(data == null){
    return null;
  }

  
 
  var weatherData = data['data'];
  if (!Array.isArray(weatherData)) {
    return null;
  }

  const dateStart = startdate ? new Date(startdate) : new Date();
// console.log("dats:",dateStart)

  // Today weather data
  var Week = weatherData; 

  if(Week.length == 0){
    week_days_loading_not_found();
    return;
  }


var boxType = '';
var item_temp =  '';
var displayed_date = '';
var icon_container = ``;
var container = ``;
var box_index = 0;


const countryname = pub_country;
const {start_date , end_date } = await getCountryDateRange( dateStart);
      Week.forEach(item => {

    dateStr = item['date'];
    var date = new Date(dateStr.replace(" ", "T"));
    
    // Get day name
    var options = { weekday: 'long' };
    
    var dayName = date.toLocaleDateString('en-US', options);
    
    date_only = dateStr.replace(" 00:00:00", "");

        if(end_date == date_only){
          boxType = 'degrees-box degrees-box-today';
        }else{
          boxType = 'degrees-box';

        }

        // item_temp = item['tavg'] ? item['tavg']+"<sup>°</sup>" : '<i class="bi bi-exclamation-triangle-fill text-warning"></i>';
        
        if(item['tavg']){
          item_temp = item['tavg']+"<sup>°</sup>";
          if (item['snow'] > 0) {
            icon_container = 'Snow';
          } else if (item['prcp'] > 0) {
            icon_container = 'rainy';
          } else if (item['tavg'] > 25) {
            icon_container = 'clear';
          } else {
            icon_container = 'cloudy';
          }
        }
        else{
          item_temp = '<i class="bi bi-exclamation-triangle-fill text-warning"></i>';
          icon_container = 'default_loader_weather';

        }

        
        // if (item['prcp'] > 0) {
        //     icon_container = 'rainy';
        //   } else if (item['snow'] > 0) {
        //     icon_container = 'Snow';
        //   } else if (item['tavg'] > 25) {
        //     icon_container = 'clear';
        //   } else {
        //     icon_container = 'cloudy';
        //   }

        

displayed_date = dateStr.replace(" 00:00:00","");
          

        container+=`
        <div class="data-week-box ${boxType}"  data-week-date="${displayed_date}">
                    <span class="degree-day">${dayName}</span>
                    <span class="degree-date">${displayed_date}</span>
                    <img src="images/weather/${icon_container}.png" width="30" alt="">
                    <span class="degree">${item_temp}</span>
                </div>
        `;

        // console.log(box_index)
        // console.log(displayed_date)
box_index++;
        
      });
      document.getElementById('daily-container').innerHTML = container;

  } catch (error) {
    
  }
}



async function getCountryDateRange(date = null) {
  const apiKey = '219a711761dc4cf1afe5fbd7d07944bf'; // Your OpenCage API key
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(pub_country)}&key=${apiKey}`;

  // console.log("start D: ", date)
  const dateStart = date ? new Date(date) : new Date();
  
  try {
    // console.log("start D: ", dateStart)
    // console.log("start D: ", new Date)
    // if(date !== null){
    //   const dateStart =  new Date(date);
    // }
    // else{
    //   const dateStart = new Date();
    // }
    const response = await fetch(url);
    const data = await response.json();

    const timezone = data.results[0].annotations.timezone.name;

    const today = dateStart;
    const sixDaysAgo = new Date();
    sixDaysAgo.setDate(today.getDate() - 6);

    const format = (date) =>
      new Intl.DateTimeFormat('en-CA', {
        timeZone: timezone,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      }).format(date);

     start_date = format(sixDaysAgo);
     end_date = format(today);

    // Simply log or return them
    // console.log(`Start Date: ${start_date}`);
    // console.log(`End Date: ${end_date}`);
    
    return { start_date, end_date };

  } catch (err) {
    console.error('Error:', err);
  }
}






function search(){
  let countries_select = document.querySelectorAll('.country-select');

  countries_select.forEach(function(item) {
    item.addEventListener('click', function(event) {
      event.preventDefault();
  
      const lat = this.getAttribute('data-lat');
      const name = this.getAttribute('data-country');

      country(name)
      // console.log("country name:",name);
    });
  });  

}









/** Search about country weather */
async function country(c_name,date=null){
// console.log(c_name)
  // week_days_loading();
  pub_country = c_name;
  update_country_name();
  const dimensions = await get_country_dimensions();
  const cid = await get_country_id(dimensions);
  const data = await weather_data(cid , date , c_name);
  // console.log(cid)

  await weather_today_data(data);
  await weather_today_data_details(data);
  await weather_week_data(data , date);
  

  
  search();
  search_week_day();
}

function update_country_name()
{
  document.getElementById('country_name') .innerHTML=pub_country;
}




function week_days_loading_not_found(){
  var loader_ = ``;

setTimeout(() => {

  loader_ = `
 <div class="degrees-box">
              <div class="degree-box-not-found">
                <p class="degree-box-not-found">
                  Not found
                </p>
              </div>
            </div>



            <div class="degrees-box">
              <div class="degree-box-not-found">
                <p class="degree-box-not-found">
                  Not found
                </p>
              </div>
            </div>


            <div class="degrees-box">
              <div class="degree-box-not-found">
                <p class="degree-box-not-found">
                  Not found
                </p>
              </div>
            </div>


            <div class="degrees-box">
              <div class="degree-box-not-found">
                <p class="degree-box-not-found">
                  Not found
                </p>
              </div>
            </div>


            <div class="degrees-box">
              <div class="degree-box-not-found">
                <p class="degree-box-not-found">
                  Not found
                </p>
              </div>
            </div>


            <div class="degrees-box">
              <div class="degree-box-not-found">
                <p class="degree-box-not-found">
                  Not found
                </p>
              </div>
            </div>


            <div class="degrees-box">
              <div class="degree-box-not-found">
                <p class="degree-box-not-found">
                  Not found
                </p>
              </div>
            </div>
`;
document.getElementById('daily-container').innerHTML = loader_;

}, "1000");






}

function week_days_loading(){

  var loader_ = `
  <div class="degrees-box">
                 <div style="font-size: 1.5rem;width: 3rem;height: 3rem;" class="spinner-border text-warning" role="">
                   <!-- <span class="sr-only">Loading...</span> -->
                 </div>
               </div>
               <div class="degrees-box">
                   <div style="font-size: 1.5rem;width: 3rem;height: 3rem;" class="spinner-border text-warning" role="">
                       <!-- <span class="sr-only">Loading...</span> -->
                     </div>
               </div>
               <div class="degrees-box">
                   <div style="font-size: 1.5rem;width: 3rem;height: 3rem;" class="spinner-border text-warning" role="">
                       <!-- <span class="sr-only">Loading...</span> -->
                     </div>
               </div>
               <div class="degrees-box">
                   <div style="font-size: 1.5rem;width: 3rem;height: 3rem;" class="spinner-border text-warning" role="">
                       <!-- <span class="sr-only">Loading...</span> -->
                     </div>
               </div>
               <div class="degrees-box">
                   <div style="font-size: 1.5rem;width: 3rem;height: 3rem;" class="spinner-border text-warning" role="">
                       <!-- <span class="sr-only">Loading...</span> -->
                     </div>
               </div>
           
   

           <div class="degrees-box">
             <div style="font-size: 1.5rem;width: 3rem;height: 3rem;" class="spinner-border text-warning" role="">
               <!-- <span class="sr-only">Loading...</span> -->
             </div>
           </div>

           <div class="degrees-box">
             <div style="font-size: 1.5rem;width: 3rem;height: 3rem;" class="spinner-border text-warning" role="">
               <!-- <span class="sr-only">Loading...</span> -->
             </div>
           </div>
`;
document.getElementById('daily-container').innerHTML = loader_;

 




}




async function weather_data_week(country_id , date = null , c_name = null){

  if(country_id == null){
    return null;  }

  const countryid = country_id;
  // const countryname = pub_country;
  // console.log(pub_country)

try {
  const api = `https://meteostat.p.rapidapi.com/stations/daily?station=${countryid}&start=${date}&end=${date}`;

const response = await fetch(api, {
  method: 'GET',
  headers: {
"x-rapidapi-host": "meteostat.p.rapidapi.com",
      "x-rapidapi-key": "aaa6deacc5msh6361d256ffe5a0ep13a7d1jsn263666bb3d8e",
      "Accept": "application/json"
  },
  
});

const data = await response.json();
if(c_name !== null){
  pub_country = c_name;
}
return data;
} catch (error) {
  
}
}


async function week(date = null, day) {

  const dimensions = await get_country_dimensions();
  const cid = await get_country_id(dimensions);
  // console.log("date:",date)
  // console.log("day index:",day)
  // console.log("country id:",cid)
  
  const data = await weather_data_week(cid , date);

  // console.log(data)
  await weather_today_data(data, day,1);
  await weather_today_data_details(data,day,1);
  

  // search();
  // search_week_day();


}

function search_week_day(){
  let week_day = document.querySelectorAll('.data-week-box');
  // week_day.style.display="none";


  week_day.forEach(function(item , index) {
    item.addEventListener('click', function(event) {
      for (let i = 0; i < week_day.length; i++) {
        week_day[i].classList.remove("degrees-box-today");
      }
    
      event.preventDefault();
      item.classList.add("degrees-box-today");
      const date_week = this.getAttribute('data-week-date');
      start_counter++;
// console.log(date_week)
      week(date_week , index)

    });
  });  

}





async function main(date = null) {
  const country = pub_country ;
  const dimensions = await get_country_dimensions();
  const cid = await get_country_id(dimensions);
  // console.log(cid,">>>>")
  // console.log(date,">>>>")
  // console.log(pub_country,">>>>")
  const data = await weather_data(cid , date);
  await weather_today_data(data);
  await weather_today_data_details(data);
  
  if(start_counter > 0){return;}
  await weather_week_data(data , date);
  
  search();
  search_week_day();


}


main("")