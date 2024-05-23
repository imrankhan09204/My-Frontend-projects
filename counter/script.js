let btn1 = document.getElementById("plus");
let btn2 = document.getElementById("minus");
let center = document.getElementById("center");
let num = 0;

btn1.addEventListener("click", () => {
    num++;
    center.innerHTML = num;
   
});

btn2.addEventListener("click", () => {
    num--;
    center.innerHTML = num;
});
