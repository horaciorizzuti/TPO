
const getDataTime = async ()=>{
    let address = 'http://api.weatherunlocked.com/api/current/-34.6083,-58.3719?app_id=baca5623&app_key=19dc9d6e97fe3b64cdbac262094b660a';
    let petition = await fetch(address); 
    let resultado = await petition.json(); 
    let timeC = resultado.temp_c
    let icon = resultado.wx_icon
    let txt = "Hoy es un día ideal para un Ristretto"
    let temp = `${txt}  -  Temperatura Amba ${timeC}°C `
    let dirIcon = `/img/iconnTime/set/${icon}`
    let dirIconPng = dirIcon.replace(".gif",".png")


    //console.log(resultado)
    // console.log(dirIcon)
    // console.log(temp)
    // console.log(timeC)
    // console.log(icon)

    document.querySelector("#weather").innerHTML = temp;
    const img = document.createElement("img");
    img.src = dirIconPng;
    img.alt = "clima";
    img.width = 35;
    document.querySelector("#weather").appendChild(img);
}

getDataTime()




// //-------


// funciona OK GBA
// https://api.openweathermap.org/data/2.5/weather?lat=-34.6083&lon=-58.3719&appid=824ca28380d4860331856b756ed4d7a4

// funciona OK GBA - tiene iconos
// http://api.weatherunlocked.com/api/current/-34.6083,-58.3719?app_id=baca5623&app_key=19dc9d6e97fe3b64cdbac262094b660a


// GBA En decimal	-34.6083°, -58.3719°
// CABA En decimal	-34.599722°, -58.381944°


// api.openweathermap.org
// Key 824ca28380d4860331856b756ed4d7a4


// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

// http://api.weatherunlocked.com/api/forecast/40.7,-74?lang=it&app_id=APP_ID&app_key=APP_KEY



// http://api.weatherunlocked.com

// Horacio's App
// App ID
// baca5623
// Key
// 19dc9d6e97fe3b64cdbac262094b660a

// http://api.weatherunlocked.com/api/current/51.50,-0.12?app_id={APP_ID}&app_key={APP_KEY}


// funciona OK
// http://api.weatherunlocked.com/api/current/-34.6083,-58.3719?app_id=baca5623&app_key=19dc9d6e97fe3b64cdbac262094b660a

