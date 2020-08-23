var akanMaleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Yaw", "kofi", "Kwame"]
var akanFemaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]

function getAkanName() {
    var gender = document.getElementById("gender").value;
    var ydate = document.getElementById("date").value;

    var year = parseInt(ydate.substr(0, 5));
    var DD = parseInt(ydate.substr(8, 9));
    var MM = parseInt(ydate.substr(5, 6));
    var YY = parseInt(ydate.substr(1, 3));
    var CC = parseInt(ydate.substr(0, 2));
    var d = parseInt((CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7)

    var date = new Date(year, MM - 1, DD);
    if (date > new Date()) {
        alert("Invalid date; you have entered a future date")
    } else {
        if (gender === "male") {
            alert("Your Akan name is " + akanMaleNames[d])
        } else if (gender === "female") {
            alert("Your Akan name is " + akanFemaleNames[d])
        }

    }
}
