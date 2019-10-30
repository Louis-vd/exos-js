/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {
        let numbers = document.getElementById("numbers").value;
        numbers = numbers.split(", "); //transforme en array ma string
        numbers = numbers.sort((a,b) => a -b); //trie les nombres 
        numbers = numbers.join(", ") //retransforme en string
        alert(numbers);
    
        // your code here
    });
})();
