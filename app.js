const weatherApi ={
    key:"ff4ae31fb235dbf3227b0f7ae6ec733f",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather", 
    
}

const searchInputBox = document.getElementById('input-box');

//event listener function on keypress


searchInputBox.addEventListener('keypress',(event)=>{
    if(event.which==13)
    {
    console.log(searchInputBox.value);
    getWeatherReport(searchInputBox.value);
    document.querySelector('.weather-body').style.display="block";
    }
});




//get weather report

function getWeatherReport(city){
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather =>{
        return weather.json();
    }).then(showWeatherReport);
}





//show weather report

function showWeatherReport(weather){
console.log(weather);
let city=document.getElementById("city");
city.innerText= `${weather.name},${weather.sys.country}`;
let temperature=document.getElementById('temp');
temperature.innerHTML=`${Math.round(weather.main.temp)}&deg;c`;

let minMaxTemp=document.getElementById('min-max');
minMaxTemp.innerHTML=`${Math.floor(weather.main.temp_min)}&deg;c (min)/${Math.ceil(weather.main.temp_max)}&deg;c (max)`;

let weatherType=document.getElementById('weather');
weatherType.innerText=`${weather.weather[0].main}`;


let date=document.getElementById('date');
let todayDate=new Date();
date.innerText=dateManage(todayDate);


if(weatherType.textContent == 'Clear') {
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1503453363464-743ee9ce1584?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNsZWFyJTIwc2t5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
    
} else if(weatherType.textContent == 'Clouds') {

    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1534088568595-a066f410bcda?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNsb3VkfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
    
} else if(weatherType.textContent == 'Haze') {

    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1533757704860-384affeed946?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGF6ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
    
}     else if(weatherType.textContent == 'Rain') {
    
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1496034663057-6245f11be793?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHJhaW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
    
} else if(weatherType.textContent == 'Snow') {
    
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1414541944151-2f3ec1cfd87d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNub3d8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";

} 
}



//date manage
function dateManage(dateArg){
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let months=["January","Feburary","March","April","May","June","July","August","September","October","November","December"];
    let year=dateArg.getFullYear();
    let month=months[dateArg.getMonth()];
    let date=dateArg.getDate();
    let day=days[dateArg.getDay()];


    return `${date} ${month} (${day},${year})`;

}

//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}