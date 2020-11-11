import {getNotes, useNotes} from "./NoteDataProvider.js"
import { NoteAsHTML } from "./Note.js"
import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js"



const notesContainer = document.querySelector(".notesContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("noteStateChanged", () => NoteList())

export const NoteList = () => {
    getNotes()
    .then(() => getCriminals())
    .then(() => {
       const allNotes = useNotes()
       const allCriminals = useCriminals()
       render(allNotes, allCriminals)
       console.log(allCriminals)
       
    })
}






const render = (notesArray, criminalsArray) => {
    let notesHTMLRepresentations = ""
    for (const note of notesArray) {
        const relatedCriminal = criminalsArray.find(criminal => criminal.id === note.criminalId)
        notesHTMLRepresentations += NoteAsHTML(note, relatedCriminal)

    }
    notesContainer.innerHTML = `
            ${notesHTMLRepresentations}
    `
}

