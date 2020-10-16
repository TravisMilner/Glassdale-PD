import { getCriminals, useCriminals } from "./CriminalProvider.js"
import { criminalHTML } from "./Criminal.js"

export const CriminalList = () => {

    getCriminals().then(() => {
        const crimArray = useCriminals()

        const crimContainer = document.querySelector(".criminalsContainer")

        let buildCriminalHtml = ""

        for (const criminal of crimArray) {
            buildCriminalHtml += criminalHTML(criminal)
        }
        crimContainer.innerHTML += buildCriminalHtml
    })
}