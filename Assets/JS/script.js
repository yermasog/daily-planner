var date = moment().format("MMM Do YYYY, h:mm a");
$("#currentDay").append(date);

var toDoItems = $(".textarea")
for (let index = 0; index < toDoItems.length; index++) {
    var timeNow = parseInt($(toDoItems[index]).attr("id"));
    var compareHour = parseInt(moment().format("HH"));

    if (timeNow < compareHour) {
        $(toDoItems[index]).addClass("past");
    } else if (timeNow > compareHour) {
        ($(toDoItems[index]).addClass("future"))
    } else ($(toDoItems[index]).addClass("present"))

}

$("#btn9").on("click", function (event) {
    event.preventDefault;
    var text9 = $("#9").val();
    localStorage.setItem("btn9", text9);
})

$("#btn10").on("click", function (event) {
    event.preventDefault;
    var text10 = $("#10").val();
    localStorage.setItem("btn10", text10);
})

$("#btn11").on("click", function (event) {
    event.preventDefault;
    var text11 = $("#11").val();
    localStorage.setItem("btn11", text11);
})

$("#btn12").on("click", function (event) {
    event.preventDefault;
    var text12 = $("#12").val();
    localStorage.setItem("btn12", text12);
})

$("#btn13").on("click", function (event) {
    event.preventDefault;
    var text13 = $("#13").val();
    localStorage.setItem("btn13", text13);
})

$("#btn14").on("click", function (event) {
    event.preventDefault;
    var text14 = $("#14").val();
    localStorage.setItem("btn14", text14);
})

$("#btn15").on("click", function (event) {
    event.preventDefault;
    var text15 = $("#15").val();
    localStorage.setItem("btn15", text15);
})

$("#btn16").on("click", function (event) {
    event.preventDefault;
    var text16 = $("#16").val();
    localStorage.setItem("btn16", text16);
})

$("#btn17").on("click", function (event) {
    event.preventDefault;
    var text17 = $("#17").val();
    localStorage.setItem("btn17", text17);
})


displayToDO();
function displayToDO() {
    $("#9").val(localStorage.getItem("btn9"));
}

displayToDO10();
function displayToDO10() {
    $("#10").val(localStorage.getItem("btn10"));
}

displayToDO11();
function displayToDO11() {
    $("#11").val(localStorage.getItem("btn11"));
}

displayToDO12();
function displayToDO12() {
    $("#12").val(localStorage.getItem("btn12"));
}

displayToDO13();
function displayToDO13() {
    $("#13").val(localStorage.getItem("btn13"));
}

displayToDO14();
function displayToDO14() {
    $("#14").val(localStorage.getItem("btn14"));
}

displayToDO15();
function displayToDO15() {
    $("#15").val(localStorage.getItem("btn15"));
}

displayToDO16();
function displayToDO16() {
    $("#16").val(localStorage.getItem("btn16"));
}

displayToDO17();
function displayToDO17() {
    $("#17").val(localStorage.getItem("btn17"));
} 