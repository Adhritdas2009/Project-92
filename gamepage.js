function send(){
    var sum = localStorage.getItem("input3");
    document.getElementById("label").innerHTML=sum;
}

function check(){
    if (btncheck==input4){
        document.getElementById("label2").innerHTML="Correct"
    }
    else{
        document.getElementById("label2").innerHTML="Wrong"
    }
}
