function showUser(str){
    if(str !==""){
        $.ajax({
            url: "/",
            method:"POST",
            contentType: "application/json",
            data: JSON.stringify({choice: str}),
            success: function(result){
                $("#txt-hint").html(result.html);
            }
        })
    }
}

/*function myFunc(){
    document.getElementById("hel").innerHTML="Sam";
}*/

/*function showUser(){
    if(selectElement.value==1){

    } 
}*/