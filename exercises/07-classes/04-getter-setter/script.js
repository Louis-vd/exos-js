/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () =>{
    class person {
        constructor(firstname,lastname){
            this.firstname=firstname;
            this.lastname=lastname;
        }
        get name(){
            return this.firstname+" "+this.lastname;

        }
        set name(value){
            [this.firstname, this.lastname] = value.split(" ");
            


        }
    }
    let newName=new person ("Marc","Bounter");
    console.log(newName.name);
    newName.name = "John Johnson";
    console.log(newName.name);

})
    // your code here
})();
