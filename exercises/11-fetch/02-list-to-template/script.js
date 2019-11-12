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
    function templateThings(data)
{
    let getTemplate = document.getElementsByTagName("template")[0];
    for(i = 0; i<data.length; i++)
    {

let templateToAppend = document.importNode(getTemplate.content, true);
let nameToReplace = templateToAppend.querySelector(".name")
let alterEgoToReplace = templateToAppend.querySelector(".alter-ego")
let powerToReplace = templateToAppend.querySelector(".powers")

nameToReplace.textContent = data[i].name;
alterEgoToReplace.textContent = data[i] .alterEgo;
powerToReplace.textContent = data[i].abilities;

document.getElementById("target").appendChild(templateToAppend);

   }
}
document.getElementById("run").addEventListener("click",async() =>
    {
        try
        {
            let request = await fetch("http://localhost:3000/heroes");
            let xmen = await request.json();
            templateThings(xmen);
        }
        catch(error)
        {
            console.log(error);
        }
       
        
            




    })
    // your code here
})();
