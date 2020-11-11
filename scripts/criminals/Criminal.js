const eventHub = document.querySelector(".container")

export const criminalHTML = (crimObj, facilities) => {
   return `
   
   <div id="criminal-${crimObj.id}" class="crimCard"><h3>${crimObj.name}</h3>
    <p>Age: ${crimObj.age}</p>
    <p>Crime: ${crimObj.conviction}</p>
    <p>Term Start: ${new Date(crimObj.incarceration.start).toLocaleDateString('en-US')}</p>
    <p>Term End: ${new Date(crimObj.incarceration.end).toLocaleDateString('en-US')}</p>
    <div>
        <h2>Facilities</h2>
        <ul>
        ${facilities.map(f => `<li>${f.facilityName}</li>`).join("")}
        </ul>
    </div>
    <button id="associates--${crimObj.id}">Associate Alibis</button>
    </div>
    
    `
}

eventHub.addEventListener("click", (eventObj) => {
    const [prefix, criminalId] = eventObj.target.id.split("--")

    if(eventObj.target.id.startsWith("associates--")) {
        const myCustomEvent = new CustomEvent("alibiButtonClicked", {
            detail: {
                criminalId: criminalId
            }
        })

        eventHub.dispatchEvent(myCustomEvent)
    }
})