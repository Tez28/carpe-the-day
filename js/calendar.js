// moment.js variable
var currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');

// hour and text variables
var eightA = $("#8hr");
var nineA = $("#9hr");
var tenA = $("#10hr");
var elevenA = $("#11hr");
var twelveP = $("#12hr");
var oneP = $("#1hr");
var twoP = $("#2hr");
var threeP = $("#3hr");
var fourP = $("#4hr");
var fiveP = $("#5hr");
var time = moment().hour();
var userTask;
var timeSpan;

// initiates date and time
var date = setInterval(function() {
    var timeNow = moment();
    $('#currentDay').html(timeNow.format('MMMM Do YYYY, h:mm:ss a')) + '' 
    .substring(0,3).toUpperCase();
},100);


// function tracks tasks and times throughout day

function runCal(){
    $(".description").each(function() {
        var timeRun = parseInt($(this).attr("id"));
        console.log(timeRun);
        time = parseInt(time);
        // sets perameters for what state task is in past future present
        if (time > timeRun ) {
            $(this).addClass("past");
            console.log(this)
        } else if (time < timeRun) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present")
        }
    });
}
// function sets defines local storage
function startPage() {
    var time8 = JSON.parse(localStorage.getItem("8:00 am"));
    eightA.val(time8);
    console.log()

    var time9 = JSON.parse(localStorage.getItem("9:00 am"));
    nineA.val(time9);

    var time10 = JSON.parse(localStorage.getItem("10:00 am"));
    tenA.val(time10);

    var time11 = JSON.parse(localStorage.getItem("11:00 am"));
    elevenA.val(time11);

    var time12 = JSON.parse(localStorage.getItem("12:00 pm"));
    twelveP.val(time12);

    var time1 = JSON.parse(localStorage.getItem("1:00 pm"));
    oneP.val(time1);

    var time2 = JSON.parse(localStorage.getItem("2:00 pm"));
    twoP.val(time2);

    var time3 = JSON.parse(localStorage.getItem("3:00 pm"));
    threeP.val(time3);

    var time4 = JSON.parse(localStorage.getItem("4:00 pm"));
    fourP.val(time4);

    var time5 = JSON.parse(localStorage.getItem("5:00 pm"));
    fiveP.val(time5);
}


$(document).ready(function(){
    runCal();
    startPage();

    //local storage buttons functionality
    $(".saveBtn").on("click", function(){
        userTask = $(this).siblings(".description").val().trim();
        timeSpan = $(this).siblings(".hour").text().trim();
        localStorage.setItem(timeSpan, JSON.stringify(userTask));
    })
})