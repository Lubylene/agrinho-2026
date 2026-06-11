document.getElementById("btn1").addEventListener("click", () => {

window.scrollTo({
top: document.querySelector(".cards").offsetTop,
behavior: "smooth"
});

});