// Exercises #1: Arrays
// #1(a)
// Starting with an empty array called rainbowColors:
// Add "orange" to the end of the array
// Add "red" to the start of the array
// Add "yellow" to the end
// Add "green", "blue", "indigo", and "violet" to the end of the array
// Bonus: Do this using one method
// Log out the length of the array
// Log out the second item
// Log out the last item (make this flexible/dynamic!)
// Log out the index of the string "blue"

// Bonus: Find out the difference between .slice and .splice
// Create an array called twoColors using one method - don't change the rainbowColors array! Essentially pull two colors out of the array (say, between the index of 1 and 3)

// Starting with this array const nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];, remove the duplicates destructively using slice or splice (whichever one is appropriate)
// Bonus: Work with arrays of arrays

// Starting with this array const arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];
// Access "inner array first item" and print it out
// Print "third" by using a dynamic index
// Bonus: Loop through the second inner array! Print out the first item, the second item, then the third item

function func_WorkingwithArrays() {
    console.clear();

    const rainbowColors = [];
    rainbowColors.push("orange");
    console.log(rainbowColors);
    rainbowColors.unshift("red");
    console.log(rainbowColors);
    rainbowColors.push("yellow");
    console.log(rainbowColors);
    rainbowColors.push("green", "blue", "indigo","violet");
    console.log(rainbowColors);
    console.log(rainbowColors.length);
    console.log(rainbowColors[1]);
    console.log(rainbowColors.length-1);
    console.log(rainbowColors.indexOf("blue"));

    let twoColors = [];
    twoColors = rainbowColors.slice(1, 3);
    console.log(twoColors);
    twoColors = rainbowColors.slice(0, rainbowColors.length);
    console.log(twoColors);

    const nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];
    console.log(nums);
    nums.splice(2, 2);
    console.log(nums);
    nums.splice(4, 1);
    console.log(nums);

    const arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];
    console.log(arrOfArrs[0][0]);
    console.log(arrOfArrs[1][2]);
    for(let i=0; i < 3; i++){
        console.log(arrOfArrs[1][i]);
    }
}


// #1(b)
// Create an array to hold your top five choices of something (dogs, books, presidents, whatever you want).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice", "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

function func_YourTopChoices() {
    console.clear();
    const favoriteColors = ["white", "black", "silver", "gold", "blue", "purple", "yellow", "red"];
    favoriteColors.forEach((e, index) => {console.log(`My #${index+1} choice is ${e}`)})
    func_YourTopChoices2(favoriteColors);
}
function func_YourTopChoices2(favoriteColors) {
    
    favoriteColors.forEach((e, index) => {console.log(`My ${index+1}${(index+1 == 1) ? `st` : (index+1 == 2)? `nd` : (index+1 == 3)? `rd` : `th`}  choice is ${e}`)})
}


// Exercises #2: Objects
// #2(a)
// The Reading List
// Keep track of which books you have read and which books you want to read!

// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you have read it yet).
// Iterate through that array of books
// For each book, log the book title and book author like so: "'Sapiens', by Yuval Noah Harari".
// Now use an if/else statement to change the output depending on whether you read it yet or not.
// If you have read it, log a string like 'You have already read "Sapiens", by Yuval Noah Harari'
// If not, log a string like 'You still need to read "A Life on Our Planet", by David Attenborough.'"
function func_TheReadingList() {
    console.clear();
    let bookList = [
        {title: "Book 1", author: "aa", alreadyRead: true},
        {title: "Book 2", author: "bb", alreadyRead: true},
        {title: "Book 3", author: "cc", alreadyRead: false},
        {title: "Book 4", author: "dd", alreadyRead: true}
    ];
    bookList.forEach(e => {
        if (e.alreadyRead) {
            console.log("You have already read " + e.title + ", by " + e.author);
        }
        else {
            console.log("You still need to read " + e.title + ", by " + e.author);
        }
    });
}



// #2(b)
// The Recipe Card
// Never forget another recipe!
// Create an object to hold information on your favorite recipe. It should have properties for a title (a string), a number of servings, and ingredients (an array of strings).
// On separate lines log the recipe information so it looks like this:

// Ginger, Apple and Banana Smoothie

// Serves: 2

// Ingredients:

// - 500ml Milk
// - 2/3 cups of vanilla protein powder
// - 2 tbs rolled oats
// - Pinch of cinnamon
// - 2 cups of baby spinach leaves
// - 2 frozen bananas
// - 2 roughly chopped apples
// - 1/2 avocado
// - 2 tsp fresh ginger
// - 6 ice cubes
// Note: That is actually a very nice smoothie
function func_TheRecipeCard() {
    console.clear();
    let recipe = {
        title : "Ginger, Apple and Banana Smoothie",
        numOfServings : 2,
        ingredients : [ "500ml Milk", "2/3 cups of vanilla protein powder", "2 tbs rolled oats", "Pinch of cinnamon", "2 cups of baby spinach leaves",                    "2 frozen bananas", "2 roughly chopped apples", "1/2 avocado", "2 tsp fresh ginger", "6 ice cubes"]
    }
    console.log(`${recipe.title}\n\nServes: ${recipe.numberOfServes}\n\nIngredients:\n\n${recipe.ingredients.join('\n')}`)    
}



// #2(c)
// The Movie Database
// It's like IMDB, but much much smaller!

// Create an object to store the following information about your favorite movie: title (a string), duration (a number), director (a string) and stars (an array of strings).
// Print out the movie information like so: "'The Life Aquatic' lasts for 118 minutes, and was directed by Wes Anderson. Stars: Bill Murray, Cate Blanchett, Anjelica Huston, Jeff Goldblum and Willem Dafoe."
// Maybe the join method will be helpful
function func_TheMovieDatabase() {
    console.clear();
    let movieList = [
        {title: "The Life Aquatic", duration: 118, director: "Wes Anderson", stars: ["Bill Murray", "Cate Blanchett", "Anjelica Huston", "Jeff Goldblum and Willem Dafoe"]},
        {title: "Movie 2", duration: 95, director: "Director 2, Director 1", stars: ["H", "B"]},
        {title: "Movie 3", duration: 108, director: "Director 3", stars: ["Y"]},
        {title: "Movie 4", duration: 125, director: "Director 4", stars: ["A", "b", "c"]}
    ];
    
    movieList.forEach(e => { console.log("'" + e.title + "' lasts for " + e.duration + " minutes, and was directed by " + e.director + ". Stars: " + e.stars.join(", ") + ".") });
}



// Exercises #3: Functions
// #3(a)
// Driving Age
// Write a function that receives a userAge called canDrive
// If the received age is less than 16, print "Sorry, you can't drive yet"
// If the received age is equal to or over 16, print "Drive away!"
// Bonus: If the user can't drive yet, tell them how many years they will have to wait (e.g. "Sorry, you have 4 years to wait until you can drive")
function func_DrivingAge() {
    console.clear();
    canDrive(parseInt(prompt("Age?")));
}
function canDrive(age) {
    let minAge = 16;
    if(age < minAge) console.log(`Sorry, you have ${minAge - age} year(s) to wait until you can drive`)
    else console.log("Drive away!")
}



// #3(b)
// The World Translator
// Write a function called translator that receives a language (e.g. "fr", "eng" etc.). Log out the translated version (e.g. if the language is "eng" - log "Hello World", if the language is "fr" - log "Bonjour le monde" etc.)
function func_TheWorldTranslator() {
    console.clear();
    const lang = [
        { language: "English", word: "Hello World" },
        { language: "Malay"  , word: "Hai dunia" },
        { language: "French" , word: "Bonjour le monde" }
    ];
    
    let ivalue = prompt("Enter Language [english,malay,french]", "English");
    lang.forEach(e => {
        if (e.language.toUpperCase() == ivalue.toUpperCase()) {
            console.log("Language : "+e.language +", word : "+e.word);       
            return;
        }    
    });
}




// #3(c)
// The Age Calculator
// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:

// Takes 2 arguments: birthYear, and currentYear.
// Calculates the 2 possible ages based on those years.
// Outputs the result: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
function func_TheAgeCalculator() {
    console.clear();
    calculateAge(parseInt(prompt("Your DOB Year?")), parseInt(prompt("Current Year?")));
}
function calculateAge(dobYear, curYear) {
    let age1 = curYear - dobYear;
    let age2 = dobYear - curYear;
    console.log(`They are either ${age1} or ${age2}`);
}



// #3(d)
// The Lifetime Supply Calculator
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:

// Takes 2 arguments: age, and amountPerDay.
// Calculates the amount consumed for rest of the life (based on a constant max age).
// Outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amountPerDay, and round the result to a round number.
function func_TheLifetimeSupplyCalculator() {
    console.clear();
    calculateSupply(23, 3);
    calculateSupply(50, 3);
    calculateSupply(50, 2.5);
}
function calculateSupply(age, amountPerDay) {
    const maxAge = 90;
    console.log(`You will need ${((maxAge - age) * amountPerDay).toFixed(0)} to last you until the ripe old age of ${maxAge}`);
}



// #3(e)
// The Geometrizer
// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumference:

// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:

// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".
function func_TheGeometrizer() {
    console.clear();
    console.log(calcCircumference(3));
    console.log(calcArea(3));
}
function calcCircumference(radius) {
    //2πr
    return `The circumference is ${2*Math.PI*radius}`;
}
function calcArea(radius) {
    //πr2
    return `The area is ${Math.PI*radius*radius}`;
}



// #3(f)
// The Temperature Converter
// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C".

function func_TheTemperatureConverter() {
    console.clear();
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
        console.log(msg);
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



// #3(g)
// Working with Users
// Starting with this data...

// const users = [
//   {
//     email: "groucho@ga.co",
//     password: "chicken",
//     isAdmin: true
//   },
//   {
//     email: "harpo@ga.co",
//     password: "elephant",
//     isAdmin: false
//   },
//   {
//     email: "gummo@ga.co",
//     password: "pinkFairyArmadillo",
//     isAdmin: true
//   },
//   {
//     email: "zeppo@ga.co",
//     password: "dumboOctopus",
//     isAdmin: false
//   }
// ];
// Create a function that receives an ID (index), an email and a password. If the function was provided with an email and a password that matches up, log "You are logged in". Otherwise, log "Sorry, something went wrong".

// Bonus: Working with Users
// Don't receive an ID! Find the user based on the email
// Make a function that creates an account. e.g. createAccount("chico@gmail.com", "redLippedBatfish", false);
// This should just add another object into the array
// Make a function that deletes an account. e.g. deleteAccount("zeppo@ga.co");
// This should just remove an object from the array
// Bonus: Make this only work if the correct password was provided as a parameter too
// Make a function that updates an account. e.g. updateAccount("harpo@ga.co", "password", "ayeAye");
// Bonus: Instead of receiving two strings to illustrate the change (like above), receive an object so you could potentially change multiple things at once. e.g. updateAccount("harpo@ga.co", { password: "gharial", isAdmin: false });
// Bonus: Make this work only if the current password was also provided as a parameter. e.g. updateAccount("harpo@ga.co", "elephant", { password: "gharial", isAdmin: true });
// Add a few extra users and make a search function. I'll let you decide on the interface or the function signature

function func_WorkingwithUsers () {
    var c = new userProfile();
    console.clear();
    console.log(c.validateAccount());
    console.log(c.createAccount("chico@gmail.com", "redLippedBatfish", false));
    console.log(c.deleteAccount("zeppo@ga.co"));
    console.log(c.updateAccount1("harpo@ga.co", "password", "ayeAye"));
    console.log(c.updateAccount2("harpo@ga.co", { password: "gharial", isAdmin: false }));
    console.log(c.updateAccount3("harpo@ga.co", "elephant", { password: "gharial", isAdmin: false }));
}

function userProfile()
{

    const users = [
        {email: "groucho@ga.co", password: "chicken", isAdmin: true},
        {email: "harpo@ga.co", password: "elephant", isAdmin: false},
        {email: "gummo@ga.co", password: "pinkFairyArmadillo", isAdmin: true},
        {email: "zeppo@ga.co", password: "dumboOctopus", isAdmin: false}
    ];



    // validation
    var bProceed = true;
    var result = "";
    this.validateAccount = function ()
    {

        userEmail = prompt("Please enter an email");
        result = "Sorry, something went wrong";
        users.forEach(e => {
            if (bProceed && e.email == userEmail) {
                bProceed = false;
                result = "You are logged in";
            }
        })

        return result;
    }


    // create
    this.createAccount = function (userEmail, userPassword, userIsAdmin)
    {
        users.push({email: userEmail, password: userPassword, isAdmin: userIsAdmin});
        return users;
    }

    // update
    this.deleteAccount = function (userEmail)
    {
        let x = 0;
        users.forEach((e, index) => {
            if (bProceed && e.email == userEmail) {
                bProceed = false;
                x = index;
            }
        })
        users.splice(x, 1);
        return users;
    }

    // update
    this.updateAccount1 = function (userEmail, fieldName, NewFieldValue)
    {
        let obj = users.find(e => e.email == userEmail);
        for (const property in obj) {
            if (property == fieldName) {
                obj[property] = NewFieldValue;
            }
        }
        return users;
    }

    this.updateAccount2 = function (userEmail, arrUserInfo)
    {
        let obj = users.find(e => e.email == userEmail);
        let obj2 = arrUserInfo;
        for (const property in obj) {
            for (const property2 in obj2) {
                if (property == property2) {
                    obj[property] = obj2[property2];
                }
            }
        }
        return users;
    }

    this.updateAccount3 = function (userEmail, userPassword, arrUserInfo)
    {
        let obj = users.find(e => e.email == userEmail && e.password == userPassword);
        let obj2 = arrUserInfo;
        for (const property in obj) {
            for (const property2 in obj2) {
                if (property == property2) {
                    obj[property] = obj2[property2];
                }
            }
        }
        return users;
    }

}


// #3(h)
// A Transit Application
// Start with this data...

// const stations = ["Museum", "St. James", "Circular Quay", "Wynyard", "Townhall", "Central", "Redfern", "Macdonaldtown", "Newtown"];
// Create a function called travelFrom that receives a start station and an end station.

// Print the number of stops between the two stations. (e.g. log out "To go from 'Circular Quay' to 'Central' - you'll need to go through 2 stops")
// Print out the names of the stations on separate lines (e.g. log out "- Circular Quay", "- Wynyard", "- Townhall", "- Central")
// Bonus: A Transit Application
// Make this work if you want to go backwards! e.g. 'You want to travel from "Redfern" to "St. James"'
// Make it error-tolerant. E.g.:
// Make it case-insensitive - there should be no difference between "redfern", "Redfern" and "REDFERN"
// If someone passes in a station that doesn't exist, tell them
// Make it work across lines! I'll leave it up to you to create the data you need - but create arrays of multiple train lines in Sydney, and try it to get to print out the same things as above - but also things like "Swap lines at ....."
// This will be very, very difficult! Don't feel like you have to add in all the lines, just a few to prove that it is working
// Look at the hints below
// Hints
// You can receive the name of the line! (e.g. travelFrom("t2", "Circular Quay", "t3", "Canterbury"))
// Find the common station! (e.g. "t2" and "t3" both have "Central")
// Maybe drawing out the lines is a good approach!
// One of the easiest approaches to this is to treat a trip across lines as two separate trips
// An object with arrays stored under the name of the train lines might be a good way to approach it (e.g. const sydneyTrains = { t1: [], t2: [] };
// Note that if you want to use a variable to decide which line to access - dot notation won't work on an object! You'll have to think of another way (think square brackets!)
// Ask me questions about this if you want though!
// Work together as well - even if it is just in the planning stages

function transitApplication() {
    
    const stations = ["Museum", "St. James", "Circular Quay", "Wynyard", "Townhall", "Central", "Redfern", "Macdonaldtown", "Newtown"];

    this.travelFrom1 = function (startStation, endStation)
    {
        var msg = "";
        const stationInfo = [];
        var bProceed = false;
        let obj1 = stations.find(e => e == startStation);
        let obj2 = stations.find(e => e == endStation);

        if (obj1 == null || obj2 == null) {
            msg = (obj1 == null? `${startStation} is not exist` : "")
            msg += (obj2 == null? `${(msg != ""? `\n` : ``)}${endStation} is not exist` : "")
        }
        else {
            stations.forEach((e) => {
                if (e.toUpperCase() == startStation.toUpperCase()) { bProceed = true; }
                else if (e.toUpperCase() == endStation.toUpperCase()) { stationInfo.push(e); bProceed = false; }
                else { bProceed = bProceed; }
                if (bProceed) stationInfo.push(e); 
              });
    
            msg = `To go from '${startStation}' to '${endStation}' - you'll need to go through ${stationInfo.length - 2} stops\n`
            stationInfo.forEach((e, idx) => msg += `${idx != 0 && idx < stationInfo.length? ` ` : ``}- ${e}`)
        }

        return msg;
    }


}

function func_ATransitApplication() {
    var c = new transitApplication();
    console.log(c.travelFrom1("", "Central"));
    console.log(c.travelFrom1("Circular Quay", "Central"));
    console.log(c.travelFrom1("Circular Quay", "Central"));
}


