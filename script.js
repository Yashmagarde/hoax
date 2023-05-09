
var icon = document.querySelector("#menu")
var flag = 1
menu.addEventListener("click", function () {
    if (flag == 1) {
        document.querySelector("#top").style.transform = "rotate(40deg)"
        document.querySelector("#btm").style.transform = "rotate(-40deg)"
        document.querySelector("#mid").style.opacity = "0"
        flag = 0
    } else {
        document.querySelector("#top").style.transform = "rotate(0deg)"
        document.querySelector("#btm").style.transform = "rotate(0deg)"
        document.querySelector("#mid").style.opacity = "1"
        flag = 1 
    }

})