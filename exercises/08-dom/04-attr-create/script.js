/* becode/javascript
 *
 * /08-dom/04-attr-create/script.js - 8.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let x = document.getElementById("source").getAttribute("data-image");
    console.log(x);

    let y = document.getElementById("target");
    let imgTag = document.createElement("img");
    imgTag.setAttribute('data-image', " ");
    let finale = y.appendChild(imgTag);
    console.log(y);
    


    // your code here
})();
