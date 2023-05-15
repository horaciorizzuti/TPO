const getDataTime = async ()=>{
    let address = 'https://api.openweathermap.org/data/2.5/weather?lat=-34.6083&lon=-58.3719&appid=824ca28380d4860331856b756ed4d7a4&units=metric';
    let petition = await fetch(address); 
    let resultado = await petition.json(); 
    let timeC = parseInt(resultado.main.temp)
    let icon = resultado.weather[0].icon
    let txt = "Hoy es un día ideal para un Ristretto"
    let temp = `${txt}  -  Temperatura Amba ${timeC}°C `
    let dirIcon = `http://openweathermap.org/img/w/${icon}.png`
    //let dirIcon = `https://openweathermap.org/img/wn/${icon}.png`;
    
    let time = 100
    setTimeout(() => {
    document.querySelector("#weather").innerHTML = temp;},time);

    const img = document.createElement("img");
    img.src = dirIcon;
    img.alt = "clima";
    img.width = 45;

    setTimeout(() => {
    document.querySelector("#weather").appendChild(img);},time);
}

getDataTime()
