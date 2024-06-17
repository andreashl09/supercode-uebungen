const infoDiv = document.getElementById("info");
const containerDiv = document.getElementById("container");
infoDiv.innerHTML = "<h1>Hello World</h1>";
infoDiv.innerHTML += "<h2>How are you?</h2>";

containerDiv.innerHTML = "<p>start of the element</p>";

//document.write() ist eine Funktion und wird unabhänngig ihrer Position im Quellcode am Ende eingefügt.
document.write("<p>end of the element</p>");