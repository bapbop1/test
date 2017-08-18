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
document.getElementById("default").click();
/*--------------------------------------------------------------------------------------------*/
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
document.getElementById("defaultOpen").click();
/*--------------------------------------------------------------------------------------------*/
/*function openCmt(evt, Name) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent3");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink3");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" activetab3", "");
    }
    document.getElementById(Name).style.display = "block";
    evt.currentTarget.className += " activetab3";

}
document.getElementById("defaultOpen3").click();*/
/*--------------------------------------------------------------------------------------------*/
$(document).ready(function(){
    jQuery(function($) {
        if ($(window).width() > 769) {
            $('.navbar .dropdown > a').click(function() {
                location.href = this.href;
            });
        }
    });
    $(function() {
        $('#navbar li:has(ul)').doubleTapToGo();
    });
});

