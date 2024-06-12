

 const linkAmazing = "https://aulamindhub.github.io/amazing-api/events.json"

 fetch(linkAmazing)
 .then(responsive => responsive.json())
 .then(data => {
    let pastEvents = []

    for (let index = 0; index < data.events.length; index++) {
      if (data.currentDate > data.events[index].date) {
         pastEvents.push(data.events[index])
      }
    }

    let highestAssistance = document.getElementById("highest")
    let lowestAssistance = document.getElementById("lowest")
    let largerCapacity = document.getElementById("capacity")
    let percentage = pastEvents.map(evento => ((evento.assistance / evento.capacity)* 100).toFixed(2))
    let capacity = data.events.map(evento => evento.capacity)
 
   
      
    const maximumPercentage = Math.max(...percentage)
    const minimumPercentage = Math.min(...percentage)
    const maximumCapacity = Math.max(...capacity)

    let eventoMaxCapacity = data.events.find(evento => evento.capacity === maximumCapacity)
  
    
  highestAssistance.innerText = maximumPercentage + " %"
  lowestAssistance.innerText = minimumPercentage + " %"
  largerCapacity.innerHTML = eventoMaxCapacity.category + ": "+ eventoMaxCapacity.name +" "+ maximumCapacity.toLocaleString() + " People"
 
 })

 fetch(linkAmazing)
 .then(responsive => responsive.json())
 .then(data2 => {

  function sendData (item){
    let fatherDiv = document.getElementById("fatherTable2")
    let tableData = document.createElement("tr")
    tableData.classList.add("text-center")
  
    tableData.innerHTML = `
      <td>${item.category}</td>
      <td>$ ${(item.price * item.assistance).toLocaleString()}</td>
      <td>${((item.assistance / item.capacity) * 100).toFixed(2)} %</td>`
  
      fatherDiv.appendChild(tableData)
   }
  
   function printData (array){
    for (let index = 0; index < array.length; index++) {
      sendData(array[index])
      
    }
   }
  

  let pastEvents = []

    for (let index = 0; index < data2.events.length; index++) {
      if (data2.currentDate > data2.events[index].date) {
         pastEvents.push(data2.events[index])
      }
    }
  let newArray = pastEvents.map(event => ({category: event.category, assistance: event.assistance, price: event.price, capacity: event.capacity}))

  let filterCategory = newArray.reduce((added, event) => {
    if (!added[event.category]) {
        added[event.category] = { category: event.category, assistance: 0, price: 0, capacity: 0 }
    }
    added[event.category].assistance += event.assistance
    added[event.category].price += event.price
    added[event.category].capacity += event.capacity
    return added
}, {})

let arrayCategory = Object.keys(filterCategory).map(key => filterCategory[key])

printData(arrayCategory)


 })

 fetch(linkAmazing)
 .then(responsive => responsive.json())
 .then(data2 => {

  function sendData (item){
    let fatherDiv2 = document.getElementById("fatherTable")
    let tableData2 = document.createElement("tr")
    tableData2.classList.add("text-center")
  
    tableData2.innerHTML = `
      <td>${item.category}</td>
      <td>$ ${(item.price * item.estimate).toLocaleString()}</td>
      <td>${((item.estimate / item.capacity) * 100).toFixed(2)} %</td>`
  
      fatherDiv2.appendChild(tableData2)
   }
  
   function printData (array){
    for (let index = 0; index < array.length; index++) {
      sendData(array[index])
      
    }
   }
  

   let upcomingEv = []

    for (let index = 0; index < data2.events.length; index++) {
        if (data2.currentDate < data2.events[index].date) {
            upcomingEv.push(data2.events[index])
        }
    }
  let newArray = upcomingEv.map(event => ({category: event.category, estimate: event.estimate, price: event.price, capacity: event.capacity}))

  let filterCategory = newArray.reduce((added, event) => {
    if (!added[event.category]) {
        added[event.category] = { category: event.category, estimate: 0, price: 0, capacity: 0 }
    }
    added[event.category].estimate += event.estimate
    added[event.category].price += event.price
    added[event.category].capacity += event.capacity
    return added
}, {})

let arrayCategory = Object.keys(filterCategory).map(key => filterCategory[key])

printData(arrayCategory)
 })





