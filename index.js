function rolldice(){
    const numofDice = document.getElementById("numofDice").value;
    const DiceResult = document.getElementById("DiceResult");
    const DiceImages = document.getElementById("DiceImages");
    const values = [];
    const images = [];

    for(let i=0; i < numofDice; i++){
        const value = Math.floor(Math.random()*6)+1
        values.push(value);
        // if more than one die is rolled it adds the next value to the values array
        images.push(`<img src= "diceimg/${value}.png" alt="Dice${value}">`)
    }
    DiceResult.textContent = `dice: ${values.join(", ")}`
    DiceImages.innerHTML = images.join(' ') 
}