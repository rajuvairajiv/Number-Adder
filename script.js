
document.getElementById("addButton").addEventListener("click", function () {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = document.getElementById("result");

    // Convert input values to numbers
    let sum = parseFloat(num1) + parseFloat(num2);

    // Display result
    result.innerHTML = isNaN(sum) ? "Invalid input" : sum + " is the result";
});

document.getElementById("reset").addEventListener("click", function () {


    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").innerHTML = "";

})
