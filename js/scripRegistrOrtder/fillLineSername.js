var nameInputElement = document.getElementById("sername_input");
var nameDivElement =  document.getElementById("sername_underline");


nameInputElement.onfocus = function () {
    console.log("jeneck pidor");
    nameDivElement.style.backgroundColor='chartreuse';
    nameInputElement.style.outline='none';
    document.getElementById("sername").style.color='grey';
};

nameInputElement.onblur=function () {
    console.log("ebany front");
    nameDivElement.style.backgroundColor='grey';
    document.getElementById("sername").style.color='black';

};