var todaysDate = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").html(todaysDate);

$(document).ready(function(){

        $(".saveBtn").on("click", function(){
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

            localStorage.setItem( time, text);
        })
    

    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour12 .description").val(localStorage.getItem("hour11"));
    $("#hour13 .description").val(localStorage.getItem("hour12"));
    $("#hour14 .description").val(localStorage.getItem("hour13"));
    $("#hour15 .description").val(localStorage.getItem("hour14"));
    $("#hour16 .description").val(localStorage.getItem("hour15"));
    $("#hour17 .description").val(localStorage.getItem("hour16"));
    $("#hour18 .description").val(localStorage.getItem("hour17"));


})

    
        
