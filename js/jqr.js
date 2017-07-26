function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" activetab2", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " activetab2";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("default").click();
function opensile(evt, Name) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent2");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" activetab", "");
    }
    document.getElementById(Name).style.display = "block";
    evt.currentTarget.className += " activetab";

}

// Get the element with id="defaultOpen" and click on it

document.getElementById("defaultOpen").click();
