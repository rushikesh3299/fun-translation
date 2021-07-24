var inputArea = document.querySelector(".input-area");
var outputArea = document.querySelector(".output-area");
var button = document.querySelector(".btn");

var apiURL="https://api.funtranslations.com/translate/yoda.json";

function getFullReq(inputText){
    return apiURL + "?" + "text=" + inputText;
}

function errorHandlar(error){
    console.log("Error occured: ", error);
    alert("Something went wrong. Try after some time");
}

function callapi(){
    var inputText = inputArea.value;
    
    fetch(getFullReq(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputArea.innerText = translatedText;
    })
    .catch(errorHandlar)
};

button.addEventListener("click", callapi);
