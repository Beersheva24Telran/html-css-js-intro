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
 async function redYellow(timing) {
    await sleep(timing);
    setRedYellow()
 }
 async function green(timing) {
    await sleep(timing);
    setGreen()
 }
 async function red(timing) {
    await sleep(timing);
    setRed()
 }
 async function yellow(timing) {
    await sleep(timing);
    setYellow()
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
 
async function oneIteration() { 
        for(let i = 0; i < statesMachine.length; i++) {
            await statesMachine[i].fun(statesMachine[i].timing);
      }
    }
    
(async () => {
    while(true) {
        await oneIteration()
    }
})();
 
 
 function sleep(timing) {
    return new Promise(resolve => {
        setTimeout(() => resolve(), timing * 1000)
    })
} 




