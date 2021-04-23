let activityDisplay = document.querySelector('.display')
const baseURL = 'http://www.boredapi.com/api/activity/';


//Create Button Mechanism
const clickMe = document.querySelector('button');


//Start with Event Listener FX
clickMe.addEventListener('click', (e) => {
    e.preventDefault()

fetch(baseURL)
.then (function(response) {
    // console.log(response);
    return response.json();
    // displayResults(json);
})

.then (function(json) {
    console.log(json.activity)
    displayResults(json)
})

})

//Pass JSON into displayResults
function displayResults(json) {

    while (activityDisplay.firstChild) {
        activityDisplay.removeChild(activityDisplay.firstChild); //this while loop calls the new results to replace the old results; connect this to the PARENT of the child (in this case the display class of your div where you want to append the "printActivity")
     }

    let printActivity = document.createElement('p');
    printActivity.innerText = `How about you: ${json.activity}?`; 
    activityDisplay.appendChild(printActivity)

}