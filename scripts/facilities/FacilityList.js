import {useFacilities} from "../facilities/FacilityProvider.js"
import {getFacilities} from "../facilities/FacilityProvider.js"
import {useCriminalFacilities} from "../facilities/CriminalFacilityProvider.js"
import {getCriminalFacilities} from "../facilities/CriminalFacilityProvider.js"
import {useCriminals} from "../criminals/CriminalProvider.js"
import {facilityHtml} from "./Facility.js"

const eventHub = document.querySelector(".container")

const FacilityList = () => {
    getFacilities()
        .then(getCriminalFacilities)
        .then(
            () => {
                // Pull in the data now that it has been fetched
                const facilities = useFacilities()
                const crimFac = useCriminalFacilities()
                const criminals = useCriminals()

                // Pass all three collections of data to render()
                
                        render(facilities, criminals, crimFac)
                    
                
                
            }
        )
}

const render = (criminalsToRender, allFacilities, allRelationships) => {
    const contentTarget = document.querySelector(".criminalsContainer")
    // Step 1 - Iterate all criminals
    contentTarget.innerHTML = criminalsToRender.map(
        (criminalObject) => {
            // Step 2 - Filter all relationships to get only ones for this criminal
            const facilityRelationshipsForThisCriminal = allRelationships.filter(cf => cf.facilityId === criminalObject.id)

            // Step 3 - Convert the relationships to facilities with map()
            const facilities = facilityRelationshipsForThisCriminal.map(cf => {
                const matchingFacilityObject = allFacilities.find(facility => facility.id === cf.criminalId)
                return matchingFacilityObject
            })

            // Must pass the matching facilities to the Criminal component
            return facilityHtml(criminalObject, facilities)
        }
    )
}

export const eventListener = () => {
    eventHub.addEventListener("facilitiesButtonClicked", event => {
        FacilityList()
    })
}