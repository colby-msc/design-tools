function calculateMinimumGrilleArea(requiredAirflow) {
    const maximumFaceVelocity = 400;
    const assumedOpenGrilleArea = 0.65;

    const minimumFreeArea = ((requiredAirflow / maximumFaceVelocity) * 144); // converting from square feet to square inches

    const minimumGrilleArea = (minimumFreeArea / assumedOpenGrilleArea);

    return `${Math.ceil(minimumGrilleArea)} sq. in.`;

}

function calculateMinimumVentilation(conditionedFloorArea, occupants) {
    const floorAreaVentilationFactor = 0.03;
    const occupantVentilationRate = 7.5;

    const requiredMinimumContinuousVentilationAirflow = (floorAreaVentilationFactor * conditionedFloorArea) + (occupantVentilationRate * occupants);

    return `${Math.ceil(requiredMinimumContinuousVentilationAirflow)} CFM`;
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