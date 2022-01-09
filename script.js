var todaysDate = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").html(todaysDate);

$(document).ready({

})

function tracker(){
    var currentTime = moment().hour();

}

$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10, description").val(localStorage.getItem("#hour-10"));
