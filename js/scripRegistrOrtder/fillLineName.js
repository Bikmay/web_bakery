var nameInputElement1 = document.getElementById("name_input");
var nameDivElement1 =  document.getElementById("name_underline");




nameInputElement1.onfocus = function () {
    console.log("jeneck pidor");
    nameDivElement1.style.backgroundColor='#e4606d';
    nameInputElement1.style.outline='none';
    document.getElementById("lab-name").style.color='grey';
};

nameInputElement1.onblur=function () {
    console.log("ebany front");
    nameDivElement1.style.backgroundColor='grey';
    document.getElementById("lab-name").style.color='black';

};

