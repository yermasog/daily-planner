var date = moment().format("MMM Do YYYY");
$("#currentDay").append(date);

$(".saveBtn").on("click", function(){
    var text = $(".input").val();

    localStorage.setItem("input", text);
    
})



//$(this).prev().val()


