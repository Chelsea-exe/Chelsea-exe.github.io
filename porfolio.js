$(document).ready(function() {
    $("#graphic").click(function() {
        event.preventDefault();
        window.open("https://magicamulet.carbonmade.com/", "_blank");
        console.log("graphic nav was pressed");
    });
    $("#trivia-app").click(function() {
        window.open("https://90strivia.netlify.app/", "_blank");
        console.log("90's application window tab");
    });
    $("#trivia-github").click(function() {
        window.open("https://github.com/Chelsea-exe/unit-4-game", "_blank");
        console.log("90's github tab");
    });
    $("#gifs-github").click(function() {
        window.open("https://github.com/Chelsea-exe/GifTastic", "_blank");
        console.log("giphy github tab");
    });
    $("#gifs-app").click(function() {
        window.open("https://womengiphy.netlify.app/", "_blank");
        console.log("giphy app tab");
    });
    $("#crystal-github").click(function() {
        window.open("https://github.com/Chelsea-exe/Crystal-Collector-Game", "_blank");
        console.log("crystal github tab");
    });
    $("#crystal-app").click(function() {
        window.open("https://crystalcollector.netlify.app", "_blank");
        console.log("crystal app tab");
    });
    $("#negotiator-github").click(function() {
        window.open("https://github.com/Chelsea-exe/The-Negotiator", "_blank");
        console.log("negotiator github tab");
    });
    $("#negotiator-app").click(function() {
        window.open("http://thenegotiator.herokuapp.com/", "_blank");
        console.log("negotiator app tab");
    });
    $("#software-github").click(function() {
        window.open("https://github.com/Chelsea-exe/Software-Engineer-Game", "_blank");
        console.log("software github tab");
    });
    $("#software-app").click(function() {
        window.open("https://gametestapp1.herokuapp.com/");
        console.log("software app tab");
    });
    $("#covid-app").click(function() {
        window.open("https://covid19-world-tracking.netlify.app/", "_blank");
    })
    $("#covid-github").click(function() {
        window.open("https://github.com/Chelsea-exe/Corona-tracker", "_blank");
    })
    $("#budget-github").click(function() {
        window.open("https://github.com/Chelsea-exe/budget-app", "_blank");
    })
    $("#budget-app").click(function() {
        window.open("http://upperclassman.netlify.app/", "_blank");
    })
    $("#email").click(function() {
        event.preventDefault();
        window.open("mailto:c.sjackson726@gmail.com", "_blank");
    });
    $("#github").click(function() {
        // event.preventDefault();
        window.open("https://github.com/Chelsea-exe", "_blank");
    });
    $("#linkedin").click(function() {
        window.open("https://www.linkedin.com/in/chelsea-s-jackson/", "_blank");
    });

})