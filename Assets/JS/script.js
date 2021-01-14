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

$(".saveBtn").on("click", function (event) {
    event.preventDefault;
    var textId = $(this).attr("data-hour");
    var textValue = $("#" + textId).val();
    localStorage.setItem("btn" + textId, textValue);
})

displayToDO();
function displayToDO() {
    for (let index = 0; index <9; index++) {
        var textid = (9 + index);    
        $("#" + textid).val(localStorage.getItem("btn" + textid));
        
    }
}
