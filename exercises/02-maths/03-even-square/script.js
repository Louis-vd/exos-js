/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        let arr_numbers = [];
        let arr_square = [];

        for(let i = 1; i <= 21; i++){
            if(i%2 == 0){
                arr_numbers.push(i);
            }
        }
        arr_square = arr_numbers.map(x => x*x);
        let message = arr_square.join(", ");
        console.log(message);
        alert(message);
    });
})();
