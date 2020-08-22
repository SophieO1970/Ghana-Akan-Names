var akanMaleNames =["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Yaw", "kofi", "Kwame"]
var akanFemaleNames =["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]

function akanName() {
    var gender = document.getElementById("gender").value;
    var ydate = document.getElementById("ydate").value;

    var DD = parseInt(ydate.substr(8, 9));
    var MM = parseInt(ydate.substr(5, 6));
    var YY = parseInt(ydate.substr(1, 3));
}
