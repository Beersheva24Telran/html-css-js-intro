export default class RateComponent {
    #starsNumber
    constructor(starsNumber=5) {
        this.#starsNumber = starsNumber;
    }
    render(parent, rate) {
        //TODO
        //renders appropriate number of full stars, number of empty stars and if needed 
        //one half filled star inside parent element 
        //if fractional part less than 0.25 the number should be floored (no half filled star)
        //if fractional part greater than 0.75 the number should be ceiled (no half filled star)
        //other cases fractional part should be presented as half filled star
    }
}