var date = moment().format("MMM Do YYYY, h:mm a");
$("#currentDay").append(date);

var input1 = $("#9")
// var movie = $(this).attr("data-name");

$("#btn1").on("click", function(event){
    event.preventDefault;
    var textOne = $("#9").val();
    localStorage.setItem("btn1", textOne); 
})
input1 = localStorage.getItem("btn1");



// var currentData = $()
// var saveBtn = $(".saveBtn");

// for (let index = 0; index < saveBtn.length; index++) {
//     $(saveBtn[index]).on("click", function() {
//         var thisDataHour = $(this).attr("data-hour");
//         var saveToDo = $("#" + thisDataHour).val();

//         var toDoList = {
//             time: thisDataHour,
//             toDo: saveToDo
//         }
//         currentData.push(toDoList);
//         localStorage.setItem("Schedule", JSON.stringify(currentData))
//     })
    
// }



var toDoItems = $(".textarea")

for (let index = 0; index < toDoItems.length; index++) {
    var timeNow = parseInt($(toDoItems[index]).attr("id"));
    var compareHour = parseInt(moment().format("HH"));

        if(timeNow<compareHour) {
            $(toDoItems[index]).addClass("past");
        }else if(timeNow>compareHour) {
            ($(toDoItems[index]).addClass("future"))
        }else ($(toDoItems[index]).addClass("present"))
    
    
}


