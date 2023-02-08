import { jokes } from './jokes.js';
import { quotes } from './quotes.js';
console.log(quotes);
let jokePara = document.getElementById("ParaGraph");
let jokeBtn = document.getElementById("jokeoneBtn");
let qouteBtn = document.getElementById("qoutetwoBtn");
let HeadingHub = document.getElementById("Heading");
let jokeNumber = 0;
let qouteNumber = 0;
function jokeFunc() {
    let jokeHead = "This is a Joke";
    HeadingHub.innerHTML = jokeHead;
    if (jokeNumber >= jokes.length) {
        alert("There is not more Jokes");
    }
    if (jokeNumber >= jokes.length) {
        jokeNumber = 0;
    }
    let jokesResult = jokes[jokeNumber];
    jokePara.innerHTML = `"${jokesResult}"`;
    jokeNumber++;
}
jokeBtn.addEventListener("click", jokeFunc);

function qouteFunc() {
    let qouteHead = "This is a Qoute";
    HeadingHub.innerHTML = qouteHead;
    if (qouteNumber >= quotes.length) {
        alert("There is not more Qoutes");
    }
    if (qouteNumber >= quotes.length) {
        qouteNumber = 0;
    }
    let qouteResult = quotes[qouteNumber];
    jokePara.innerHTML = `"${qouteResult}"`;
    qouteNumber++;
   
}
qouteBtn.addEventListener("click", qouteFunc);
