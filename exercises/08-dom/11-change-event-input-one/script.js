/* becode/javascript
 *
 * /08-dom/11-change-event-input-one/script.js - 8.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
    document.getElementById("pass-one").addEventListener("input", () =>{
    
    document.getElementById("pass-one").maxLength = "10";
    document.getElementById("counter").innerHTML = document.getElementById("pass-one").value.length +"/10";
    })
})();
