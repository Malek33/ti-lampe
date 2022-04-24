var n = document.getElementById("btn-on")
var b = document.getElementById("lamp")
n.addEventListener('click', bga)
function bga(){
    document.getElementById("body").style.backgroundColor="black"
    b.src="img/on.jpg"
}

var n = document.getElementById("btn-off")
n.addEventListener('click', bgb)
function bgb(){
    document.getElementById("body").style.backgroundColor="white"
    b.src="img/off.jpg"
}

