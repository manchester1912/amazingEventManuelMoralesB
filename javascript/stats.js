

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
    let percentage = pastEvents.map(evento => ((evento.assistance / evento.capacity)* 100).toFixed(2))
   
   
    const maximumPercentage = Math.max(...percentage)
    const minimumPercentage = Math.min(...percentage)
    
  highestAssistance.innerText = maximumPercentage
  lowestAssistance.innerText = minimumPercentage
 })

