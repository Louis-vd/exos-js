/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () =>{

    class Animal {
        constructor(name){
            this.name = name;
            this.greeting="hdhdh";
        }
        sayHello() {
            return `${this.greeting}! I'm ${this.name}!`;
        }
    }
    class Cat extends Animal {
        
    greeting ="Miaou"

    }

    class Dog extends Animal{
        
        greeting = "Woof"

    }
    

        let chat = new Cat("chat");
        console.log(chat.sayHello())
            
        
        let chien = new Dog("chien");
        console.log(chien.sayHello())

        

    })

    // your code here
})();
