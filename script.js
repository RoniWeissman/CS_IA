$(document).ready(function() {

    hideTables();

    $('#zipButton').on('click', function () {
        hideTables();
        var zipCode = $('#inputZip').val();
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/forecast?units=imperial&zip=" + zipCode + "&APPID=ae4a7ebbd730a901a8942dad8bf1beb5",
            type: 'GET',
            crossDomain: true,
            dataType: 'json',
            success: function(result) {
                console.log(result);
                displayWeather(result);
                clothingStyle(result);
            },
            error: function() { alert('The zip code you listed is not viable. Please try again.'); }
        });
    });
});


function hideTables() {
    document.getElementById("75MaleWork").style.display = "none";
    document.getElementById("50MaleWork").style.display = "none";
    document.getElementById("-30MaleWork").style.display = "none";
    document.getElementById("75MaleLeisure").style.display = "none";
    document.getElementById("50MaleLeisure").style.display = "none";
    document.getElementById("20MaleLeisure").style.display = "none";
    document.getElementById("75FemaleWork").style.display = "none";
    document.getElementById("50FemaleWork").style.display = "none";
    document.getElementById("20FemaleWork").style.display = "none";
    document.getElementById("75FemaleLeisure").style.display = "none";
    document.getElementById("50FemaleLeisure").style.display = "none";
    document.getElementById("20FemaleLeisure").style.display = "none";
    document.getElementById("75FemaleFormal").style.display = "none";
    document.getElementById("50FemaleFormal").style.display = "none";
    document.getElementById("20FemaleFormal").style.display = "none";
    document.getElementById("MaleFormal").style.display = "none";
}


function displayWeather(weather) {
    console.log(weather);
    console.log(weather.city.name);
    console.log(weather.list["0"].clouds.all);
    console.log(weather.list["0"].weather["0"].main);

    $('#table').empty();

    $('#table').append(
        '<tr>',
        '<td id="cityName">Weather in ' + weather.city.name + ', USA</td></tr>');
    document.getElementById("cityName").style.backgroundColor = "lightgray";



    if(weather.list["0"].weather["0"].main == "Snow") {
        //snowing
        $('#table').append(
            '<tr>',
            $('<img>',{id:'cloudy',src:'https://cilp-art.net/wp-content/uploads/2018/01/clipart-weather-symbols-6tpoogg8c.jpg'}));
        $('#cloudy').width(75);
        $('#cloudy').height(50);
    }

    else if(weather.list["0"].weather["0"].main == "Rain") {
        //snowing
        $('#table').append(
            '<tr>',
            $('<img>',{id:'cloudy',src:'https://cilp-art.net/wp-content/uploads/2018/01/clipart-weather-symbols-pi5k8pbi9.jpg'}));
        $('#cloudy').width(75);
        $('#cloudy').height(50);
    }

    else if(weather.list["0"].clouds.all >= 90) {
        //completely cloudy
        $('#table').append(
            '<tr>',
            $('<img>',{id:'cloudy',src:'http://moziru.com/images/sky-clipart-cloudy-weather-11.png'}));
        $('#cloudy').width(75);
        $('#cloudy').height(50);
    }
    else if(weather.list["0"].clouds.all < 90 && weather.list["0"].clouds.all >= 10) {
        //partially cloudy
        $('#table').append(
            '<tr>',
            $('<img>',{id:'cloudy',src:'https://cilp-art.net/wp-content/uploads/2018/01/clipart-weather-symbols-weather-clip-art-weather-symbols-clip-art-17459.jpg'}));
        $('#cloudy').width(75);
        $('#cloudy').height(50);
    }
    else if(weather.list["0"].clouds.all < 10) {
        //sunny
        $('#table').append(
            '<tr>',
            $('<img>',{id:'cloudy',src:'http://images.clipartpanda.com/weather-clip-art-weather_symbols_clip_art_17458.jpg'}));
        $('#cloudy').width(75);
        $('#cloudy').height(50);

    }

    $('#table').append(
        '<tr><td id="currentW">' + weather.list[0].main.temp + ' °F</td></tr>',
        '<tr><td>' + weather.list["0"].weather["0"].description + '</td></tr>',
        '<tr><td id="hTemp">High: ' + weather.list[0].main.temp_max + ' °F</td></tr>',
        '<tr><td>Low: ' + weather.list[0].main.temp_min + ' °F</td></tr>',
        '<tr><td id="humidity">Humidity: ' + weather.list[0].main.humidity + ' %</td></tr>');

    document.getElementById("currentW").style.backgroundColor = "lightgray";
    document.getElementById("hTemp").style.backgroundColor = "lightgray";
    document.getElementById("humidity").style.backgroundColor = "lightgray";

}


function clothingStyle(weather) {

    console.log(document.getElementById("style").value);

    if (document.getElementById("gender").value === "1") {
        //male

        if (document.getElementById("style").value === "1") {
            //work
            if (weather.list["0"].main.temp_min >= 75) {
                //75MaleWork
                document.getElementById("75MaleWork").style.display = "inline";


            }
            if (weather.list["0"].main.temp_min < 75 && weather.list["0"].main.temp_min >= 50) {
                //50MaleWork
                document.getElementById("50MaleWork").style.display = "inline";

            }
            if (weather.list["0"].main.temp_min < 50 && weather.list["0"].main.temp_min >= -30) {
                //-30MaleWork
                document.getElementById("-30MaleWork").style.display = "inline";

            }

        }

        if (document.getElementById("style").value === "2") {
            //leisure
            if (weather.list["0"].main.temp_min >= 75) {
                //75MaleLeisure
                document.getElementById("75MaleLeisure").style.display = "inline";

            }
            if (weather.list["0"].main.temp_min < 75 && weather.list["0"].main.temp_min >= 50) {
                //50MaleLeisure
                document.getElementById("50MaleLeisure").style.display = "inline";

            }
            if (weather.list["0"].main.temp_min < 50 && weather.list["0"].main.temp_min >= 20) {
                document.getElementById("20MaleLeisure").style.display = "inline";

            }

        }

        if (document.getElementById("style").value === "3") {
            //formal
            document.getElementById("MaleFormal").style.display = "inline";

        }
    }


    if (document.getElementById("gender").value === "2") {
        //female

        if (document.getElementById("style").value === "1") {
            //work
            if (weather.list["0"].main.temp_min >= 75) {
                document.getElementById("75FemaleWork").style.display = "inline";

            }
            if (weather.list["0"].main.temp_min < 75 && weather.list["0"].main.temp_min >= 50) {
                document.getElementById("50FemaleWork").style.display = "inline";

            }
            if (weather.list["0"].main.temp_min < 50 && weather.list["0"].main.temp_min >= 20) {
                document.getElementById("20FemaleWork").style.display = "inline";

            }

        }




        //leisure and formal don't work.


        if (document.getElementById("style").value === "2") {
            //leisure

            if (weather.list["0"].main.temp_min >= 75) {
                document.getElementById("75FemaleLeisure").style.display = "inline";

            }
            if (weather.list["0"].main.temp_min < 75 && weather.list["0"].main.temp_min >= 50) {
                document.getElementById("50FemaleLeisure").style.display = "inline";
                console.log("Hello");


            }
            if (weather.list["0"].main.temp_min < 50 && weather.list["0"].main.temp_min >= 20) {
                document.getElementById("20FemaleLeisure").style.display = "inline";


            }

        }

        if (document.getElementById("style").value === "3") {
            //formal

            if (weather.list["0"].main.temp_min >= 75) {
                document.getElementById("75FemaleFormal").style.display = "inline";


            }
            if (weather.list["0"].main.temp_min < 75 && weather.list["0"].main.temp_min >= 50) {
                document.getElementById("50FemaleFormal").style.display = "inline";


            }
            if (weather.list["0"].main.temp_min < 50 && weather.list["0"].main.temp_min >= 20) {
                document.getElementById("20FemaleFormal").style.display = "inline";

            }

        }
    }
    if (weather.list["0"].weather["0"].main === 'Rain') {
        $('#clothing').append("Bring a rain jacket or umbrella.");
    }
    if (weather.list["0"].weather["0"].main === 'Snow') {
        $('#clothing').append("Bring a parka, it's supposed to snow!");
    }
}
