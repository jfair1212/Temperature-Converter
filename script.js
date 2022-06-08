

var submit = document.getElementById("submit");

var buttonf2c = document.getElementById("f2c");
var buttonc2f = document.getElementById("c2f");


// Changes page to accomodate whichever button was pressed
function conversion(type) {
    if (type === "f2c") {
        document.getElementById('prompt').hidden = true;
        document.getElementById('main').hidden = false;
    } else if (type === "c2f") {
        document.getElementById('prompt').hidden = true;
        document.getElementById('main').hidden = false;
        document.getElementById('conversionPrompt').innerHTML = "Enter temperature in degrees Celsius:"
    }
}


// This variable will determine which conversion process is intiiated upon the submit button being clicked. Then the button for performing another conversion is uncovered
var conversionType;
buttonf2c.onclick = function() {
    conversion('f2c');
    conversionType = 'f2c'
    document.getElementById("newConversion").hidden = false;
}

buttonc2f.onclick = function() {
    conversion('c2f');
    conversionType = 'c2f';
    document.getElementById("newConversion").hidden = false;
}


// Both versions of submit.onclick go through the answer to make sure it is a number and then they perform the appropriate conversion and display it. What version they go through depends on the value of conversionType
submit.onclick = function() {
    if (conversionType === 'f2c') {
            var input = document.getElementById("initialTemp").value;
            for (var i = 0; i < input.length; i++) {
                if (isNaN(input[i]) ) {
                    alert("Please enter a valid temperature.");
                    return;
                } else {
                    document.getElementById("finalTemp").innerHTML = `${((input-32) / 1.8).toFixed(1)} degrees Celsius!`;
                }
            }
        
    } else if (conversionType === 'c2f') {
        var input = document.getElementById("initialTemp").value;
            for (var i = 0; i < input.length; i++) {
                if (isNaN(input[i]) ) {
                    alert("Please enter a valid temperature.");
                    return;
                } else {
                    document.getElementById("finalTemp").innerHTML = `${((input * 1.8) + 32).toFixed(1)} degrees Fahrenheit!`;
                }
            }
    }
};


// Reloads page so user can begin another temperature conversion
const newConversionBtn = document.getElementById("newConversion");
newConversionBtn.onclick = function() {
    document.location.reload();
}

