var sidenav = document.getElementById("sidenav")
var menuIcon = document.getElementById("menu-icon")
var close = document.getElementById("close-nav")

menuIcon.addEventListener("click",function(){
    sidenav.style.right = "0%";
})

close.addEventListener("click",function(){
    sidenav.style.right = "-50%";
})


var search = document.getElementById("search")
var cont = document.getElementById("container")
var ProdList = cont.querySelectorAll("div")


search.addEventListener("keyup",function(event){
    var Value = event.target.value.toUpperCase();

    for(let i=0;i<ProdList.length;i++){
        var productName = ProdList[i].querySelector("h1").textContent.toUpperCase();

        if(productName.includes(Value)){
            ProdList[i].style.display = "block"
        }
        
        else{
            ProdList[i].style.display = "none"
        }
    }
})
