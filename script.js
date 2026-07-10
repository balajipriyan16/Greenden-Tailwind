var sidenav = document.getElementById("sidenav")
var menuIcon = document.getElementById("menu-icon")
var close = document.getElementById("close-nav")

menuIcon.addEventListener("click",function(){
    sidenav.style.right = "0%";
})

close.addEventListener("click",function(){
    sidenav.style.right = "-50%";
})
