/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {
        let number = document.getElementById("number").value;
        function factorize(num){
            if(num == 0 || num == 1){
                return 1;
            }else{
                return num*factorize(num-1); 
            } 
        }
        alert(factorize(number));
    });
        // your code here
    
})();
