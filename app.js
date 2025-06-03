let search_btn = document.getElementById("btn")
let validation_h2 = document.querySelector("#validation h2")
let city = document.getElementById("city");
let contry_name = document.getElementById("contry_name")
let temp = document.querySelector("#temp h2")
let humidity = document.getElementById("hmidity-percent")
let wind = document.getElementById("wind-speed")
let container = document.getElementById("container")
let loader = document.getElementById("loader")

search_btn.addEventListener("click", function () {
    container.style.display = "none"
    loader.style.display = "block"

    let text_bar = document.getElementById("text").value.trim()
    console.log(validation_h2)

    if (text_bar === "") {
        validation_h2.textContent = "Enter Valid City Name"
        loader.style.display = "none"
        return;
    }
    else if (/[^a-zA-Z\s]/.test(text_bar)) {
        validation_h2.textContent = "Only letters are allowed"
        loader.style.display = "none"
        return;
    }

    fetch(`http://api.weatherapi.com/v1/current.json?key=cee0ed6801054429819191809252805&q=${text_bar}&aqi=yes`)
        .then(response => response.json())
        .then(data => {
            console.log(data)

            setTimeout(() => {
                function weather() {
                    container.style.display = "block"
                    loader.style.display = "none"
                    city.textContent = data.location.name
                    contry_name.textContent = data.location.country
                    temp.textContent = data.current.temp_c
                    humidity.textContent = data.current.humidity
                    wind.textContent = data.current.wind_kph
                }
                weather()

            }, 2000)
        })
})