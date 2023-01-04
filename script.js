// Start
const demoContent = document.getElementById("demo-content");
// Heading One
const headingOne = document.createElement("h1");
headingOne.innerHTML = "This Is Heading One";
demoContent.appendChild(headingOne);
headingOne.style.textAlign = "center";
headingOne.style.color = "white";
headingOne.style.backgroundColor = "darkcyan";
headingOne.style.padding = "5px";
headingOne.style.margin = "2px";

// Heading Two
const headingTwo = document.createElement("h2");
headingTwo.innerHTML = "This Is Heading Two";
demoContent.appendChild(headingTwo);
headingTwo.style.textAlign = "center";
headingTwo.style.color = "white";
headingTwo.style.backgroundColor = "darkcyan";
headingTwo.style.padding = "5px";
headingTwo.style.margin = "2px";

// Heading Three
const headingThree = document.createElement("h3");
headingThree.innerHTML = "This Is Heading Three";
demoContent.appendChild(headingThree);
headingThree.style.textAlign = "center";
headingThree.style.color = "white";
headingThree.style.backgroundColor = "darkcyan";
headingThree.style.padding = "5px";
headingThree.style.margin = "2px";

// Heading Four
const headingFour = document.createElement("h4");
headingFour.innerHTML = "This Is Heading Four";
demoContent.appendChild(headingFour);
headingFour.style.textAlign = "center";
headingFour.style.color = "white";
headingFour.style.backgroundColor = "darkcyan";
headingFour.style.padding = "5px";
headingFour.style.margin = "2px";

// Heading Five
const headingFive = document.createElement("h5");
headingFive.innerHTML = "This Is Heading Five";
demoContent.appendChild(headingFive);
headingFive.style.textAlign = "center";
headingFive.style.color = "white";
headingFive.style.backgroundColor = "darkcyan";
headingFive.style.padding = "5px";
headingFive.style.margin = "2px";

// Heading Six
const headingSix = document.createElement("h6");
headingSix.innerHTML = "This Is Heading Six";
demoContent.appendChild(headingSix);
headingSix.style.textAlign = "center";
headingSix.style.color = "white";
headingSix.style.backgroundColor = "darkcyan";
headingSix.style.padding = "5px";
headingSix.style.margin = "2px";

// Paragraph Text
const paraText = document.createElement("p");
paraText.innerHTML =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque accumsan libero a mauris pellentesque vestibulum.";
demoContent.appendChild(paraText);

// List
console.log(demoContent);
const newList = document.createElement("ul");
newList.setAttribute("id", "update-list");
demoContent.appendChild(newList);
const newList2 = document.getElementById("update-list");
console.log(newList2);

// List One
const newElementOne = document.createElement("li");
newElementOne.innerText = "List 1";
newList2.appendChild(newElementOne);

// List Two
const newElementTwo = document.createElement("li");
newElementTwo.innerText = "List 2";
newList2.appendChild(newElementTwo);

// List Three
const newElementThree = document.createElement("li");
newElementThree.innerText = "List 3";
newList2.appendChild(newElementThree);

// List Four
const newElementFour = document.createElement("li");
newElementFour.innerText = "List 4";
newList2.appendChild(newElementFour);

// List Five
const newElementFive = document.createElement("li");
newElementFive.innerText = "List 5";
newList2.appendChild(newElementFive);
