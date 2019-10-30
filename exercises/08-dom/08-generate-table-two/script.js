/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    let target = document.getElementById("target");
    let table = document.createElement('table');
        target.appendChild(table)

    for(let i = 0; i < 10; i++){
        let ligne = document.createElement('tr');
        for (let l = 0; l < 10; l++){
            let cellule = document.createElement('td');
            ligne.appendChild(cellule);
            let multiplication = (i+1)*(l+1);
            cellule.innerHTML = multiplication;

        }
        
        
        table.appendChild(ligne);
    }
    document.querySelectorAll("tr")
    // your code here
})();
