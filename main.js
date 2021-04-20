

let collection = [];

function UserInput(){
    start.style.display="none";
for (i=0; i<3; i++){
collection.push(prompt("Enter any words")).i;

}
newPage.style.display = "none";
block.style.display = "block";
document.getElementById("names0").innerHTML = collection[0];
document.getElementById("names1").innerHTML = collection[1];
document.getElementById("names2").innerHTML = collection[2];
}
newPage.style.display = "none";
block.style.display = "none";





function flip(){
    start.style.display="none";
    block.style.display = "none";
    newPage.style.display = "block";
    let collection2 = collection.map(function(oneWord) {return oneWord.charAt(oneWord.length - 1) + oneWord.substring(1, oneWord.length - 1) + oneWord.charAt(0); });
document.getElementById("fname0").innerHTML = collection2[0];
document.getElementById("fname1").innerHTML = collection2[1];
document.getElementById("fname2").innerHTML = collection2[2];
}
console.log(collection);
console.log(collection2);