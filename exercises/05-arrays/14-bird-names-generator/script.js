/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    document.getElementById("run").addEventListener("click", () =>{

    let array_adjectives = Array.from(adjectives);

    let get_birds = birds[Math.floor(Math.random()*birds.length)];
    let get_adjectives= array_adjectives[Math.floor(Math.random()* array_adjectives.length)];
    if (get_birds.hasOwnProperty('fem')){
        document.getElementById("target").innerHTML = get_birds.name + " " + get_adjectives+ "e";
    }
    else{
        document.getElementById("target").innerHTML = get_birds.name + " " + get_adjectives;

    }

    

    })

    // your code here
})();
