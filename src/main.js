 //references
 const traficLightElms = document.querySelectorAll(".trafficLight");//0 - red elem, 1 - yellow elem, 2 - green elem
 //global variables & constants
 const GRAY_CLASS = "trafficLight-gray";
 const RED_CLASS = "trafficLight-red";
 const GREEN_CLASS = "trafficLight-green";
 const YELLOW_CLASS = "trafficLight-yellow";
 const statesMachine = [
    {timing: 2, fun: redYellow},
    {timing: 2, fun: green},
    {timing: 2, fun: yellow},
    {timing: 2, fun: red}
 ]
 //functions
 function redYellow(timing) {
    setTimeout(() => setRedYellow(), timing);
 }
 function green(timing) {
    setTimeout(() => setGreen(), timing);
 }
 function red(timing) {
    setTimeout(() => setRed(), timing)
 }
 function yellow(timing) {
    setTimeout(() => setYellow(), timing)
 }
 function setRedYellow() {
    traficLightElms[0].classList.remove(GRAY_CLASS);
    traficLightElms[0].classList.add(RED_CLASS);
    traficLightElms[1].classList.remove(GRAY_CLASS);
    traficLightElms[1].classList.add(YELLOW_CLASS);
    traficLightElms[2].classList.remove(GREEN_CLASS);
    traficLightElms[2].classList.add(GRAY_CLASS);

 }
 function setRed() {
    traficLightElms[0].classList.remove(GRAY_CLASS);
    traficLightElms[0].classList.add(RED_CLASS);
    traficLightElms[1].classList.remove(YELLOW_CLASS);
    traficLightElms[1].classList.add(GRAY_CLASS);
    traficLightElms[2].classList.remove(GREEN_CLASS);
    traficLightElms[2].classList.add(GRAY_CLASS);

 }
 function setYellow() {
    traficLightElms[0].classList.remove(RED_CLASS);
    traficLightElms[0].classList.add(GRAY_CLASS);
    traficLightElms[1].classList.remove(GRAY_CLASS);
    traficLightElms[1].classList.add(YELLOW_CLASS);
    traficLightElms[2].classList.remove(GREEN_CLASS);
    traficLightElms[2].classList.add(GRAY_CLASS);

 }
 function setGreen() {
    traficLightElms[0].classList.remove(RED_CLASS);
    traficLightElms[0].classList.add(GRAY_CLASS);
    traficLightElms[1].classList.remove(YELLOW_CLASS);
    traficLightElms[1].classList.add(GRAY_CLASS);
    traficLightElms[2].classList.remove(GRAY_CLASS);
    traficLightElms[2].classList.add(GREEN_CLASS);

 }
 //actions
  setRed();
 
  statesMachine.forEach(({fun, timing}) => fun(timing * 1000))





