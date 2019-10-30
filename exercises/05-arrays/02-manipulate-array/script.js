/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {document.getElementById("run").addEventListener("click", () =>{
    const fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

         var first = fruits.shift()
         //Supprime le premier element du tableau
         var last = fruits.pop()
        //Suprime le dernier element du tableau
        var newLength = fruits.unshift('banane')
        //Ajoute 'banane' au début du tableau
        var newLenght = fruits.push('kiwi')
        //Ajoute kiwi à la fin du tableau

        console.log(fruits)





    })

    // your code here
})();
