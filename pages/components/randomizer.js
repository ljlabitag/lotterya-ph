
//generate random numbers for Megalotto 6/45
export default function Randomizer() {
    const randomNumbers = [];
    
    while (randomNumbers.length <= 6) {
        const randomNumber = Math.floor(Math.random()*45) + 1;
        randomNumbers.push(randomNumber);
    }

    return randomNumbers;
}