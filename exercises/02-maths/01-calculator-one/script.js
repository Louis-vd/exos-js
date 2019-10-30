/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

        
    
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", () => {

        var add1 = document.getElementById('op-one').value;
        var add2 = document.getElementById('op-two').value;
        var totalAdd = parseInt (add1) + parseInt (add2);
        onClick = alert(totalAdd);

    
        // perform an addition
    });

    document.getElementById("substraction").addEventListener("click", () => {
        var add1 = document.getElementById('op-one').value;
        var add2 = document.getElementById('op-two').value;
        var totalAdd = parseInt (add1) - parseInt (add2);
        onClick = alert(totalAdd);
        // perform an substraction
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        var add1 = document.getElementById('op-one').value;
        var add2 = document.getElementById('op-two').value;
        var totalAdd = parseInt (add1) * parseInt (add2);
        onClick = alert(totalAdd);
        // perform an multiplication
    });

    document.getElementById("division").addEventListener("click", () => {
        var add1 = document.getElementById('op-one').value;
        var add2 = document.getElementById('op-two').value;
        var totalAdd = parseInt (add1) / parseInt (add2);
        onClick = alert(totalAdd);
        // perform an division
    });
})();
