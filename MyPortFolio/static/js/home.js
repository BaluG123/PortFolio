function GetRandomColor() {
    var letters='0123456789ABCDEF';
    var color="#";
    for (var i=0;i<6; i++){
        var r=Math.floor(Math.random()*16)
        color=color+letters[r]
    }
    return color;
}

function changecolor() {
    var balu1=document.querySelector('#balu1')
    balu1.style.color=GetRandomColor();
}
setInterval(changecolor,1000)