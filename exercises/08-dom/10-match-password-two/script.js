/* becode/javascript
 *
 * /08-dom/10-match-password-two/script.js - 8.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () =>{

        var a = document.getElementById("pass-one").value;
        var b = document.getElementById("pass-two").value;
        if (a==b){ 
            document.getElementById("pass-one").style.borderColor = "green";
            document.getElementById("pass-two").style.borderColor = "green";
            
        }
        else {
            document.getElementById("pass-one").classList.add("error");
            document.getElementById("pass-two").classList.add("error");
    
       }
    })
    // your code here
})();
