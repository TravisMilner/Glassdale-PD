import { getCriminals, useCriminals } from "./CriminalProvider.js"
import { criminalHTML } from "./Criminal.js"
import { useConvictions } from "../convictions/ConvictionProvider.js"

const eventHub = document.querySelector(".container")
export const CriminalList = () => {

    getCriminals().then(() => {
       const crimArray = useCriminals()
       render(crimArray)
    })
}

eventHub.addEventListener("crimeSelected", event => {
    console.log("crime selected event happened")

if (event.detail.crimeThatWasChosen !== 0) {

    const crimArray = useCriminals()
    // console.lot crimArray)

    const convictionsArray = useConvictions();

   const convictionThatWasChosen = convictionsArray.find(convictionObj => {
        return convictionObj.id === parseInt(event.detail.crimeThatWasChosen)
    })

    console.log(convictionThatWasChosen)

    const filteredCriminalsArray = crimArray.filter(criminalObj => {
    return criminalObj.conviction === convictionThatWasChosen.name
        
    })
    render(filteredCriminalsArray)
}

})

const render = (crimArray) => {
    const crimContainer = document.querySelector(".criminalsContainer")
    let buildCriminalHtml = ""

    for (const criminal of crimArray) {
        buildCriminalHtml += criminalHTML(criminal)
        crimContainer.innerHTML = buildCriminalHtml
    }
}
