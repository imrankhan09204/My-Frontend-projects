let input = document.getElementById("inp");
let text = document.getElementById("txt");


function fun (){

    if(input.value == ""){
        alert("enter works to be done..");
    }

    else {
        text.style.display = "inline-block"
        let newEle = document.createElement("ul");
        newEle.innerHTML =`${input.value}  <span><i class="fa fa-times cross" aria-hidden="true"></i></span> `;
        text.appendChild(newEle);

        newEle.querySelector("span").addEventListener("click", function(){
            newEle.remove();
        })
    }
}