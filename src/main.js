//references
const trafficLightElms = document.querySelectorAll(".trafficLight"); //0 - red elem, 1 - yellow elem, 2 - green elem
//global variables & constants

const GRAY_CLASS = "trafficLight-gray";
const RED_CLASS = "trafficLight-red";
const GREEN_CLASS = "trafficLight-green";
const YELLOW_CLASS = "trafficLight-yellow";
const allModifierClasses = [GRAY_CLASS, RED_CLASS, GREEN_CLASS, YELLOW_CLASS]
const statesMachine = [
  { timing: 2,stateArr: [{ index: 0, CSSclass: RED_CLASS },{ index: 1, CSSclass: YELLOW_CLASS }]},
  { timing: 2, stateArr: [{ index: 2, CSSclass: GREEN_CLASS }] },
  { timing: 2, stateArr: [{ index: 1, CSSclass: YELLOW_CLASS }] },
  { timing: 2, stateArr: [{ index: 0, CSSclass: RED_CLASS }] },
];
//functions
async function stateProcessing({ timing, stateArr }) {
  await sleep(timing);
  grayOutTrafficLightElements();
  setStateClasses(stateArr);
}
function setStateClasses(stateArr){
    stateArr.forEach(({index, CSSclass}) => {
        trafficLightElms[index].classList.replace(GRAY_CLASS, CSSclass);
    })
}
function grayOutTrafficLightElements() {
    trafficLightElms.forEach(e => {
        e.classList.remove(...allModifierClasses)
        e.classList.add(GRAY_CLASS);
    });

}
async function oneIteration() {
    for(let i = 0; i < statesMachine.length; i++) {
        await stateProcessing(statesMachine[i])
    }
  }
//actions
//launching states machine
(async () => {
    while(true) {
       await oneIteration(); 
    }
    
})();

function sleep(timing) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), timing * 1000);
  });
}
