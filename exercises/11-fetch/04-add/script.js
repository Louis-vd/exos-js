/* becode/javascript
 *
 * /11-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const NewXman = async () => {
        let name = document.getElementById("hero-name").value; // Récupération de la valeur de l'input "Nom"
        let alterEgo = document.getElementById("hero-alter-ego").value; // Récupération de la valeur de l'input "Alter-Ego"
        let abilities = document.getElementById("hero-powers").value.split(", "); // Récupération de la valeur de l'input "Pouvoirs"

        if(name == "" || alterEgo == "" || abilities == ""){ // Si tous les champs ne sont pas remplis, affiche un message d'alerte
            alert("Tous les champs ne sont pas remplis");
            throw "Champs pas tous remplis";
        }else{
            try{
                const requestArrXmen = await fetch ("http://localhost:3000/heroes"); // Récupération de l'API
                let arrXmen = await requestArrXmen.json(); // Transformation des données en fichier json
                let id = arrXmen.length + 1; // Indiquer qu'il faut ajouter le nouveau super-hero
                return{ // 
                    id : id,
                    name : name, 
                    alterEgo : alterEgo,
                    abilities : abilities
                }
            }catch(error){
                console.error(error)
            }
        }
    }

    const sendNewXmanToApi = async (data) => {
        try {
            let sendDataRequest = await fetch("http://localhost:3000/heroes",{
                method: "POST", // Indique que l'on envoie des données 
                headers: {
                    "Content-type": "application/json" // Indique le type de données envoyées 
                },
                body: JSON.stringify(data)
            })
            let answer = await sendNewXmanToApi.json();
            console.log(answer);
        }catch(error){
            console.error(error)
        }
    }

    document.getElementById("run").addEventListener("click", async () => {
        let newSuperHero = await NewXman();
        sendNewXmanToApi(newSuperHero);
    })
})();
