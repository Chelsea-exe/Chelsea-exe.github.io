$(document).ready(function () {
    $("#graphic").click(function() {
        window.open("https://magicamulet.carbonmade.com/", "_blank");
        event.preventDefault();
        console.log("nav graphic link pressed");
    });
    $("#email-btn").click(function() {
        event.preventDefault();
        window.open("mailto:c.sjackson726@gmail.com", "_blank");
        console.log("email button was pressed");
    });
    $("#github-btn").click(function() {
        window.open("https://github.com/Chelsea-exe", "_blank");
        console.log("github btn");
    });
    $("#linkedin-btn").click(function() {
        window.open("https://www.linkedin.com/in/chelsea-s-jackson/", "_blank");
        console.log("linkedin btn");
    });
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