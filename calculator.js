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
            previous.textContent = currentContent;
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
            previous.textContent = currentContent;
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
            previous.textContent = currentContent;
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
            previous.textContent = currentContent;
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

// Array for each of the operands
const operandSymbols = ["+", "-", "÷", "×"];
const buttons = Array.from(document.getElementsByClassName("button"));
buttons.forEach(button => {
    if (button.textContent !== "=")
    {
        button.addEventListener("click", () => 
        {
            current.textContent += button.textContent;
            if (operandSymbols.includes(button.textContent))
            {
                checkOperation();
            }
        }
        );
        
    }
});

// Handling deleting
const deleteButton = document.querySelector(".delete");
deleteButton.addEventListener("click", () => {
    current.textContent = current.textContent.slice(0, -1);
})

// Keyboard responsiveness

// Declare full list
keyboardList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "(",")", "."];


// Add event listener on keydown
document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;
    if (name === 'Shift') {
      // Do nothing.
      return;
    }
    if (event.shiftKey) {
      console.log(`The character pressed was ${name} \n Key code Value: ${code}`);
      if (keyboardList.includes(name))
      {
        current.textContent += name;
      }
      else if(name === "*")
      {
        current.textContent += "×";
        checkOperation()
      }
      else if(name === "+")
      {
        current.textContent += name;
        checkOperation()
      }
      else if(name === "-")
      {
        current.textContent += name;
        checkOperation()
      }
    //   console.log(mapKeyPressToActualCharacter(true, characterMap.indexOf(name)))


    } 
    else 
    {
      console.log(`Key pressed ${name} \n Key code Value: ${code}`);
      if (keyboardList.includes(name))
      {
        current.textContent += name;
      }
      else if (name === "Enter")
      {
        operate();
      }
      else if(name === "Backspace")
      {
        current.textContent = current.textContent.slice(0, -1);
      }
      else if(name === "/")
      {
        current.textContent += "÷";
        checkOperation()
      }
    }
  }, false);


  // Checking for previous operand

function checkOperation()
{
    checkContent = current.textContent;
    // Remove the last operator
    lastOperator = checkContent[checkContent.length - 1];
    current.textContent = checkContent.slice(0, -1);

    // Check if it has an operator already
    operate()
    
    //If not, just return
    current.textContent += lastOperator;
}


