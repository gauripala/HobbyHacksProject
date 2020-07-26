document.addEventListener("DOMContentLoaded", function() {
    const APIKEYMAIA = '65bdc424250f4e1fbb4c1a895ed40bf6'
    let search = document.getElementById("search")
    let results = document.getElementById("results")


    //redirect to recipe page on click
    function redirect(recipe) {
        if (recipe.id !== undefined && recipe.id != null) {
            let ingredients = []
            recipe.missedIngredients.map(ingred => {ingredients.push(ingred.originalString)})
            recipe.usedIngredients.map(ingred => {ingredients.push(ingred.originalString)})
            ingredients = ingredients.toString()
            window.location = `/HobbyHacksProject/templates/results.html?recipe=${recipe.id}&name=${recipe.title}&ingredients=${ingredients}`
        }
    }

    //makes api call looking for recipes for ingredient
    const searchForRecipes = async () => {
        let ingredient = document.getElementById("ingredientField").value

        //TODO get rid of flour and sugar and change results to 10?
        //api response - uncomment out the below two lines to use api and comment out the two below that
        const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${APIKEYMAIA}&ingredients=${ingredient}&number=10`);
        const json = await response.json(); //extract JSON from the http response

        //dummy response from api - comment this out and uncomment the above code to use api
        //let json = [{"id":534573,"title":"Brown Butter Apple Crumble","image":"https://spoonacular.com/recipeImages/534573-312x231.jpg","imageType":"jpg","usedIngredientCount":1,"missedIngredientCount":2,"missedIngredients":[{"id":2010,"amount":0.5,"unit":"tsp","unitLong":"teaspoons","unitShort":"tsp","aisle":"Spices and Seasonings","name":"cinnamon","original":"1/2 tsp cinnamon","originalString":"1/2 tsp cinnamon","originalName":"cinnamon","metaInformation":[],"meta":[],"image":"https://spoonacular.com/cdn/ingredients_100x100/cinnamon.jpg"},{"id":8120,"amount":0.5,"unit":"cup","unitLong":"cups","unitShort":"cup","aisle":"Cereal","name":"oats","original":"1/2 cup uncooked oats (not instant)","originalString":"1/2 cup uncooked oats (not instant)","originalName":"uncooked oats (not instant)","metaInformation":["uncooked","(not instant)"],"meta":["uncooked","(not instant)"],"image":"https://spoonacular.com/cdn/ingredients_100x100/rolled-oats.jpg"}],"usedIngredients":[{"id":9003,"amount":4,"unit":"","unitLong":"","unitShort":"","aisle":"Produce","name":"apples","original":"4 apples, peeled, cored and sliced","originalString":"4 apples, peeled, cored and sliced","originalName":"apples, peeled, cored and sliced","metaInformation":["cored","peeled","sliced"],"meta":["cored","peeled","sliced"],"image":"https://spoonacular.com/cdn/ingredients_100x100/apple.jpg"}],"unusedIngredients":[],"likes":7},{"id":556470,"title":"Apple fritters","image":"https://spoonacular.com/recipeImages/556470-312x231.jpg","imageType":"jpg","usedIngredientCount":0,"missedIngredientCount":3,"missedIngredients":[{"id":14003,"amount":2,"unit":"tablespoons","unitLong":"tablespoons","unitShort":"Tbsp","aisle":"Alcoholic Beverages","name":"beer","original":"2 tablespoons of lager beer","originalString":"2 tablespoons of lager beer","originalName":"lager beer","metaInformation":[],"meta":[],"image":"https://spoonacular.com/cdn/ingredients_100x100/beer.jpg"},{"id":1123,"amount":1,"unit":"","unitLong":"","unitShort":"","aisle":"Milk, Eggs, Other Dairy","name":"egg","original":"1 egg","originalString":"1 egg","originalName":"egg","metaInformation":[],"meta":[],"image":"https://spoonacular.com/cdn/ingredients_100x100/egg.png"},{"id":1059003,"amount":2,"unit":"","unitLong":"","unitShort":"","aisle":"Produce","name":"red delicious apples","original":"2 Golden Delicious apples","originalString":"2 Golden Delicious apples","originalName":"Golden Delicious apples","metaInformation":[],"meta":[],"image":"https://spoonacular.com/cdn/ingredients_100x100/red-delicious-apples.png"}],"usedIngredients":[],"unusedIngredients":[{"id":9003,"amount":1,"unit":"serving","unitLong":"serving","unitShort":"serving","aisle":"Produce","name":"apples","original":"apples","originalString":"apples","originalName":"apples","metaInformation":[],"meta":[],"image":"https://spoonacular.com/cdn/ingredients_100x100/apple.jpg"}],"likes":243}]
        document.getElementById("ingredientField").value = ''

        //add html to page
        if (json) {
            var sheet = document.createElement('style')
            results.innerHTML = `<div id="title"> List of Recipes: </div>`
            document.getElementById('title').style.color = 'black';
            document.getElementById('title').style.fontSize = 'xx-large';
            document.getElementById('title').style.textAlign = 'center';
            document.getElementById('title').style.marginTop = '30px';

            //for each recipe in the json response create a new span with the recipe title and image inside
            json.map((recipe) => {
                var element = document.createElement('span');
                element.id = recipe.id;
                element.innerHTML = ` <div id="outer"> ${recipe.title} </div> <div id = "images"> <img src= ${recipe.image} alt="Food Image"> </div>`
              //  document.getElementById("outer").style.color = 'orange';
                sheet.innerHTML = "#images {margin: auto; width: 300px; margin-top: 10px; margin-bottom: 20px; margin-left: auto; margin-right: auto;}";
                document.body.appendChild(sheet);
                element.addEventListener('click', () => {redirect(recipe)})
                results.appendChild(element)
            })
        }
    }

    //when the search button is clicked, trigger searchForRecipes
    search.addEventListener('click', searchForRecipes)


});

