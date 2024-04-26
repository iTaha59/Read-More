function readMore(){
    document.getElementById("s1").style.display = "inline"
    document.getElementById("a1").style.display = "none"
    document.getElementById("a2").style.display = "inline"
}

function readMore2(){
    document.getElementById("s2").style.display = "inline"
    document.getElementById("a2").style.display = "none"
    document.getElementById("a3").style.display = "inline"
}

function readLess(){
    document.getElementById("s2").style.display = "none"
    document.getElementById("a3").style.display = "none"
    document.getElementById("a4").style.display = "inline"
}

function readLess2(){
    document.getElementById("s1").style.display = "none"
    document.getElementById("a1").style.display = "inline"
    document.getElementById("a4").style.display = "none"
}