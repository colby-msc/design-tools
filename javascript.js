function calculateMinimumGrilleArea(requiredAirflow) {
    const maximumFaceVelocity = 400;
    const assumedOpenGrilleArea = 0.65;

    const minimumFreeArea = ((requiredAirflow / maximumFaceVelocity) * 144); // converting from square feet to square inches

    const minimumGrilleArea = (minimumFreeArea / assumedOpenGrilleArea);

    return `${Math.ceil(minimumGrilleArea)} in²`;

}

function calculateMinimumGrilleDimensions(requiredAirflow) {
    const maximumFaceVelocity = 400;
    const assumedOpenGrilleArea = 0.65;

    const minimumFreeArea = ((requiredAirflow / maximumFaceVelocity) * 144); // converting from square feet to square inches

    const minimumGrilleArea = Math.ceil((minimumFreeArea / assumedOpenGrilleArea));


    const grilleHeights = [4, 6, 8, 10, 12];
    let grilleDimensions = [];

    for (let i = 0; i < grilleHeights.length; i++) {

        let grilleLength = (minimumGrilleArea / grilleHeights[i]);

        if (grilleLength >= grilleHeights[i]) {

            if (grilleLength <= 8) {
                grilleLength = 8;
            } else if (grilleLength <= 10) {
                grilleLength = 10;
            } else if (grilleLength <= 12) {
                grilleLength = 12;
            } else if (grilleLength <= 14) {
                grilleLength = 14;
            } else if (grilleLength <= 16) {
                grilleLength = 16;
            } else if (grilleLength <= 18) {
                grilleLength = 18;
            } else if (grilleLength <= 24) {
                grilleLength = 24;
            } else if (grilleLength <= 30) {
                grilleLength = 30;
            } else if (grilleLength <= 36) {
                grilleLength = 36;
            } else if (grilleLength <= 48) {
                grilleLength = 48;
            } else if (grilleLength <= 60) {
                grilleLength = 60;
            } else {
                grilleLength = Math.ceil(grilleLength);
            }

            grilleDimensions.push(` ${grilleLength}/${grilleHeights[i]}`);
        }
    }

    if (grilleDimensions.length == 0) {
        grilleDimensions.push("8/4");
    }

    return grilleDimensions;

}

function calculateMinimumVentilation(conditionedFloorArea, occupants) {
    const floorAreaVentilationFactor = 0.03;
    const occupantVentilationRate = 7.5;

    const requiredMinimumContinuousVentilationAirflow = (floorAreaVentilationFactor * conditionedFloorArea) + (occupantVentilationRate * occupants);

    return `${Math.ceil(requiredMinimumContinuousVentilationAirflow)} CFM`;
}

function calculateRoundDuctSize(requiredAirflow) {
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
    } else if (requiredAirflow <= 2300) {
        roundDuctDiameter = 22;
    } else {
        return "Enter ≤ 2300 CFM";
    }

    return `${roundDuctDiameter}"`;

}

function calculateRectangularDuctSize(requiredAirflow) {
    let rectangularDuctDiameter;

    if (requiredAirflow <= 15) {
        rectangularDuctDiameter = "4/4, 5/3";
    } else if (requiredAirflow <= 46) {
        rectangularDuctDiameter = "5/5, 6/4, 8/3";
    } else if (requiredAirflow <= 75) {
        rectangularDuctDiameter = "6/6, 7/5, 8/4";
    } else if (requiredAirflow <= 110) {
        rectangularDuctDiameter = "7/6, 9/5, 12/4";
    } else if (requiredAirflow <= 160) {
        rectangularDuctDiameter = "8/7, 10/6, 12/5";
    } else if (requiredAirflow <= 220) {
        rectangularDuctDiameter = "9/8, 10/7, 12/6";
    } else if (requiredAirflow <= 290) {
        rectangularDuctDiameter = "10/9, 12/8, 14/7";
    } else if (requiredAirflow <= 460) {
        rectangularDuctDiameter = "12/12, 14/9, 16/8";
    } else if (requiredAirflow <= 700) {
        rectangularDuctDiameter = "14/12, 18/10, 20/9";
    } else if (requiredAirflow <= 1000) {
        rectangularDuctDiameter = "16/14, 25/10, 18/12";
    } else if (requiredAirflow <= 1300) {
        rectangularDuctDiameter = "18/16, 20/14, 25/12";
    } else if (requiredAirflow <= 1700) {
        rectangularDuctDiameter = "20/18, 25/14, 30/12";
    } else if (requiredAirflow <= 2300) {
        rectangularDuctDiameter = "25/18, 30/14, 40/12";
    }

    return rectangularDuctDiameter;

}

const airflowOutput = document.querySelector("#airflow");
const grilleButton = document.querySelector(".grille-button");
const grilleArea = document.querySelector(".grille-area");
const grilleDimensions = document.querySelector(".grille-dimensions");

grilleButton.addEventListener("click", () => {

    const selection = airflowOutput.value;

    grilleArea.textContent = calculateMinimumGrilleArea(selection);
    grilleDimensions.textContent = calculateMinimumGrilleDimensions(selection);

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
const roundDuctSize = document.querySelector(".round-duct-size");
const rectangularDuctSize = document.querySelector(".rectangular-duct-size");


ductButton.addEventListener("click", () => {

    const selection = ductAirflowOutput.value;

    roundDuctSize.textContent = calculateRoundDuctSize(selection);
    rectangularDuctSize.textContent = calculateRectangularDuctSize(selection);


    event.preventDefault();
});