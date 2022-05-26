var a = 0;
function touxiang(){
    if(a == 0){
        document.getElementById('kai').style.display = 'block';
        document.getElementById('kai1').style.display = 'none'
        b = 0;
    }
    if(a == 1){
        document.getElementById('kai').style.display = 'none'
    }
    a++;
    if(a == 2){
        a = 0;
    }
}
var b = 0;
function yiwen(){
    if(b == 0){
        document.getElementById('kai1').style.display = 'block';
        document.getElementById('kai').style.display = 'none';
        a = 0;
    }
    if(b == 1){
        document.getElementById('kai1').style.display = 'none'
    }
    b++;
    if(b == 2){
        b = 0;
    }
}

function shouye(){
    document.getElementById('guan').style.display = 'block';
    document.getElementById('guan1').style.display = 'none';
    document.getElementById('cr').style.color = '#1967d2';
    document.getElementById('ys').style.backgroundColor = '#e8f0fe';
    document.getElementById('cr1').style.color = 'black';
    document.getElementById('ys1').style.backgroundColor = 'white';
}
function geren(){
    document.getElementById('guan').style.display = 'none';
    document.getElementById('guan1').style.display = 'block';
    document.getElementById('cr1').style.color = '#1967d2';
    document.getElementById('ys1').style.backgroundColor = '#e8f0fe';
    document.getElementById('cr').style.color = 'black';
    document.getElementById('ys').style.backgroundColor = 'white';
}