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

document.getElementById("rectangle-button").addEventListener("click", function(){
    serialNo += 1;

    const rectangleWField = getCommonInputValue("rectangle-w-field");
    const rectangleLField = getCommonInputValue("rectangle-l-field");
    commonInputValidationOfElement(rectangleWField, rectangleLField);
    const rectangleArea = (rectangleWField * rectangleLField);

    const nameOfRectangle = document.getElementById("name-of-rectangle").innerText;
    areaCalculationData(serialNo,nameOfRectangle, rectangleArea)
})

// ! Parallelogram Card

document.getElementById("parallelogram-button").addEventListener("click", function(){
    serialNo += 1;

    const parallelogramBField = getCommonInnerTextValue("parallelogram-b-field");
    const parallelogramHField = getCommonInnerTextValue("parallelogram-H-field");
    commonInputValidationOfElement(parallelogramBField, parallelogramHField);
    const parallelogramArea = (parallelogramBField * parallelogramHField);
    const nameOfParallelogram = document.getElementById("name-of-parallelogram").innerText;
    areaCalculationData(serialNo, nameOfParallelogram, parallelogramArea);
})

//! Area Calculation Data
function areaCalculationData(serialNo, nameOfT, totalEquation) {
    const container = document.getElementById("table-container");

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class='text-xs font-medium'>${serialNo}</td>
      <td class='text-xs font-medium'>${nameOfT}</td>
      <td class='text-xs font-medium'>${totalEquation}cm<sup>2</sup></td>
      <td class='text-xs font-medium'><button class="bg-blue-500 px-3 py-2 rounded-lg text-white font-normal">Covert to m<sup>2</sup></button></td>
    ;
    `
    container.appendChild(tr);
}


//! common function-1
function getCommonInputValue(elementId) {
    const inputField = document.getElementById(elementId);
    const inputNumberString = inputField.value;
    const inputNumber = parseFloat(inputNumberString);
    inputField.value = "";
    return inputNumber;
}

function commonInputValidationOfElement(elementIdOne, elementIdTwo) {
    if (isNaN(elementIdOne) || elementIdOne === "" || elementIdOne < 0) {
        alert("Please provide a valid number");
        return;
    }
    else if (isNaN(elementIdTwo) || elementIdTwo === "" || elementIdTwo < 0) {
        alert("Please provide a valid number");
        return;
    }
}

// ! common function-2 
function getCommonInnerTextValue(elementTextId){
    const inputField = document.getElementById(elementTextId);
    const inputNumberString = inputField.innerText;
    const inputNumber = parseFloat(inputNumberString);
    return inputNumber;
  }