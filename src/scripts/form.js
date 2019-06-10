const userSearch = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-btn");

const searchFood = () => {
  fetch(
    `https://api.edamam.com/api/food-database/parser?ingr=${
      userSearch.value
    }&app_id=${app_keys.app_id}&app_key=${app_keys.app_key}`
  )
    .then(foodData => foodData.json())
    .then(food => {
        document.querySelector("#search-results").innerHTML = ""
        postFood(createFoodSearchComponent(food), "search-results")
    });
};

searchBtn.addEventListener("click", searchFood);
