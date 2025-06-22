let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest(){

    //Set the test text
    document.getElementById("inputText").value = testText;

    document.getElementById("userInput").readOnly = false;
    document.getElementById("userInput").innerHTML = "";
    document.getElementById("userInput").value = "";
    
    startTime = new Date().getTime();

    //Change button text and functionality
    // var button = document.getElementById("btn");
    // button.innerHTML = "End test";
    // button.onclick = endTest;

    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML =  "<h2>Test Going on</h2>" 

}

function endTest(){

    endTime = new Date().getTime();

    //Disable user input
    document.getElementById("userInput").readOnly = true;

    //Calculate elapsed time and wpm
    var timeElapsed = (endTime - startTime) / 1000; //in seconds
    var userTypedText = document.getElementById("userInput").value;

    // Split using regex to count words
    var typedWords = userTypedText.split(/\s+/).filter(function (word){ return word !== ""; }).length;

    var wpm = 0;

    if(timeElapsed !== 0 && !isNaN(typedWords))
    {
        wpm = Math.round((typedWords / timeElapsed)*60); // time is in seconds so * 60 to get wpm 
    }

    //Display results
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML =  "<h2>Typing Test Results:</h2>" +
    "<p>Words Typed: " + typedWords + "</p>" +
    "<p>Time Elapsed: " + timeElapsed.toFixed(2) + " seconds</p>" +
    "<p>Words Per Minute (WPM): " + wpm + "</p>";

    //Reset the button
    // var button = document.getElementById("btn");
    // button.innerHTML = "Start Test";
    // button.onclick = startTest;
}

