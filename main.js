function openNav(){
    document.getElementById("mySidepanel").style.width = "230px";
}

function closeNav(){
    document.getElementById("mySidepanel").style.width = "0";
}

var acc = document.getElementsByClassName("accordion");
var i;
for(i = 0; i< acc.length; i++){
    acc[i].addEventListener("click", function(){
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block"){
            panel.style.display = "none"
        }else{panel.style.display = "block";}
        if(panel.style.maxHeight){
            panel.style.maxHeight = null
        }else{
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

