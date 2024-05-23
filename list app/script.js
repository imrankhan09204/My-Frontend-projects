let btn = document.getElementById("btn");
let inp = document.getElementById("input");
let text = document.querySelector(".text")


btn.addEventListener("click", function () {
    if(inp.value == ''){
        alert("Abe gandu kuch tho likh le");
    }

    else {
        let newElm = document.createElement("ul");
        newElm.innerHTML = `${inp.value} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(newElm);
        inp.value = ""

        newElm.querySelector("i").addEventListener("click", remove);
        function remove () {
            newElm.remove();
        }

    }
})