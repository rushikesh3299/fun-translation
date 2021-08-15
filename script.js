var inputArea = document.querySelector(".input-area");
var outputArea = document.querySelector(".output-area");
var button = document.querySelector(".btn");

var apiURL={yoda : 'https://api.funtranslations.com/translate/yoda.json',
            pirate : 'https://api.funtranslations.com/translate/pirate.json',
            catalan : 'https://api.funtranslations.com/translate/catalan.json',
            jive : 'https://api.funtranslations.com/translate/jive.json'
    }


function getFullReq(inputText,langSel){
    return apiURL[langSel] + "?" + "text=" + inputText;
}

function errorHandlar(error){
    console.log("Error occured: ", error);
    alert("Something went wrong. Try after some time");
}

function callapi(){
    var inputText = inputArea.value;
    var langSel = document.querySelector('#lang').value;
    
    fetch(getFullReq(inputText, langSel))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputArea.innerText = translatedText;
    })
    .catch(errorHandlar)
};

button.addEventListener("click", callapi);
