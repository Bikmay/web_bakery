


function generateLayers() {

    var count = document.getElementById('count-floor').valueOf();

    el = document.getElementById(layers) **;

    for (let i = 0; i <count ; i++) {

        child = document.createElement("div");
        child.setAttribute("id="+count);

        text1=document.createElement("p");
        input1=document.createElement("input");


        text2= document.createElement("p");
        input2=document.createElement("input");

        child.appendChild(text1);
        child.appendChild(input1);
        child.appendChild(text2);
        child.appendChild(input2);



        el.appendChild(child);
    }

    return el;
}