import { getCriminals, useCriminals } from "./CriminalProvider.js"
import { criminalHTML } from "./Criminal.js"
import { useConvictions } from "../convictions/ConvictionProvider.js"
import {useFacilities} from "../facilities/FacilityProvider.js"
import {getFacilities} from "../facilities/FacilityProvider.js"
import {useCriminalFacilities} from "../facilities/CriminalFacilityProvider.js"
import {getCriminalFacilities} from "../facilities/CriminalFacilityProvider.js"

const eventHub = document.querySelector(".container")
export const CriminalList = () => {

    getFacilities()
        .then(getCriminalFacilities)
        .then(
            () => {
                // Pull in the data now that it has been fetched
                const facilities = useFacilities()
                const crimFac = useCriminalFacilities()
                const criminals = useCriminals()

                // Pass all three collections of data to render()
                render(criminals, facilities, crimFac)
            }
        )
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

eventHub.addEventListener("officerSelected", officerSelectedEventObj => {

    const selectedOfficerName = officerSelectedEventObj.detail.officerName 

    const criminalsArray = useCriminals()

    const filteredArrayofCriminals= criminalsArray.filter(
        (criminalObj) => {
            return criminalObj.arrestingOfficer === selectedOfficerName
        }
    )

    render(filteredArrayofCriminals)
})

const render = (criminalsToRender, allFacilities, allRelationships) => {
    const contentTarget = document.querySelector(".criminalsContainer")
    // Step 1 - Iterate all criminals
    contentTarget.innerHTML = criminalsToRender.map(
        (criminalObject) => {
            // Step 2 - Filter all relationships to get only ones for this criminal
            const facilityRelationshipsForThisCriminal = allRelationships.filter(cf => cf.criminalId === criminalObject.id)

            // Step 3 - Convert the relationships to facilities with map()
            const facilities = facilityRelationshipsForThisCriminal.map(cf => {
                const matchingFacilityObject = allFacilities.find(facility => facility.id === cf.facilityId)
                return matchingFacilityObject
            })

            // Must pass the matching facilities to the Criminal component
            return criminalHTML(criminalObject, facilities)
        }
    ).join("")
}
