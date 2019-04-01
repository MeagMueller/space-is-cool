const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/

const planetEl = document.getElementById("planetsDisplay")

planets.forEach(planet => {
    planetEl.innerHTML += `<p>${planet}</p>`
    planetEl.innerHTML += `<hr></hr>`
})


/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

const newPlanets = planets.map(planet => {
    const firstLetter = planet.split("")[0]
    const upperCasePlanets = firstLetter.toUpperCase()
    const restOfWord = planet.slice(1)
    return upperCasePlanets + restOfWord
})

const newPlanetsOnDom = document.createElement("section")

newPlanets.forEach(newPlanet => {
    newPlanetsOnDom.innerHTML += `<p>${newPlanet}</p>`
})

planetsDisplay.appendChild(newPlanetsOnDom)

console.log(newPlanets)

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

const ePlanetsOnDom = document.createElement("section")

const ePlanets = newPlanets.filter(ePlanet => {
    let allThemEs = false; 
    if (ePlanet.includes("e") === true) {
        allThemEs = true
    }
    return allThemEs
})

ePlanets.forEach(planetWithEs => {
    ePlanetsOnDom.innerHTML += `<p>${planetWithEs}</p>`
    ePlanetsOnDom.innerHTML += `<hr></hr>`
})

planetsDisplay.appendChild(ePlanetsOnDom)

console.log(ePlanets)