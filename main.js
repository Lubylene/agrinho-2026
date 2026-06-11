const accessibilityBtn =
document.getElementById("accessibilityBtn");

const accessibilityMenu =
document.getElementById("accessibilityMenu");

let fontSize = 100;

accessibilityBtn.addEventListener("click", () => {

    accessibilityMenu.classList.toggle("active");

});

function increaseFont(){

    fontSize += 10;

    document.body.style.fontSize =
    fontSize + "%";

}

function decreaseFont(){

    fontSize -= 10;

    document.body.style.fontSize =
    fontSize + "%";

}

function toggleContrast(){

    document.body.classList.toggle(
        "high-contrast"
    );

}