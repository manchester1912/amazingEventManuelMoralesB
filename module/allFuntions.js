export function createdCard (cardsContainer, card) {
    let generateCard = document.createElement("div")
    generateCard.classList.add("cards", "pt-2", "my-2", "mx-2", "text-white")
  
    generateCard.innerHTML =
      `<img src="${card.image}" alt="">
      <h2>${card.name}</h2>
      <p>${card.description}</p>`
  
    let newChild = document.createElement("div");
    newChild.classList.add("price", "fw-bold", "fs-5", "pb-2")
    newChild.innerHTML = `<p>Price: ${card.price} USD</p>
      <a href="/details.html?id=${card._id}" class="btn btn-danger">Details</a>`
  
    generateCard.appendChild(newChild)
    cardsContainer.appendChild(generateCard)
  }