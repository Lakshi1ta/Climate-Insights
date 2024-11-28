// let currmode="light";
// let btn=document.querySelector(".btn button")
// let body=document.querySelector("body")
// btn.addEventListener("click",()=>{
//     if(currmode ==='light'){
//         currmode='dark';
//         body.classList.add("dark");
//         body.classList.remove("light");
//     }
//     else{
//         currmode='light';
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }
// });

const bodyofD =document.querySelector('body');
const temperatureField=document.querySelector(".temprature")
const locationField=document.querySelector(".time_location p")
const dateAndTimeField=document.querySelector(".time_location span")
const conditionField=document.querySelector(".condition_p")
const searchField=document.querySelector(".search_area")
const searchBtn=document.querySelector(".search_button")
const form =document.querySelector("form");
form.addEventListener('submit', searchForLocation)
let target='new delhi';
const fetchResults=async (targetLocation) =>{
    let url= `https://api.weatherapi.com/v1/current.json?key=8eb1cacee0514255a2b51017242311&q=${targetLocation}&aqi=no`
    const res=await fetch(url)
    const data=await res.json()
    console.log(data)
    let locationName=data.location.name 
    let time=data.location.localtime
    let temp=data.current.temp_c
    let condition=data.current.condition.text
    updateDetails(temp, locationName,time ,condition)
}
function updateDetails(temp, locationName, time, condition){
    // let splitDate = time.split(' ')(0)
    // let splitTime = time.split(' ')(1)
    // let currentDay=getDayName(new Date(splitDate).getDay());
    temperatureField.innerText=temp;
    locationField.innerText=locationName;
    dateAndTimeField.innerText=time
    conditionField.innerText=condition;
    bgcolor(condition)
}
function searchForLocation(e){
    e.preventDefault()
    target=searchField.value
    fetchResults(target)
}
fetchResults(target)
function getDayName(number){
        switch(number){
            case 0:
            return 'Sunday';
            case 1:
            return 'Monday';
            case 2:
            return 'Tuesday';
            case 3:
            return 'Wednesday';
            case 4:
            return 'Thursday';
            case 5:
            return 'Friday';
            case 6:
            return 'Saturday';

    }
}
function bgcolor(condition){
    if (condition==="Sunny"){
        bodyofD.style.backgroundImage="url('/sunny.jpg')";
    }
    else if (condition==="Mist"){
        bodyofD.style.backgroundImage="url('/mist.jpg')";
    }
    else if (condition==="Partly Cloudy" || condition==="Partly cloudy"){
        bodyofD.style.backgroundImage="url('/partlyCloudy.jpg')";
    }
    else if (condition==="Overcast"){
        bodyofD.style.backgroundImage="url('/overcast.jpg')";
    }
    else if (condition==="Fog" || condition==="fog"){
        bodyofD.style.backgroundImage="url('/fog.jpg')";
    }
    else if (condition==="Thumderstorm" || condition==="Thunder Storm" || condition==="Thunder storm"){
        bodyofD.style.backgroundImage="url('/thunderstorm.jpg')";
    }
    else if (condition==="Partly Sunny" || condition==="Partly sunny"|| condition==="Mostly cloudy" || condition==="Mostly Cloudy"){
        bodyofD.style.backgroundImage="url('/partlySunny.JPG')";
    }
    else if (condition==="Patchy rain nearby" || condition==="Patchy Rain Nearby"){
        bodyofD.style.backgroundImage="url('/patchy.jpeg')";
    }
    else if (condition==="Light rain"|| condition==="light rain" ||condition==="Light rain shower" || condition==="light rain shower"){
        bodyofD.style.backgroundImage="url('/lightrain.jpg')";
        
    }
    else if (condition==="Light snow"|| condition==="light snow" ){
        bodyofD.style.backgroundImage="url('/lightsnow.jpg')";
        
    }
    else if(condition==="clear" || condition==="Clear"){
        bodyofD.style.backgroundImage="url('/clear.jpeg')";
    }
    else if (condition==="Light drizzle"|| condition==="light drizzle"){
        bodyofD.style.backgroundImage="url('/drizzle.jpeg')";
        
    }
}
