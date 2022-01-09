var todaysDate = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").html(todaysDate);


//this only runs if the page is fully loaded
$(document).ready(function(){
        $(".saveBtn").on("click", function(){
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

            localStorage.setItem( time, text);
        })

    function timeOfDay(){
        var currentTime = moment().hour();

        console.log(currentTime);

        //This function loops through each row and color codes them accroding to the currentTime

        $(".time-block").each(function(){
            var rowTime = parseInt($(this).attr("id").split("hour")[1]);
            console.log(rowTime);

            if(currentTime>rowTime){
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past")
            }else if(currentTime<rowTime){
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");

            }else{
                $(this).removeClass("future");
                $(this).removeClass("past");
                $(this).addClass("present");
            }
            
            
            
           
        })


    }
    
    //These allows us to save and reload the code from the local storage
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour12 .description").val(localStorage.getItem("hour11"));
    $("#hour13 .description").val(localStorage.getItem("hour12"));
    $("#hour14 .description").val(localStorage.getItem("hour13"));
    $("#hour15 .description").val(localStorage.getItem("hour14"));
    $("#hour16 .description").val(localStorage.getItem("hour15"));
    $("#hour17 .description").val(localStorage.getItem("hour16"));
    $("#hour18 .description").val(localStorage.getItem("hour17"));

    timeOfDay();


})

    
        
