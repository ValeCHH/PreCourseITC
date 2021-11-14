let codingLanguages = ["HTML", "CSS", "JavaScript"];
let sentence=  "This page was built using: " + codingLanguages[0] + ", " + codingLanguages[1] + " and " + codingLanguages[2];

document.getElementById("footer").innerHTML = sentence;