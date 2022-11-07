// Homework: Variables and Primitive Data Types

// #1
// The Age Calculator
// Forgot how old someone is? Calculate it!
// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.
// Bonus: Get the current year with JavaScript

function func_TheAgeCalculator() {
    const curDate = new Date;
    var userDOBYear = new Date;
    var curYear = curDate.getFullYear();
    var userDOB = prompt("Input your date of birth (dd/mm/yyyy)");
    if (userDOB === null || userDOB === "") {
        alert("No date is inputted. Please re-enter.");
    }
    else {
        userDOB =  strToDate(userDOB);
        userDOBYear = userDOB.getFullYear();
        var userAge = curYear - userDOBYear;
        alert("You age is : " + userAge);
    }
}
function strToDate(str) {
    var date = str.split("/"),
        m = date[1],
        d = date[0],
        y = date[2];
        Date.parse(m, d, y)
    return (new Date(y + "-" + m + "-" + d));
}


// #2
// The Lifetime Supply Calculator
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat in total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
// Bonus: Get the details with prompt

function func_TheLifetimeSupplyCalculator() {
    const age = prompt("Input your current age");
    const maxAge = prompt("Input max age");
    const amtPerDay = prompt("Input the amount per day you will eat");
    if (age === null || age === "" || maxAge === null || maxAge === "" || amtPerDay === null || amtPerDay === "") {
        alert("Incomplete information. Please re-enter.");
    }
    else {
        const totalAmt = (maxAge - age) * amtPerDay;
        alert("You will need " + totalAmt + " to last you until the ripe old age of " + maxAge + ".")
    }
}


// #3
// The Geometrizer
// Calculate the properties of a circle, using the definitions here.
// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".
function func_TheGeometrizer() {
    const iRadius = prompt("Input a radius");
    if (iRadius === null || iRadius === "") {
        alert("No radius is inputted. Please re-enter.");
    }
    else {
        var c = new circle(parseInt(iRadius));
        var msg = "The Geometrizer :-\n\n";
        msg = msg + "Radius : " + parseInt(iVal).toString() + "\n";
        msg = msg + "The circumference is " + c.perimeter().toFixed(2).toString() + "\n";
        msg = msg + "The area is " + c.area().toFixed(2).toString() + "\n";
        alert(msg);
    }
}

function circle(radius)
{
    this.radius = radius;
    // area method
    this.area = function () 
    {
        return Math.PI * this.radius * this.radius;
    };

    // perimeter method
    this.perimeter = function ()
    {
        return 2*Math.PI*this.radius;
    };
}



// #4
// The Temperature Converter
// It's hot out! Let's make a converter based on the steps here.
// Store the temperature (in celsius) into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

function func_TheTemperatureConverter() {
    const iTemperature = prompt("Input temperature in celcius");
    if (iTemperature === null || iTemperature === "") {
        alert("No temperature is inputted. Please re-enter.")
    }
    else {
        var c = new convertTemperature(parseInt(iTemperature));
        var msg = "The Temperature Converter :-\n\n";
        msg = msg + "Temperature in celsius : " + parseInt(iTemperature).toString() + "\n";
        msg = msg + parseInt(iTemperature).toString() + "°C is " + c.convertFahrenheit().toFixed(2).toString() + "°F\n";
        msg = msg + parseInt(iTemperature).toString() + "°F is " + c.convertCelsius().toFixed(2).toString() + "°C\n";
        alert(msg);
    }
}

function convertTemperature(temperatureInfo)
{
    this.temperatureInfo = temperatureInfo;
    // fahrenheit method
    this.convertFahrenheit = function ()
    {
        return temperatureInfo * 9 / 5 + 32;
    }

    // celsius method
    this.convertCelsius = function ()
    {
        return (temperatureInfo - 32) * 5 / 9;
    }
}


// Homework: Conditionals
// #1
// The World Translator
// Write an if statement that writes Hello World in different languages. Store a language in a variable.
// If the language is "English", log "Hello World"
// If the language is "French", log "Bonjour le monde"
// If the language is "Malay", log "Hai dunia" (I think?)
// Add as many others as you wish!

function func_TheWorldTranslator() {
    const strToTranslate = "Hello World";
    let language = prompt("Input language to translate \"Hello World\"", "ENGLISH / FRENCH / MALAY");
    if (language === null || language === ""){
        alert("No language was inputted.\n" + strToTranslate);
    }
    else {
        if (language.toUpperCase() === "ENGLISH") {
            alert("Hello World");
        }
        else if (language.toUpperCase() === "FRENCH") {
            alert("Bonjour le monde");
        }
        else if (language.toUpperCase() === "MALAY") {
            alert("Hai dunia");
        }
        else {
            alert("Language to translate is not found.\n" + strToTranslate);
        }
    }
}


// #2
// The Grade Assigner
// Store a testScore in a variable. Give the user a score (either "A", "B", "C", "D", or "F") based on those test results.
function func_TheGradeAssigner() {
    var userScore = prompt("Input your score")
    if (userScore === null || userScore === "") {
        alert("No score is inputted. Please re-enter.");
    }
    else {
        var c = new gradeResult(userScore);
        alert("Test result is Grade " + c.gradeResult());    
    }
}

function gradeResult(score)
{
    this.score = score;
    this.gradeResult = function ()
    {
        let result = "";
        if (score >= 80) {
            result = "A"
        }
        else if (score >=60 && score < 80) {
            result = "B"
        }
        else if (score >=50 && score < 60) {
            result = "C"
        }
        else if (score >=40 && score < 50) {
            result = "D"
        }
        else {
            result = "F"
        }
        return result;
    }
}



// #3
// Air Conditioning
// Store the current temperature, whether the A/C is functional, and what the desired temperature is.
// If the airconditioner is functional and the current temperature is above the the desired temperature:
// Log "Turn on the A/C Please"
// If the airconditioner is non-functional and the current temperature is above the the desired temperature
// Log "Fix the A/C now! It's hot!"
// If the airconditioner is non-functional and the current temperature is below the the desired temperature
// Log "Fix the A/C whenever you have the chance... It's cool..."
function func_AirConditioning() {
    var curTemperature = prompt("Input current temperature");
    var isACFunction = prompt("Is air conditioning is functional (Y/N)?\nEither OK or Cancel.");
    var idealTemperature = prompt("What is your desired temperature?\nEither OK or Cancel.");
    if (curTemperature === null || curTemperature === "" || isACFunction === null || isACFunction === "" || idealTemperature === null || idealTemperature === "") {
        alert("Incomplete information. Please re-enter.");
    }
    else {
        var c = new checkACCondition(curTemperature, isACFunction, idealTemperature);
        alert(c.ACResult());
    }

}

function checkACCondition(curTemperature, isACFunction, idealTemperature) {
    this.curTemperature = curTemperature;
    this.isACFunction = isACFunction;
    this.idealTemperature = idealTemperature;
    this.ACResult = function ()
    {
        let result = "";
        if (isACFunction.toUpperCase() === "Y") {
            if (curTemperature > idealTemperature) {
                result = "Turn on the A/C Please."
            }
            else {
                result = "Current temperature is within desired temperature."
            }
        }
        else if (isACFunction.toUpperCase() === "N") {
            if (curTemperature > idealTemperature) {
                result = "Fix the A/C now! It's hot!"
            }
            else if (curTemperature < idealTemperature) {
                result = "Fix the A/C whenever you have the chance... It's cool..."
            }
            else {
                result = "Current temperature is same with desired temperature."
            }
        } 
        else {
            result = "Missing information of air conditioning is functional or not";
        }
        return result;
    }
}



// #4
// You and Your Government
// Write a program that stores a user age and logs a message based on that age.

// Age	        Message
// >= 35	    'You can vote AND hold any place in government!'
// >= 25	    'You can vote AND run for the Senate!'
// >= 18	    'You can vote!'
// ELSE	        'You can't vote yet'
function func_YouAndYourGovernment() {
    var userAge = prompt("Input your age")
    if (userAge === null || userAge === "") {
        alert("No age is inputted. Please re-enter.");
    }
    else {
        var c = new checkVotingStatus(userAge);
        alert(c.votingStatus());    
    }
}

function checkVotingStatus(userAge)
{
    this.userAge = userAge;
    this.votingStatus = function ()
    {
        let result = "";
        if (userAge >= 35) {
            result = "You can vote AND hold any place in government!"
        }
        else if (userAge >= 25) {
            result = "You can vote AND run for the Senate!"
        }
        else if (userAge >= 18) {
            result = "You can vote!"
        }
        else {
            result = "You can't vote yet"
        }
        return result;
    }
}




// #5
// Golf
// Write an if statement that gives a user the nickname of their score, based on par and logs the score's nickname.

// Score	    Nickname
// 1	        "Hole in one"
// <= par - 2	"Eagle"
// par - 1	    "Birdie
// par	        "Par"
// par + 1	    "Bogey"
// par + 2	    "Double Bogey"
// >= par + 3	"Not sure"
function func_Golf() {
    var userName = prompt("Input your name")
    var userPar = prompt("Input your par")
    var userStrokes = prompt("Input your strokes")
    if (userName === null || userName === "" || userPar === null || userPar === "" || userStrokes === null || userStrokes == "") {
        alert("Incomplete information. Please re-enter.");
    }
    else {
        var c = new checkGolfScore(userPar, userStrokes);
        alert(userName + " score:-\n" + c.golfScore());
    }

}

function checkGolfScore(par, strokes)
{
    this.par = par;
    this.strokes = strokes;
    this.golfScore = function ()
    {
        if (strokes == 1) {
            return "Hole-in-one!";
        } else if (strokes <= par - 2) {
            return "Eagle";
        } else if (strokes == par - 1) {
            return "Birdie";
        } else if (strokes == par) {
            return "Par";
        } else if (strokes == par + 1) {
            return "Bogey";
        } else if (strokes == par + 2) {
            return "Double Bogey";
        } else {
            return "Go Home!";
        }
    }
}



// #6
// Serge Says
// Store a user's message.

// If the user asks a question (e.g. the message ends in ?)
// Log "Sure."
// If the user yells (e.g. the message is in all capitals)
// Log "Woah, chill out!"
// If the user doesn't say anything (e.g. the message is empty OR only spaces)
// Log "Fine. Be that way!"
// Otherwise:
// Log "Whatever."
function func_SergeSays() {
    var userMsg = prompt("Input your message");
    var c = new checkResponseMsg(userMsg);
    alert(c.ResponseMsg());
}

function checkResponseMsg(userMsg)
{
    this.userMsg = userMsg;
    this.ResponseMsg = function ()
    {
        if (userMsg === null || userMsg === "") {
            return "Fine. Be that way!"
        }
        else if (userMsg.indexOf("?") >= 0) {
            return "Sure."
        }
        else if (userMsg === userMsg.toUpperCase()) {
            return "Woah, chill out!"
        }
        else {
            return "Whatever."
        }
    }
}



// #7 
// The Pluralizer
// Write an if statement that works with a noun and a number. Make the noun plural if necessary!! Make this as accurate as possible (using the rules described here)
function func_ThePluralizer() {
    alert("The Pluralizer?");
}



// #8
// The Rest
// Implement a Rock, Paper, Scissors single game
// Implement a Rock, Paper, Scissors best of three game
// Anything else you can think of!
function func_TheMiniGame() {
    window.open("MiniGame.html");
}



// Homework: JavaScript loops
// #1
// The even/odd reporter
// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").
function func_TheEvenOddReporter() {
    for (var i = 0; i <= 20; i++) {
        if (i === 0) {
                console.log(i +  " is even");
        }
        else if (i % 2 === 0) {
                console.log(i + " is even");   
        }
        else {
                console.log(i + " is odd");
        }
    }
}


// #2
// Multiplication Tables
// Write a for loop that will iterate from 1 to 12. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 12.
function func_MultiplicationTables() {
    const number = parseInt(prompt('Input an integer'));
    for(let i = 1; i <= 10; i++) {
        const result = i * number;
        console.log(`${number} * ${i} = ${result}`);
    }    
}



// #3
// The Grade Assigner
// Use the grade assigner code you wrote from the conditionals exercises for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.
function func_TheGradeAssigner() {
    for(let i = 60; i <= 100; i++) {
        var c = new gradeResult(i);
        console.log(`${i} is Grade ${c.gradeResult()}`);
    }
}



// #4
// Golf
// Using the Golf condition you made before in the conditionals exercise, log out the nickname of every score from 1 to 8 on a par 5 hole
// Bonus: Use a nested for loop to run the same piece of code, but with par changing from 3 to 5
// Bonus: Generate a random par for each iteration
function func_Golf2() {
    golfScore(4, 1);
}


function golfScore(par, strokes) {
    var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"]
    if (1 == strokes) return names[0];
    else if (par -2 >= strokes) return names[1];
    else if (par -1 === strokes) return names[2];  
    else if (par === strokes) return names[3];
    else if (par + 1 === strokes) return names[4];
    else if (par + 2 === strokes) return names[5];
    else if (par + 3 <= strokes) return names[6];
}



// #5
// 99 Bottles of Beer
// Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal. If you're unfamiliar with the song, you can find the lyrics here.
// Make sure your program can handle both singular and plural cases (i.e. both "100 bottles of beer" and "1 bottle of beer").

function func_lyrics99BottlesOfBeer() {
    const response = lyrics();
    console.log(response);
}

function lyrics() {
    var n = 99;
    var lyrics = "Lyrics of the song 99 Bottles of Beer\n\n";

    while (n > 1) {
      var m = n - 1;
      lyrics += n + " bottles of beer on the wall, " + n + " bottles of beer.\nTake one down and pass it around, " + m + " bottle" + (m===1?"":"s") + " of beer on the wall.\n\n";
      n--;
    }
    
    lyrics += n + " bottle of beer on the wall, " + n + " bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\n\n";
    lyrics += "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n\n";
  
    return lyrics;
  }