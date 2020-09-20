//課題1&2//
var answer = prompt('この数字は正か負か')
if (answer >=0) {
    alert('正の数字です');
}else if(answer <0){
    alert('負の数字です') ;
}else{
    alert('数値を入力して下さい');
}

//課題3&4&5//
var animals=['パンダ','ライオン','キリン'];
var answer = prompt('好きな動物は何ですか');

var i =0;
while (i < animals.length) {
    if (answer ==='ライオン'){
        alert(animals[1]);
        alert(animals.indexOf('ライオン'));
        break;
    }

//課題6&7//
var animals =[
    {'name':'パンダ','weight':80},
    {'name':'ライオン','weight':200},
    {'name':'キリン','weight':300}
    ];

alert (animals[1].wight);

//課題8//
function calc(x){
    return x^2*3.14;
}
    alert (calc(15));