import { WitnessHTML, useWitnesses, getWitness } from "./WitnessProvider.js"

const eventHub = document.querySelector(".container")

eventHub.addEventListener("witnessButtonClicked", event => {
    WitnessList();
})



export const WitnessList = () => {
    getWitness().then(() => {
        const witnessArray = useWitnesses();
        render(witnessArray)
    })
}













const render = (witArray) => {
    const witContainer = document.querySelector(".criminalsContainer")
    let buildWitnessHtml = ""

    for (const witness of witArray) {
        buildWitnessHtml += WitnessHTML(witness)
        witContainer.innerHTML = buildWitnessHtml
    }
}