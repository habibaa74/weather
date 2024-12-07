// decleration 
let results;
let weekdays=["sunday","monday"," Tuesday","Wednesday","Thursday","Friday","Saturday"]
let months=["January","February","March","April","May","June","July","August","September","October","November","December"]
// API call
async function weather(city){
    let realWeather = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=eb426af9808341afb1854722240512&q=${city}&days=3`)
    let result = await realWeather.json()
    display(result.location , result.current , result.forecast.forecastday)   
    results=result;
}
// default city
weather("palestine")
//Search 
const search = document.getElementById("search")
search.addEventListener("input",function(e){
  weather(e.target.value)
})


// display function
function display(location,current,forecastday){
let forecast =`
 <div class="col-md-4  today">
                <h2 class="d-flex justify-content-between fs-6">${weekdays[new Date(current.last_updated).getDay()]}<span>${new Date(current.last_updated).getDate()}${months[new Date(current.last_updated).getMonth()]}</span></h2>
                <p class="my-4 fs-5 text-white-50">${location.name}</p>
                <p class="text-white degree ms-1">${current.temp_c}<sup>o</sup>C</p>
               <img src="https:${current.condition.icon}">
                <span class="text-info d-block my-4 ms-1">${current.condition.text}</span>
                <div class="weatherData d-flex">
                <p><img src="images/icon-umberella.png" alt="icon-umberella"><span class="ms-2">20%</span></p>
                <p><img src="images/icon-wind.png" alt="icon-wind"><span class="ms-2">18km/h</span></p>
                <p><img src="images/icon-compass.png" alt="icon-compass"><span class="ms-2">East</span></p>
                </div>
              </div>
                <div class="col-md-4  tomorrow">
               <h2 class="text-center fs-6">${weekdays[new Date(forecastday[1].date).getDay()]}</h2>
               <div class=" text-center tomorrow-data pt-5">
                <p class=" my-3 d-block"><img src="https:${forecastday[1].day.condition.icon}" alt=""></p>
                <h4 class="text-white fw-bold">${forecastday[1].day.maxtemp_c}<sup>o</sup>C</h4>
                <span class="text-white-50">${forecastday[1].day.mintemp_c}<sup>o</sup>C</span>
                <span class="text-info d-block my-4">${forecastday[1].day.condition.text}</span>
               </div>
              </div>
              <div class="col-md-4  after-tomorrow">
                <h2 class="text-center fs-6">${weekdays[new Date(forecastday[2].date).getDay()]}</h2>
                <div class=" text-center tomorrow-data pt-5">
                 <p class=" my-3 d-block"><img src="https:${forecastday[2].day.condition.icon}" alt=""></p>
                 <h4 class="text-white fw-bold">${forecastday[2].day.maxtemp_c}<sup>o</sup>C</h4>
                 <span class="text-white-50">${forecastday[2].day.mintemp_c}<sup>o</sup>C</span>
                 <span class="text-info d-block my-4">${forecastday[1].day.condition.text}</span>
                </div>
              </div>`            
document.getElementById("data").innerHTML=forecast;
}
