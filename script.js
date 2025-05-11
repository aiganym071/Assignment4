function calculatePrice() {
    let price = 100; 

   
    let educationCoefficient = parseFloat(document.getElementById('education').value);
    let netWorthCoefficient = parseFloat(document.getElementById('netWorth').value);
    let casteValue = parseInt(document.getElementById('caste').value);

   
    let skillsPrice = 0;
    if (document.getElementById('musicalInstrument').checked) skillsPrice += 10;
    if (document.getElementById('goodCook').checked) skillsPrice += 20;
    if (document.getElementById('easygoing').checked) skillsPrice += 15;
    if (document.getElementById('singsWell').checked) skillsPrice += 10;


    let ageCoefficient = 1;
    if (document.getElementById('age1').checked) ageCoefficient = 1.5;
    else if (document.getElementById('age2').checked) ageCoefficient = 1.2;
    else if (document.getElementById('age3').checked) ageCoefficient = 0.95;

    
    let reputationPenalty = 0;
    if (document.getElementById('gossipParents').checked) reputationPenalty += 0.85;
    if (document.getElementById('gossipCharacter').checked) reputationPenalty += 0.9;
    if (document.getElementById('generalGossip').checked) reputationPenalty += 20;

   
    price += (educationCoefficient * netWorthCoefficient * price);
    price += casteValue;
    price += skillsPrice;
    price -= reputationPenalty;

   
    document.getElementById('finalPrice').innerHTML = `Final Price: $${price.toFixed(2)}`;
}



