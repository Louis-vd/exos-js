/* becode/javascript
 *
 * /11-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(() => {
    function templateThings(data, id)
{
    let getTemplate = document.getElementsByTagName("template")[0];
    
    {

let templateToAppend = document.importNode(getTemplate.content, true);
let nameToReplace = templateToAppend.querySelector(".name")
let alterEgoToReplace = templateToAppend.querySelector(".alter-ego")
let powerToReplace = templateToAppend.querySelector(".powers")

nameToReplace.textContent = data[(id-1)].name;
alterEgoToReplace.textContent = data[(id-1)] .alterEgo;
powerToReplace.textContent = data[(id-1)].abilities;

document.getElementById("target").appendChild(templateToAppend);

   }
}
document.getElementById("run").addEventListener("click",async() =>
    {
        try
        {
            let idFromForm = document.querySelector("#hero-id").value;
            let request = await fetch("http://localhost:3000/heroes");
            let xmen = await request.json();
            templateThings(xmen, idFromForm);
        }
        catch(error)
        {
            console.log(error);
        }
       
        
            




    })
    // your code here
})();
    

