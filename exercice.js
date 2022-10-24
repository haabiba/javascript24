
/*document.querySelector("p").style.backgroundColor = "red";
document.querySelector(".example").style.backgroundColor = "red";*/
/*Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name*/
console.log(document.querySelector("p"))
/*Get each of the the paragraph using document.querySelector('#id') and by their id
*/


console.log(document.querySelector('#titleid').innerHTML);


/*Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name*/


const allTitles = document.querySelectorAll("p");
// loop through the paragraphs and print the innerHTML
allTitles.forEach((allTitle) => {
	console.log(allTitle.innerHTML);
});
/*Loop through the nodeList and get the text content of each paragraph*/
const articles = document.querySelectorAll('p');

articles.forEach(a => {
  a.style.fontFamily = 'Comic Sans MS';
});
const articles1 = document.querySelectorAll('p');

for (let i = 0; i < articles1.length; i++) {
  articles1[i].style.fontFamily = 'Comic Sans MS';
}
/*Set a text content to paragraph the fourth paragraph,Fourth Paragraph
*/
var time = 0;

function changeText(txt) {
    var txt = (time === 0) ? "fourth Paragraph" : "Fourth Paragraph";
        document.getElementById('titleid4').innerHTML = txt;
    time++;
}
/*Set id and class attribute for all the paragraphs using different attribute setting methods*/
//The HTML id attribute is used to specify a unique id for an HTML element.
//The HTML class attribute is used to specify a class for an HTML element.

//document.getElementById("titleid").setAttribute("class", "titleid"); 
const allTitles1 = document.getElementsByClassName('title')

console.log(allTitles1) //HTMLCollections
console.log(allTitles1.length) // 

for (let i = 0; i < allTitles1.length; i++) {
  console.log(allTitles1[i]) // prints each elements in the HTMLCollection
}
//Exercise: Level 2

//Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
const articlesj = document.querySelectorAll('p');

articlesj.forEach(a => {
  a.style.fontFamily = 'Comic Sans MS';
  a.style.color="red";
  a.style.background="black";
  a.style.border="3px solid #f6ff33";
  a.style.fontSize="30px"
});
/*Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color*/
const allTitles2 = document.getElementsByClassName('title')

console.log(allTitles2) //HTMLCollections
console.log(allTitles2.length) // 

for (let i = 0; i < allTitles2.length; i++) {
    if (i%2===0){
 allTitles2[i].style.color = "green"// prints each elements in the HTMLCollection
}else {
 allTitles2[i].style.color = "red"
}
}
//Set text content, id and class to each paragraph

document.querySelectorAll(".title,#titleid").forEach(function(elem){
  console.log(elem.innerHTML);
});







