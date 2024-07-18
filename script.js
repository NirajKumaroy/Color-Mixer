function myColor(){
    var red = document.getElementById("red").value;
    var yellow = document.getElementById("yellow").value;
    var blue = document.getElementById("blue").value;
    var color = 'rgb('+ red +', '+ yellow +', '+ blue +')';
    document.body.style.backgroundColor = color
    document.getElementById('box').value = color;
}

document.getElementById('red').addEventListener('input', myColor);
document.getElementById('yellow').addEventListener('input', myColor);
document.getElementById('blue').addEventListener('input', myColor);