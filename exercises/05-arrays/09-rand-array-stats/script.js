/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
        document.getElementById("run").addEventListener("click", () => {
            function random_number (min, max){
                return Math.floor(Math.random() * 100) + 1;
            }
            first_number = document.getElementById("n-1").innerHTML= random_number(min,max);
            second_number = document.getElementById("n-2").innerHTML= random_number(min,max);
            third_number = document.getElementById("n-3").innerHTML= random_number(min,max);
            fourth_number = document.getElementById("n-4").innerHTML= random_number(min,max);
            fifth_number = document.getElementById("n-5").innerHTML= random_number(min,max);
            sixth_number = document.getElementById("n-6").innerHTML= random_number(min,max);
            seventh_number = document.getElementById("n-7").innerHTML= random_number(min,max);
            eighth_number = document.getElementById("n-8").innerHTML= random_number(min,max);
            ninth_number = document.getElementById("n-9").innerHTML= random_number(min,max);
            tenth_number = document.getElementById("n-10").innerHTML= random_number(min,max);
            let table = [first_number, second_number, third_number, fourth_number, fifth_number, sixth_number, seventh_number, eighth_number, ninth_number, tenth_number];
    
            min = Math.min.apply(null, table);
            document.getElementById("min").innerHTML = min;

            max = Math.max.apply(null, table);
            document.getElementById("max").innerHTML = max;

            function sum(total, num) {
                return total + num;
              } 
            /* OU sum = first_number + second_number +third_number +fourth_number +fifth_number +sixth_number + seventh_number + eighth_number +ninth_number + tenth_number*/
            document.getElementById("sum").innerHTML = table.reduce(sum);

            let average= table.reduce(sum)/ table.length
            document.getElementById("average").innerHTML = average ;
            
        });

        



        


    
    // your code here
})();
