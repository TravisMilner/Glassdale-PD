export const displayFacilityButton = () => {
    const contentTarget = document.querySelector(".facility__button")

    return contentTarget.innerHTML += `<button id = "facilityButton">Facilities</button>`
}

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "facilityButton") {
        console.log("buttonClicked")

        const customEvent = new CustomEvent("facilitiesButtonClicked", {
            detail: {
                facilityThatWasChosen: clickEvent.target.value
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})