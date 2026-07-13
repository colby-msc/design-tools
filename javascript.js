function calculateMinimumGrilleArea(requiredAirflow) {
    const maximumFaceVelocity = 400;
    const assumedOpenGrilleArea = 0.65;

    const minimumFreeArea = ((requiredAirflow / maximumFaceVelocity) * 144); // converting from square feet to square inches

    const minimumGrilleArea = (minimumFreeArea / assumedOpenGrilleArea);

    return `${Math.ceil(minimumGrilleArea)} in²`;

}

function calculateMinimumVentilation(conditionedFloorArea, occupants) {
    const floorAreaVentilationFactor = 0.03;
    const occupantVentilationRate = 7.5;

    const requiredMinimumContinuousVentilationAirflow = (floorAreaVentilationFactor * conditionedFloorArea) + (occupantVentilationRate * occupants);

    return `${Math.ceil(requiredMinimumContinuousVentilationAirflow)} CFM`;
}

function calculateDuctSize(requiredAirflow) {
    let roundDuctDiameter;

    if (requiredAirflow <= 15) {
        roundDuctDiameter = 4;
    } else if (requiredAirflow <= 46) {
        roundDuctDiameter = 5;
    } else if (requiredAirflow <= 75) {
        roundDuctDiameter = 6;
    } else if (requiredAirflow <= 110) {
        roundDuctDiameter = 7;
    } else if (requiredAirflow <= 160) {
        roundDuctDiameter = 8;
    } else if (requiredAirflow <= 220) {
        roundDuctDiameter = 9;
    } else if (requiredAirflow <= 290) {
        roundDuctDiameter = 10;
    } else if (requiredAirflow <= 460) {
        roundDuctDiameter = 12;
    } else if (requiredAirflow <= 700) {
        roundDuctDiameter = 14;
    } else if (requiredAirflow <= 1000) {
        roundDuctDiameter = 16;
    } else if (requiredAirflow <= 1300) {
        roundDuctDiameter = 18;
    } else if (requiredAirflow <= 1700) {
        roundDuctDiameter = 20;
    } else {
        return "CFM Currently Not Calculable";
    }

    return `${roundDuctDiameter}"`;

}

const airflowOutput = document.querySelector("#airflow");
const grilleButton = document.querySelector(".grille-button");
const grilleArea = document.querySelector(".grille-area");

grilleButton.addEventListener("click", () => {

    const selection = airflowOutput.value;

    grilleArea.textContent = calculateMinimumGrilleArea(selection);

    event.preventDefault();

});

const floorAreaOutput = document.querySelector("#floor_area");
const occupantsOutput = document.querySelector("#occupants");
const ventilationButton = document.querySelector(".ventilation-button");
const ventilationAirflow = document.querySelector(".ventilation-airflow");

ventilationButton.addEventListener("click", () => {

    const floorAreaSelection = floorAreaOutput.value;
    const occupantsSelection = occupantsOutput.value;

    ventilationAirflow.textContent = calculateMinimumVentilation(floorAreaSelection, occupantsSelection);

    event.preventDefault();
});

const ductAirflowOutput = document.querySelector("#duct-airflow");
const ductButton = document.querySelector(".duct-button");
const ductSize = document.querySelector(".duct-size");

ductButton.addEventListener("click", () => {

    const selection = ductAirflowOutput.value;

    ductSize.textContent = calculateDuctSize(selection);

    event.preventDefault();
});