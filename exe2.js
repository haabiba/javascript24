
 
var i = 0;
function change1() {
  var doc = document.getElementById("color1");
  var color = ["black", "blue", "brown", "green" , "red"];
  doc.style.color = color[i];
  i = (i + 1) % color.length;
}
setInterval(change1, 1000);
var i = 0;
function change( ) {
    const d = new Date();
    document.getElementById("background1").innerHTML = d;
    
  var doc = document.getElementById("background1");
  var color = ["black", "blue", "brown", "green" , "red"];
  doc.style.background = color[i];
  i = (i + 1) % color.length;
}
setInterval(change, 1000);
/*Completed challenge has background green
Ongoing challenge has background yellow
Coming challenges have background red
*/
const allTitles2 = document.getElementsByClassName('title')

console.log(allTitles2) //HTMLCollections
console.log(allTitles2.length) // 

for (let i = 0; i < allTitles2.length; i++) {
    if (i===0) {
        allTitles2[i].innerHTML.style.background = "green";
	} else if (i===1) {
		allTitles2[i].innerHTML.style.background = "yellow";
	} else   {
        allTitles2[i].innerHTML.tyle.background = "red"
	}
}


 


