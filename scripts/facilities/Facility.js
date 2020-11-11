export const facilityHtml = (facObj, crimObj) => {
    return `
    <div id = "facility-${facObj.id}" class = "crimCard">
    <h2>${facObj.facilityName}</h2>
    <h3>Security Level: ${facObj.securityLevel}</h3>
    <h3>Capacity: ${facObj.capacity}</h3>
    <h3>Criminals Housed:</h3>
        ${crimObj.map(suspect => `<p>${suspect.name}</p>`)}

</div>
    `
}