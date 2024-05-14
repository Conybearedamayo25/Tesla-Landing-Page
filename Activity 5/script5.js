function calculateBMI() {
    const weightInput = parseFloat(document.getElementById("weightInput").value);
    const heightInput = parseFloat(document.getElementById("heightInput").value);

    const bmiValue = weightInput / (heightInput * heightInput);

    let bmiCategory;
    if (bmiValue < 18.5) {
        bmiCategory = "Underweight";
    } else if (bmiValue < 25) {
        bmiCategory = "Normal weight";
    } else if (bmiValue < 30) {
        bmiCategory = "Overweight";
    } else {
        bmiCategory = "Obese";
    }

    document.getElementById("bmiResult").innerHTML = `Your BMI is ${bmiValue.toFixed(2)}. You are ${bmiCategory}.`;
}
