function selectedInput(input) {
    let p = input.parentNode.querySelector("p");

    if (input.value == "") {
        p.style.visibility = "hidden";
        input.addEventListener("focus", function () {
            input.style.borderTop = "1px solid lightblue";
        });
        input.addEventListener("blur", function () {
            input.style.borderTop = "1px solid lightgray";
        });
    } else {
        p.style.visibility = "visible";
        input.style.borderTop = "none";
    }

}