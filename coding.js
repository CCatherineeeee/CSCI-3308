function display2_1() {
  var myanswer  = "My answer goes here: Output is nothing because there's nothing named dragonball in saiyan; True; False; === means checking both type and value while == is only checking value. Null and undefined have the same value, so the first outcome is true. But they are not the same type, so the second outcome is false." // TODO 2.1: Fill in Answer here after the :
  document.getElementById("21answer").innerHTML = myanswer; // Do not change
}
function display2_2() {
  var myanswer  = "My answer goes here: It will gives an error because it's using strict. If that is removed, the " // TODO 2.2: Fill in Answer here
  document.getElementById("22answer").innerHTML = myanswer; // Do not change
}

function display2_5() {
  var myanswer  = "My answer goes here: I use the 'document.getElementById('div_1134').children' order. It can help me get the child with id 'div_1134' without going to the HTML." // TODO 2.5: Fill in Answer here
  document.getElementById("25answer").innerHTML = myanswer; // Do not change
}

function countDiv() { // Do not add or remove lines to this function
    var divs = document.getElementsByTagName('div'); // TODO: Question 2.3: Use the document Object to get the number of divs in the HTML page. Replace dummyMethod with the correct one.
    alert("Number of divs in this page is: " + divs.length); // Do not change
}

function makeOrange() { // Do not add or remove lines to this function
    var narutos = document.getElementsByName('naruto'); // TODO: Question 2.4: Use the document Object to get all tags named "naruto" in the HTML page. Replace dummyMethod with the correct one.
    for(var i=0; i< narutos.length; i++) { // Do not change
        narutos[i].style.color = 'orange'; // Do not change
    }
}

function getChildrenTags() { // Do not add or remove lines to this function
  var children = document.getElementById("div_1134").children; // TODO: Question 2.5 Use the appropriate function to get all the children of a div named 'div_1134'
  var tagNames = ""; // Do not change
  for (var i = 0; i < children.length; i++) {// Do not change
    console.log(children[i].tagName);// Do not change
    tagNames += children[i].tagName +", " ;// Do not change
  }// Do not change
  alert(children.length); // Do not change
  alert("The tags that I found are: " + tagNames);// Do not change
}
