const contentTarget = document.querySelector(".filters__witnesses")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", (eventObj) => {
    if (eventObj.target.id === "witness") {
        const witnessEvent = new CustomEvent("witnessButtonClicked", {
            detail: {
                witnessButtonClicked: true
            }
        })
        console.log("button Clicked")
        eventHub.dispatchEvent(witnessEvent)
    }
})



export const witnessButton = () => {
    contentTarget.innerHTML = `
    <button id = "witness">Witness Statement</button>    
    `
}