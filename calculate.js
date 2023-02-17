document.getElementById("gombocska").onsubmit=function(event){
    event.preventDefault();
    let bmi = Number( e.target.elements.suly.value)/(
        Math.pow (Number(e.target.elements.suly.value),2)
    );
    DocumentFragment.getElementById("bmi").innerHTML=bmi;

    console.log(event);
}
