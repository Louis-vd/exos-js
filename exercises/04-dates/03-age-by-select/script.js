/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () =>{
    var date = new Date()
    var dateYear = date.getFullYear()
    var dateMonth = date.getMonth()
    var dateDay = date.getDate()

    var dobDay = document.getElementById('dob-day').value
    var dobMonth = document.getElementById('dob-month').value
    var dobYear = document.getElementById('dob-year').value
    
    var age = dateYear - dobYear 
    if (dateMonth+1 == parseInt(dobMonth) && dateDay>= parseInt(dobDay)){
        console.log(age)
    }else if (dateMonth+1 <= parseInt(dobMonth)){
        console.log(age-1)
    }else{
        console.log(age)
    }
    
    


    //Date(année, mois, jour)
    // your code here
})
})();
