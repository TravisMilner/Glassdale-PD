export const criminalHTML = (crimObj) => {
   return `<div class="crimCard"><h3>${crimObj.name}</h3>
    <p>Age: ${crimObj.age}</p>
    <p>Crime: ${crimObj.conviction}</p>
    <p>Term Start: ${new Date(crimObj.incarceration.start).toLocaleDateString('en-US')}</p>
    <p>Term End: ${new Date(crimObj.incarceration.end).toLocaleDateString('en-US')}</p>
    </div>`
}