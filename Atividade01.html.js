const elementoForm = document.getElementById("formulario");
elementoForm.addEventListener("submit", (e) => e.preventDefault());

 const elementoCor = document.getElementById("cor");
 elementoCor.addEventListener("input", (e) => {
    let corNova = e.target.value;

    document.documentElement.style.setProperty("--primary-color", corNova);
 });

 document.addEventListener("DOMContentLoaded", () => {
     const rootStyles = window.getComputedStyle(document.documentElement);

     const primaryColor = rootStyles.getPropertyValue("--primary-color").trim();

     elementoCor.value = primaryColor;
 });