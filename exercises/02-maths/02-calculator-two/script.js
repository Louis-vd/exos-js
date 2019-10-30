/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {

        var add1 = document.getElementById('op-one').value;
        var add2 = document.getElementById('op-two').value;
        var totalAdd = parseInt(add1) + parseInt(add2);

        switch (totalAdd) {
            case parseInt (add1) - parseInt (add2):
                onClick = alert(totalAdd);
                break;
            case parseInt (add1) * parseInt(add2):
                onClick = alert (totalAdd);

        }
        // perform the operation
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
