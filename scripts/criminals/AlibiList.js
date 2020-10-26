import { useCriminals } from "./CriminalProvider.js"


const eventHub = document.querySelector(".container")

export const AlibiEventListener = () => {
    eventHub.addEventListener("alibiButtonClicked", (eventObj) => {
    const foundCriminal = useCriminals().find(criminalObj => criminalObj.id === parseInt(eventObj.detail.criminalId))

    

    AlibiList(foundCriminal)

})
}

const AlibiList = (criminalObj) => {
    render(criminalObj)
}

const render = (criminalObj) => {
    const contentTarget = document.querySelector(`#criminal-${criminalObj.id}`)
    
    return contentTarget.innerHTML = `
    <div class = "alibi__list">
        ${criminalObj.known_associates.map(alibiObj => {
            return `
                <h3>Name:</h3>
                <p>${alibiObj.name};</p>
                <h3>Alibi:</h3>
                <p>${alibiObj.alibi};</p>
            `
        }).join("")}
    </div>
    `

}