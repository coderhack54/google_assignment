// Access All Dom Elements

let toggle=document.getElementById("toggle");
let dark=document.querySelector(".dark");
let footer=document.querySelector(".footer");
let searchField = document.querySelector(".search-field");
let btn = document.querySelector(".btn");
let btn1 = document.querySelector(".btn1");
let img= document.querySelector("img");
let findOut = document.querySelector(".find-out");
let languages = document.querySelector(".languages");
let hrBreak = document.querySelector(".break");
let resultsContainer = document.getElementById("resultsContainer");
let gridicon = document.getElementById("gridicon")


// Dark Mode On

function darkModeOn () {
    dark.style.backgroundColor = "rgb(36,35,35)";
    footer.style.backgroundColor = "rgb(31,30,30)";
    dark.style.color = "lightgrey";
    footer.style.color = "grey";
    searchField.style.backgroundColor = "rgb(36,35,35)";
    searchField.style.color = "white";
    searchField.style.border = "1px solid rgb(95,95,95)";
    btn.style.backgroundColor = "rgb(53,52,52)";
    btn1.style.backgroundColor = "rgb(53,52,52)";
    btn.style.color = "lightgrey";
    btn1.style.color = "lightgrey";
    gridicon.style.fill="white"
    // findOut.style.color="rgb(39,124,223)";
    languages.style.color="rgb(39,124,223)";
    hrBreak.style.border="1px solid rgb(48,48,48)";
    resultsContainer.style.color="white";
    resultsContainer.style.backgroundColor="rgb(36,35,35)";
    resultsContainer.style.borderColor="rgb(95,95,95)";
    localStorage.setItem("darkMode","enabled");
}

// Dark Mode off
function darkModeOff() {
    dark.style.backgroundColor = "white";
    footer.style.backgroundColor = "rgb(238,238,238)";
    dark.style.color = "black";
    footer.style.color = "rgb(102,100,100)";
    searchField.style.backgroundColor = "white";
    searchField.style.color = "black";
    searchField.style.border = "0.8px solid rgba(223,225,229,0)";
    btn.style.backgroundColor = "rgb(248,248,248)";
    btn1.style.backgroundColor = "rgb(248,248,248)";
    btn.style.color = "rgb(88,88,88)";
    btn1.style.color = "rgb(88,88,88)";
    gridicon.style.fill="black"
    // findOut.style.color="blue";
    languages.style.color="blue";
    hrBreak.style.border="1px solid rgb(223,223,223)";
    resultsContainer.style.color="black";
    resultsContainer.style.backgroundColor="white";
    resultsContainer.style.borderColor="rgb(233, 228, 228)";
    localStorage.setItem("darkMode",null);
}


// Toggle Switch On or Off

toggle.addEventListener("click",function(){
    if(toggle.checked == true){
        darkModeOn();
    }else{
        darkModeOff();
    }
})

// Dark mode save in local storage

let saveDarkMode= localStorage.getItem("darkMode");
if(saveDarkMode==="enabled"){
    toggle.checked=true;
    darkModeOn();
}

// Handling search


const wordsArray = ["apple", "banana", "cherry", "mango", "orange", "strawberry", "watermelon"];

searchField.addEventListener("input",function(){
    let inputvalue= searchField.value.trim();
    let matchedWords=wordsArray.filter(item=>item.includes(inputvalue));
    resultsContainer.innerHTML="";
    if(inputvalue.length>0){
        matchedWords.forEach((word)=>{
            let matchedWordEl=document.createElement("p");
            matchedWordEl.textContent = word;
            matchedWordEl.style.textAlign="left"
            // highlight the matching element
    
            let highlightedWord = word.replace(new RegExp(inputvalue,"gi"),match=>`<span class="highlight">${match}</span>`);
            matchedWordEl.innerHTML = highlightedWord;
    
            resultsContainer.appendChild(matchedWordEl);
        })
        resultsContainer.style.display="block";
        searchField.style.borderBottomLeftRadius="0"
        searchField.style.borderBottomRightRadius="0";
    }else{
        resultsContainer.style.display="none";
        searchField.style.borderBottomLeftRadius="20px"
        searchField.style.borderBottomRightRadius="20px";
    }
})