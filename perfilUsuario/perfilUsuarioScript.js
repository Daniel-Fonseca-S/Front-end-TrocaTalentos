function selectedInput(input) {
    let p = input.parentNode.querySelector("p");

    if (input.value == "") {
        p.style.visibility = "hidden";
        input.style.borderTop = "solid 1px lightgray";
    } else {
        p.style.visibility = "visible";
        input.style.borderTop = "none";
    }

}