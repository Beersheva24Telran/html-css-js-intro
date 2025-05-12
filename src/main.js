import RateComponent from "./rate-component.js";

const rateElement = document.getElementById("rate");
const rateComponent = new RateComponent(5);
rateComponent.render(rateElement, 50)