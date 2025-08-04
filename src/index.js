

let word = ["gato", "perro", "juanito", "macarena"];
const selectedword = Math.floor(Math.random() * 4);
console.log(word);

const nrearray = word[selectedword].split('')
shadowLetter = nrearray.splice(2, 1);
console.log(nrearray);


const theWords = nrearray.document.getElementById('letter');

theWords.innerHTML =`
        <h1>${this.nrearray}</h1>
`


const inicial = document.getElementById('form'); 
const result = inicial; 


inicial.addEventListener("submit", () => {
if (word === nrearray) {
    alert('correct')
} else {
    alert ('incorrect')
}
})




