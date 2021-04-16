
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}

function compute()
{
    
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
var interest = (principal * years * rate) /100;
    var year = new Date().getFullYear()+parseInt(years);
    
    if (principal < 1) {
        alert("enter a positive number");
        document.getElementById("principal").focus();
    } else {
        document.getElementById("result").innerHTML = "if you deposit: " + principal + "\<br\>" + 
"at an interest rate of: " + rate + "%" "\<br\>"  +
"You will receive an interest of " + interest + "\<br\>"  +
"at the end of " + year
    
    }
        
