/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () =>{

        
       var year = document.getElementById('year').value
       console.log(year)

        for (var month=0; month<12; month++) {
            let time = new Date(year, month,13)
        
        if (time.getDay() == 5 ){
            
        var options = { year: 'numeric', month: 'long', day:'numeric'}
        alert(time.toLocaleDateString('fr-FR', options));
        }
    }
    
    





    })
    // your code here
})();


/*  OU document.getElementById("run").addEventListener("click", () => {
        let year = document.getElementById("year").value; //récupération de la valeur de l'input
        let date = new Date(); // déclaration de la variable date
        let arr_month = [
            'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
            'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
            ]; //stockage des mois dans une array pour pouvoir l'afficher en fonction du for. Si elles n'étaient pas stockées, il faudrait utiliser des if pour afficher le bon mois
        let message = ""; // déclaration de la variable message pour pouvoir l'utiliser par la suite. Ici, c'est un message vide 

        for(let i = 0; i <= 11; i++){ //initialisation de la boucle for pour tester sur chaque mois
            date = new Date(year, i, 13); // assignement de la valeur de la date pour ce tour de boucle
            if(date.getDay() == 5){ // si le jour de la date entrée est égal au 5è jour (vendredi) de la semaine, alors on exécute le code
                if(message == ""){
                    message = `Vendredi 13 ${arr_month[i]} ${year}` 
                }                                                                       //éviter d'avoir une ligne vide (blanc) dans le message 
                else{
                    message = `${message}\nVendredi 13 ${arr_month[i]} ${year}`
                }
            }
        }
        alert(message); //afficher le message 
    });*/
