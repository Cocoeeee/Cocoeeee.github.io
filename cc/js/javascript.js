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