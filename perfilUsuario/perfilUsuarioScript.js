let ipt = document.querySelector("input");

function selectedInput(input) {
    let tagp = document.createElement("p");
    tagp.innerHTML = input.placeholder;
    tagp.classList = "ms-3 font-monospace small-size-text bg-light negative-margin"
    input.style.borderTop = "none";
    input.parentNode.insertBefore(tagp, input)
}

function unselectedInput(input) {
    if (input.value == "") {
        input.parentNode.removeChild(input.parentNode.querySelector("p"));
        input.style.borderTop = "solid 1px lightgray";
    }
}