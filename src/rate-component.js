const filledStarElement = '<i class="fa-solid fa-star"></i>'
const emptyStarElement = '<i class="fa-regular fa-star"></i>'
const halfStarElement = '<i class="fa-regular fa-star-half-stroke"></i>'
export default class RateComponent {
    #starsNumber
    constructor(starsNumber=5) {
        this.#starsNumber = starsNumber;
    }
    render(parent, rate) {
        //renders appropriate number of full stars, number of empty stars and if needed 
        //one half filled star inside parent element 
        //if fractional part less than 0.25 the number should be floored (no half filled star)
        //if fractional part greater than 0.75 the number should be ceiled (no half filled star)
        //other cases fractional part should be presented as half filled star
        parent.innerHTML = this.#getStarsArray(rate).join("");
    }
    #getStarsArray(rate) {
        const {filledStars, halfFilledStar, emptyStars} = this.#getStarsDistribution(rate);
        const resArr = getStarsArray(filledStars,filledStarElement);
       halfFilledStar && resArr.push(halfStarElement);
       resArr.push(...getStarsArray(emptyStars, emptyStarElement))
       return resArr;
    }
    #getStarsDistribution(rate) {
        let filledStars = this.#starsNumber * rate / 100;
        let halfFilledStar = 0;
        const fractionalPart = filledStars - Math.trunc(filledStars);
        if (fractionalPart > 0.75) {
            filledStars++;
        } else if (fractionalPart > 0.25){
            halfFilledStar = 1;
        }
        const emptyStars = this.#starsNumber - filledStars;
        return {filledStars, halfFilledStar, emptyStars}

    }
}
function getStarsArray(starsNumber, htmlElem){
    return Array.from({length: starsNumber}, () => htmlElem)
}
