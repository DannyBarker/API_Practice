const createFoodComponent = (foodObj) => {
    return `
      <h2>${foodObj.name}</h2>
      <h3>This is some food info</h3>
      <p><strong>ingredients:</strong> ${foodObj.ingredients}</p>
    ` 
}

const createFoodSearchComponent = (foodObj) => {
    return `
        <h2>${foodObj.text}</h2>
        <h3>${foodObj.parsed[0].label}</h3>
        <img src=${foodObj.parsed[0].food.image} alt=Photo of ${foodObj}>
    `
}

  const postFood = (func, elementId) => {
    document.querySelector(`#${elementId}`).innerHTML += `${func}`
  } 