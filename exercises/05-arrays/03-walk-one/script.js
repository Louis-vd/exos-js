/* becode/javascript
 *
 * /05-arrays/03-walk-one/script.js - 5.3: parcours de tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () =>{
    const fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "kiwi",
        "banane",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    for(var i=0; i<fruits.length; i++){
        console.log(fruits[i]);
    }
    // Création d'une variable "i" qui commence au premier élément du tableau "0" ; Tant que la variable i est plus petite que la longueur du tableau ; on fait i+1 (0,1,2,...)

})

    // your code here
})();
