
var inputtextarea = document.querySelector("#input-text-area");
var button = document.querySelector("#button-translate");
var outputarea = document.querySelector("#output-area");

var url = "https://api.funtranslations.com/translate/roman-numerals.json"

function translator(){
    var text = url + "?" + "text=" +  inputtextarea.value; 
     return fetch(text)
    .then(response => response.json())
    .then(json => { outputarea.innerHTML =  json.contents.translated })
};

button.addEventListener("click", function raja(){
 translator();
});