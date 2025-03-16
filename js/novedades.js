document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".leer-mas").forEach(button => {
        button.addEventListener("click", function() {
            this.innerText = this.innerText === "Leer más" ? "Leer menos" : "Leer más";
        });
    });
});