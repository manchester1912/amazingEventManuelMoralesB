import * as moduleFuntions from "./allFuntions.js"

const linkAmazing = "https://aulamindhub.github.io/amazing-api/events.json"

fetch(linkAmazing)
.then(response => response.json())
.then(data => {
  let checkDiv = document.getElementById("checkboxFather")
  let categories = Array.from(new Set(data.events.map(event => event.category)))
  let categoryValue = categories.map(category => ({ category }))

  moduleFuntions.cardsHtml(data.events)
  moduleFuntions.createCheck(categoryValue)
  moduleFuntions.cardsHtml(data.events)

let searchbar = document.getElementById("search")
searchbar.addEventListener("input", () => moduleFuntions.filterCards(data.events))

checkDiv.addEventListener("change", () => moduleFuntions.filterCards(data.events))

})
