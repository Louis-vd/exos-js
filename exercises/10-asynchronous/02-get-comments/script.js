/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click",() =>{
        lib.getPosts( (error,articles) => { /* récupère tout les articles*/
            articles.forEach(objetArticle => {/* on itère sur tout les articles*/
                lib.getComments(objetArticle.id,(error, arrComments) => {/* récupère les commentaires pour un article*/
                    objetArticle.comments = arrComments;

                
            });
        })
    })
    

})
    // your code here
})();
