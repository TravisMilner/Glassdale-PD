export const NoteAsHTML = (noteObject) => {
 return `
 <div class="note"><h3>${noteObject.author}</h3>
    <p>Suspect: ${noteObject.suspect}</p>
    <p>Date of Interview: ${noteObject.dateOfInterview}</p>
    <p>Time of Note Entered: ${new Date(noteObject.timeStamp).toLocaleDateString('en-US')}</p>
    <p>Note: ${noteObject.note}</p>
    </div>
 `
}