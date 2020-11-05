import { saveNote } from "./NoteDataProvider.js"
import { useCriminals, getCriminals } from "../criminals/CriminalProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")

const eventHub = document.querySelector(".container")

const render = (suspectArr) => {
    contentTarget.innerHTML = `
        <input id = "note__dateOfInterview" type = "date">
        <input id ="note__author" type="text" placeholder="Your Name Here">
        <select id="noteForm--criminal" class="criminalSelect">
        <option value = "0">Select a suspect</option>
        ${suspectArr.map(suspect => {
           return` <option value="${ suspect.id }">${ suspect.name }</option>`
        
        })}
        </select>
        <textarea id = "note__note" placeholder="Your Note Here"></textarea>
        <button id="saveNote">Save Note</button>
    `
}

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "saveNote") {
        const dateOfInterview = document.querySelector("#note__dateOfInterview").value 
        const author = document.querySelector("#note__author").value
        const suspect = document.querySelector("#note__suspect").value
        const note = document.querySelector("#note__note").value
        const timeStamp = Date.now()

        const newNote = {
            dateOfInterview: dateOfInterview,
            timeStamp: timeStamp,
            author: author,
            suspect: suspect,
            note: note
        }
        saveNote(newNote)
    }
})

export const NoteForm = () => {
    getCriminals()
    .then(() => {

        render(useCriminals())
    })
}