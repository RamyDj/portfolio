document.querySelector("form").addEventListener("submit", function (meteo) {
    meteo.preventDefault();
    let container = document.querySelector(".container");
    let ville = document.querySelector("#city-input").value;
    let url = `https://www.prevision-meteo.ch/services/json/${ville}`;
    fetch(url).then((response) =>
      response.json().then((data) => {

        console.log(data);

        container.innerHTML += `
        <div class="card">
        <div class="box_info">
          <h3 class="info">Température</h3>
          <img src="img_api/temperature.png" alt="">
          <span id="temperature_actuel">${data.current_condition.tmp}°C</span>
        </div></div>

        <div class="card">
        <div class="box_info">
          <h3 class="info">Condition</h3>
          <img src="${data.current_condition.icon}" alt="">
          <span id="condition">${data.current_condition.condition}</span>
        </div></div>

        <div class="card">
        <div class="box_info">
          <h3 class="info">Humidité</h3>
          <img src="img_api/humidite.png" alt="">
          <span id="humidity">${data.current_condition.humidity}%</span>
        </div></div>

        <div class="card">
        <div class="box_info">
          <h3 class="info">Lever</h3>
          <img src="img_api/coucher-de-soleil.png" alt="">
          <span id="sunrise">${data.city_info.sunrise}</span>
        </div></div>

        <div class="card">
        <div class="box_info">
          <h3 class="info">Coucher</h3>
          <img src="img_api/coucher-de-soleil (1).png" alt="">
          <span id="sunset">${data.city_info.sunset}</span>
        </div></div>

        <div class="card">
        <div class="box_info">
          <h3 class="info">Vitesse</h3>
          <img src="img_api/vent.png" alt="">
          <span id="speed">${data.current_condition.wnd_spd}Km/h</span>
        </div></div>

        <div class="card">
        <div class="box_info">
          <h3 class="info">Direction</h3>
          <img src="img_api/direction-du-vent.png" alt="">
          <span id="Direction">${data.current_condition.wnd_dir}</span>
        </div></div>

        <div class="card">
        <div class="box_info">
          <h3 class="info">Altitude</h3>
          <img src="img_api/montagne.png" alt="">
          <span id="Altitude">${data.city_info.elevation}m</span>
        </div></div>
          ` ;

        
      })
    );
})




let menu = document.querySelector(".menu");
let spanTop = document.querySelector("#top");
let spanMid = document.querySelector("#mid");
let spanBot = document.querySelector("#bot");
let links = document.querySelector(".links")

menu.addEventListener("click", menuburger);

function menuburger() {

    if (menu.classList[1] != "open"){

        menu.classList.add("open");
        spanMid.style.display = "none";
        spanBot.style.marginTop = "-5px";
        spanBot.style.transform = "rotate(45deg)";
        spanTop.style.transform = "rotate(-45deg)";
        links.style.display = "flex";

    }

    else {

        spanMid.style.display = "block";
        spanBot.style.marginTop = "5px";
        spanBot.style.transform = "rotate(0deg)";
        spanTop.style.transform = "rotate(0deg)";
        menu.classList.remove("open");
        links.style.removeProperty("display");
    }
}