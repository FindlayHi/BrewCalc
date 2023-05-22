function calculate() {
    var coffee = document.getElementById("coffee").value;
    var ratio = document.getElementById("ratio").value;
    if (coffee && ratio) {
        var water = coffee * ratio;
        document.getElementById("output").innerHTML = "You need " + water + " grams of water.";
    } else {
        document.getElementById("output").innerHTML = "Please enter valid numbers.";
    }
}
