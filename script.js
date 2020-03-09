// 1. Write code to allow visitors of the page to customize it to their liking. There is a
// form on the page that accepts a name (to be used in a greeting when the user visits
// the page) and a color picker to allow the user to choose their preferred background
// color/foreground color combination. Write the necessary code to capture these values
// when the form is submitted (prevent the default action on the form submission button to
// achieve this) and store these values in localStorage (so that it persists on the user’s
// computer and their preferences are saved indefinitely). Next, write a function to apply
// the preferences if they have been set and call it each time the page loads. You may
// also want to call this function again when the user saves their preferences to
// immediately apply them. Make sure you also notify the user somehow that the preferences
// were saved.
let form = document.getElementById("preferences-form");
let fgColor = document.getElementById("foreground-color");
let body = document.querySelector("body");
let bgColor= document.getElementById("background-color");

function dataSync()
{
    localStorage.setItem("name", document.getElementById("name").value);
    localStorage.setItem("fgColor", document.getElementById("foreground-color").value);
    localStorage.setItem("bgColor", document.getElementById("background-color").value);
    
    let name = localStorage.getItem("name");
    let fgColor = localStorage.getItem("fgColor");
    let bgColor = localStorage.getItem("bgColor"); 
    
    if(fgColor != null)
        document.body.style.color = fgColor;

    if(bgColor != null)
        document.body.style.backgroundColor = bgColor;
}

window.addEventListener('load', dataSync());
document.getElementById("submit").addEventListener("click", function(event)
{
    dataSync();
    window.alert("Preferences saved!");
    event.preventDefault();
});