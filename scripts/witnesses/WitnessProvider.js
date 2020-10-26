let witness = []

export const useWitnesses = () => {
    return witness.slice()
}

export const getWitness = () => {
    return fetch("https://criminals.glassdale.us/witnesses")
    .then(response => response.json())
    .then(
        parsedWitnesses => {
            witness = parsedWitnesses
        }
        
    )
}

export const WitnessHTML = (witObj) => {
    return `
        <div class="witCard">
        <h1>Witness Statement:</h1>
        <h2>${witObj.name}</h2>
        <p><strong>Statement:</strong> ${witObj.statements}</p>
        </div>
        
    `
}