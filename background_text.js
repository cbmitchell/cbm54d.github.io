var text = ["Welcome", "Hi", "Sup dude"];
var counter = 0;
var elem = document.getElementById("textline1");

function change() {
    elem.innerHTML = text[counter];
    counter++;
    if (counter >= text.length) {
        counter = 0;
    }
}

setInterval(change, 1000);