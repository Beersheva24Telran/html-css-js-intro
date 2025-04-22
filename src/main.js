// const traficLightElms = document.querySelectorAll(".trafficLight");
// const redElement = document.querySelector("#red")
 const redElement = document.getElementById("red");
 const greenElement = document.getElementById("green");
 function switchColors() {
    switching(redElement);
    switching(greenElement);
 }
 function switching(element) {
    element.classList.toggle("trafficLight-red");
    element.classList.toggle("trafficLight-green");

 }



