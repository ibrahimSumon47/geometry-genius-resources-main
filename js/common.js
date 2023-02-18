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

//! common input validation
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
function getCommonInnerTextValue(elementTextId) {
    const inputField = document.getElementById(elementTextId);
    const inputNumberString = inputField.innerText;
    const inputNumber = parseFloat(inputNumberString);
    return inputNumber;
}

// ! Random colors

function getRandomColor(){
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)]
    }

    return color;
}