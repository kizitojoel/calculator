const current = document.querySelector("#current");
const previous = document.querySelector("#previous");

function add(a, b)
{
    return a + b;
}
function subtract(a, b)
{
    return a - b;
}
function multiply(a, b)
{
    return a * b;
}
function divide(a, b)
{
    return a / b;
}

function operate()
{
    const currentContent = current.textContent;
    console.log(currentContent)
    const previousContent = previous.textContent;
    // Specify splitting using operators, and split items using numbers

    // Using add operator
    if (currentContent.includes("+"))
    {
        console.log("This is an add operation");
        splitContent = currentContent.split("+");
        if (splitContent.length >= 2)
        {
            console.log(splitContent);
            screenClear();
            current.textContent = add(parseFloat(splitContent[0]), parseFloat(splitContent[1]))
        }

    }
    // Using subtract operator
    else if(currentContent.includes("-"))
    {
        console.log("This is a subtraction operation");
        splitContent = currentContent.split("-");
        if (splitContent.length >= 2)
        {
            screenClear();
            current.textContent = subtract(parseFloat(splitContent[0]), parseFloat(splitContent[1]))
        }
    }
    // Using division operator
    else if(currentContent.includes("÷"))
    {
        console.log("This is a division operation");
        splitContent = currentContent.split("÷");
        if (splitContent.length >= 2)
        {
            screenClear();
            current.textContent = divide(parseFloat(splitContent[0]), parseFloat(splitContent[1]))
        }
    }
    else if(currentContent.includes("×"))
    {
        console.log("This is a multiplication operation");
        splitContent = currentContent.split("×");
        if (splitContent.length >= 2)
        {
            screenClear();
            current.textContent = multiply(parseFloat(splitContent[0]), parseFloat(splitContent[1]))
        }
    }
    
    // splitContent = currentContent.split("");

    // let a = splitContent[0]
    // let b = splitContent[2]
    // let operator = splitContent[1]
    // screenClear()
    // if(operator === "+")
    // {
    //     current.textContent = add(a, b)
    // }
    // else if (operator === "-")
    // {
    //     let answer = subtract(a, b)
    // }
    // else if (operator === "x")
    // {
    //     return multiply(a, b)
    // }
    // else if(operator === '/')
    // {
    //     return divide(a, b)
    // }
}

//Create function that populates the display

//Clear the screen
function screenClear()
{   
    previous.textContent = "";
    current.innerHTML = "";
}



//Add responsiveness to buttons
const buttons = Array.from(document.getElementsByClassName("button"));
buttons.forEach(button => {
    if (button.textContent !== "=")
    {
        button.addEventListener("click", () => {current.textContent += button.textContent});
    }
});

// Handling calculations
// const operands = Array.from(document.getElementsByClassName("operand"));
// operands.forEach(operand => {
//     operand.addEventListener("click", operate)
// });


