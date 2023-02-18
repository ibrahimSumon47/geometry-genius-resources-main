let serialNo = 0;
//! Triangle card
document.getElementById("triangle-button").addEventListener("click", function () {
    serialNo += 1;

    const triangleBInput = getCommonInputValue("triangle-b-field");
    const triangleHInput = getCommonInputValue("triangle-h-field");
    commonInputValidationOfElement(triangleBInput, triangleHInput);
    const triangleArea = (0.5 * triangleBInput * triangleHInput).toFixed(2);

    const nameOfTriangle = document.getElementById("name-of-triangle").innerText;
    areaCalculationData(serialNo, nameOfTriangle, triangleArea);
});

// ! Rectangle card

document.getElementById("rectangle-button").addEventListener("click", function () {
    serialNo += 1;

    const rectangleWField = getCommonInputValue("rectangle-w-field");
    const rectangleLField = getCommonInputValue("rectangle-l-field");
    commonInputValidationOfElement(rectangleWField, rectangleLField);
    const rectangleArea = (rectangleWField * rectangleLField).toFixed(2);

    const nameOfRectangle = document.getElementById("name-of-rectangle").innerText;
    areaCalculationData(serialNo, nameOfRectangle, rectangleArea)
})

// ! Parallelogram Card

document.getElementById("parallelogram-button").addEventListener("click", function () {
    serialNo += 1;

    const parallelogramBField = getCommonInnerTextValue("parallelogram-b-field");
    const parallelogramHField = getCommonInnerTextValue("parallelogram-H-field");
    const parallelogramArea = (parallelogramBField * parallelogramHField).toFixed(2);
    const nameOfParallelogram = document.getElementById("name-of-parallelogram").innerText;
    areaCalculationData(serialNo, nameOfParallelogram, parallelogramArea);
})

//! Rhombus Card
document.getElementById("rhombus-button").addEventListener("click", function () {
    serialNo += 1;

    const rhombusD1Field = getCommonInnerTextValue("rhombus-d1-field");
    const rhombusD2Field = getCommonInnerTextValue("rhombus-d2-field");
    const rhombusArea = (0.5 * rhombusD1Field * rhombusD2Field).toFixed(2);
    const nameOfRhombus = document.getElementById("name-of-rhombus").innerText;
    areaCalculationData(serialNo, nameOfRhombus, rhombusArea);
})

// ! Pentagon Card

document.getElementById("pentagon-button").addEventListener("click", function(){
    serialNo += 1;

    const pentagonPField = getCommonInnerTextValue("pentagon-p-field");
    const pentagonBField = getCommonInnerTextValue("pentagon-b-field");
    const pentagonArea = (0.5 * pentagonPField * pentagonBField).toFixed(2);
    const nameOfPentagon = document.getElementById("name-of-pentagon").innerText;
    areaCalculationData(serialNo, nameOfPentagon, pentagonArea);
})


// ! Ellipse Card

document.getElementById("ellipse-button").addEventListener("click", function(){
    serialNo += 1;

    const ellipseAField = getCommonInnerTextValue("ellipse-a-field");
    const ellipseBField = getCommonInnerTextValue("ellipse-b-field");
    const piValue = 3.14;
    const ellipseArea = (piValue * ellipseAField * ellipseBField).toFixed(2);
    const nameOfEllipse = document.getElementById("name-of-ellipse").innerText;
    areaCalculationData(serialNo, nameOfEllipse, ellipseArea);
})