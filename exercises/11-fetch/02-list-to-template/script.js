/* becode/javascript
 *
 * /11-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click",async() =>{
        try {
            let request = await fetch('http://localhost:3000/heroes')
            let xmen = await request.json();
            document.getElementById('target').innerHTML = xmen
            
        }
        catch(error){
            console.error(error)
        
        }
        
            




    })
    // your code here
})();
