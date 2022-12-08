//Your name
//Period
//Date

/*Provide a description about what this program does here*/

/*Write code to manipulate the elements on your index.html page.  
The elements must come to gether to resemble an image.  Your Greeting Card
must also include text and an music. */

document.body.style.backgroundColor = "green";
//santa head
var sH = document.getElementById("one");
sH.style.backgroundColor = "tan";
sH.style.borderRadius = "50%";
sH.style.position = "absolute";
sH.style.top = "295px";
sH.style.left = "650px";
sH.style.width = "150px";
sH.style.height = "150px";
//santa body
var sB = document.getElementById("two");
sB.style.backgroundColor = "red";
sB.style.borderRadius = "50%";
sB.style.position = "absolute";
sB.style.top = "445px";
sB.style.left = "625px";
sB.style.width = "200px";
sB.style.height = "250px";
//santa hat
var sHat = document.getElementById("three");
sHat.style.borderColor = "transparent";
sHat.style.width = "0px";
sHat.style.height = "0px";
sHat.style.top = "125px";
sHat.style.left = "655px";
sHat.style.position = "absolute";
sHat.style.borderBottomColor = "red";
sHat.style.borderStyle ="solid";
sHat.style.borderWidth = "70px"
sHat.style.borderBottomWidth = "150px"
//outside dots
var out = document.getElementById("four");
out.style.borderStyle = "dotted";
out.style.borderColor = "white";
out.style.width = "90%"
out.style.height= "625px";
out.style.borderWidth = "4.5em";
//button 1
var but1 = document.getElementById("five");
but1.style.borderRadius = "50%";
but1.style.backgroundColor = "white";
but1.style.position = "absolute";
but1.style.top = "505px";
but1.style.left = "715px";
but1.style.width = "23px";
but1.style.height = "23px";
//button 2
var but2 = document.getElementById("six");
but2.style.borderRadius = "50%";
but2.style.backgroundColor = "white";
but2.style.position = "absolute";
but2.style.top = "555px";
but2.style.left = "715px";
but2.style.width = "23px";
but2.style.height = "23px";
// button 3
var but3 = document.getElementById("seven");
but3.style.borderRadius = "50%";
but3.style.backgroundColor = "white";
but3.style.position = "absolute";
but3.style.top = "605px";
but3.style.left = "715px";
but3.style.width = "23px";
but3.style.height = "23px";
//ball on top of hat
var hatTop = document.getElementById("eight");
hatTop.style.borderRadius = "50%";
hatTop.style.backgroundColor = "white";
hatTop.style.position = "absolute";
hatTop.style.top = "192px";
hatTop.style.left = "701px";
hatTop.style.width = "50px";
hatTop.style.height = "50px";
//santa beard
var beard = document.getElementById("nine");
beard.style.borderRadius = "20%";
beard.style.backgroundColor = "white";
beard.style.position = "absolute";
beard.style.width = "150px";
beard.style.height = "70px";
beard.style.top = "395px";
beard.style.left = "650px";
//eye one
var eyeOne = document.getElementById("ten");
eyeOne.style.borderRadius = "50%";
eyeOne.style.backgroundColor = "black";
eyeOne.style.position = "absolute";
eyeOne.style.top = "363px";
eyeOne.style.left = "690px";
eyeOne.style.width = "17px";
eyeOne.style.height = "17px";
//eye two
var eyeTwo = document.getElementById("eleven");
eyeTwo.style.borderRadius = "50%";
eyeTwo.style.backgroundColor = "black";
eyeTwo.style.position = "absolute";
eyeTwo.style.top = "363px";
eyeTwo.style.left = "742px";
eyeTwo.style.width = "17px";
eyeTwo.style.height = "17px";
// merry text
var text = document.getElementById("twelve");
text.style.fontFamily = "'Marhey', cursive";
text.style.color = "red";
text.style.position = "absolute";
text.style.top = "90px";
text.style.left = "405px";
text.style.width = "500px";
text.style.fontSize = "5em";
//christmas text
var text2 = document.getElementById("thirteen");
text2.style.fontFamily = "'Marhey', cursive";
text2.style.color = "red";
text2.style.position = "absolute";
text2.style.top = "94px";
text2.style.left = "740px";
text2.style.width = "500px";
text2.style.fontSize = "5em";
//music placement
var music = document.getElementById("fourteen");
music.style.position = "absolute";
music.style.top = "580px";
music.style.left = "250px";
