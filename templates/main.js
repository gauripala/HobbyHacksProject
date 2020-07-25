document.addEventListener("DOMContentLoaded", function() {
    const APIKEYMAIA = '65bdc424250f4e1fbb4c1a895ed40bf6'
    //TODO make the ingredient dynamic based on what the user inputted
    var ingredient = 'apples'
    var search = document.getElementById("search")
    var results = document.getElementById("results")

    //redirect to recipe page on click
    function redirect(id) {
        if (id !== undefined && id != null) {
            window.location = `/HobbyHacksProject/templates/results.html?recipe=${id}`
        }
    }


    //makes api call looking for recipes for ingredient
    const searchForRecipes = async () => {
        //Actual api code commented out below, should not be used until we are further along
        //const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${APIKEYMAIA}&ingredients=${ingredient},+flour,+sugar&number=2`);
        //const myJson = await response.json();//extract JSON from the http response
        //console.log(JSON.stringify(myJson))

        //dummy response from api
        jjson = [{"id":534573,"title":"Brown Butter Apple Crumble","image":"https://spoonacular.com/recipeImages/534573-312x231.jpg","imageType":"jpg","usedIngredientCount":1,"missedIngredientCount":2,"missedIngredients":[{"id":2010,"amount":0.5,"unit":"tsp","unitLong":"teaspoons","unitShort":"tsp","aisle":"Spices and Seasonings","name":"cinnamon","original":"1/2 tsp cinnamon","originalString":"1/2 tsp cinnamon","originalName":"cinnamon","metaInformation":[],"meta":[],"image":"https://spoonacular.com/cdn/ingredients_100x100/cinnamon.jpg"},{"id":8120,"amount":0.5,"unit":"cup","unitLong":"cups","unitShort":"cup","aisle":"Cereal","name":"oats","original":"1/2 cup uncooked oats (not instant)","originalString":"1/2 cup uncooked oats (not instant)","originalName":"uncooked oats (not instant)","metaInformation":["uncooked","(not instant)"],"meta":["uncooked","(not instant)"],"image":"https://spoonacular.com/cdn/ingredients_100x100/rolled-oats.jpg"}],"usedIngredients":[{"id":9003,"amount":4,"unit":"","unitLong":"","unitShort":"","aisle":"Produce","name":"apples","original":"4 apples, peeled, cored and sliced","originalString":"4 apples, peeled, cored and sliced","originalName":"apples, peeled, cored and sliced","metaInformation":["cored","peeled","sliced"],"meta":["cored","peeled","sliced"],"image":"https://spoonacular.com/cdn/ingredients_100x100/apple.jpg"}],"unusedIngredients":[],"likes":7},{"id":556470,"title":"Apple fritters","image":"https://spoonacular.com/recipeImages/556470-312x231.jpg","imageType":"jpg","usedIngredientCount":0,"missedIngredientCount":3,"missedIngredients":[{"id":14003,"amount":2,"unit":"tablespoons","unitLong":"tablespoons","unitShort":"Tbsp","aisle":"Alcoholic Beverages","name":"beer","original":"2 tablespoons of lager beer","originalString":"2 tablespoons of lager beer","originalName":"lager beer","metaInformation":[],"meta":[],"image":"https://spoonacular.com/cdn/ingredients_100x100/beer.jpg"},{"id":1123,"amount":1,"unit":"","unitLong":"","unitShort":"","aisle":"Milk, Eggs, Other Dairy","name":"egg","original":"1 egg","originalString":"1 egg","originalName":"egg","metaInformation":[],"meta":[],"image":"https://spoonacular.com/cdn/ingredients_100x100/egg.png"},{"id":1059003,"amount":2,"unit":"","unitLong":"","unitShort":"","aisle":"Produce","name":"red delicious apples","original":"2 Golden Delicious apples","originalString":"2 Golden Delicious apples","originalName":"Golden Delicious apples","metaInformation":[],"meta":[],"image":"https://spoonacular.com/cdn/ingredients_100x100/red-delicious-apples.png"}],"usedIngredients":[],"unusedIngredients":[{"id":9003,"amount":1,"unit":"serving","unitLong":"serving","unitShort":"serving","aisle":"Produce","name":"apples","original":"apples","originalString":"apples","originalName":"apples","metaInformation":[],"meta":[],"image":"https://spoonacular.com/cdn/ingredients_100x100/apple.jpg"}],"likes":243}]
        //add a div to container with recipe title
        if (jjson) {
            results.innerHTML = `<div>Recipes containing ${ingredient}:</div>`
            jjson.map((recipe) => {
                results.innerHTML += `<span id=${recipe.id}>${recipe.title} <img src= ${recipe.image}></span>`
                var element = document.getElementById(`${recipe.id}`)
                element.addEventListener('click', function(){redirect(`${recipe.id}`)})
            })
        }
    }

    //when the search button is clicked, trigger searchForRecipes
    search.addEventListener('click', searchForRecipes)
});

