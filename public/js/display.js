const homeLocation = "http://localhost:3000/";
let thisLocation = self.location.href.toString();
let item = [];

if (thisLocation == homeLocation) {
    displayRecipes();
};

async function displayRecipes() {

    console.log("Displaying Recipe(s)")
    const recipeRes = await fetch('api/recipes/', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })
        .then(response => response.json())
        .then(response => {
            return response;
        });

    for (let i = 0; i < recipeRes.length; i++) {
        item[i] = recipeRes[i];
    };

    console.log(item);
    console.log(item[0].name);
};