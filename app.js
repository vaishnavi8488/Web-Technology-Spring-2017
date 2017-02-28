function displayWeather() {
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;

    if (city == "" && state == " ") {

        document.getElementById("result").innerHTML = "Please Enter state and city";
    }
    var xmlhttp = new XMLHttpRequest();
    var url = "https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text=" + "'" + city + "," + state + "'" + ")&format=json&env=store://datatables.org/alltableswithkeys";
    xmlhttp.open("get", url, true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            var w = JSON.parse(xmlhttp.responseText);
            document.getElementById("result").innerHTML = "Current Temperature is " + w.query.results.channel.item.condition.temp + " " +
                "<br/>" + "Looks: " + w.query.results.channel.item.condition.text + "" + "<br/>" + "Sunrise:" + w.query.results.channel.astronomy.sunrise + "" +
                "<br/>" + "Sunset: " + w.query.results.channel.astronomy.sunset;

        }
    };
}


