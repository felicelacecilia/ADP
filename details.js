import {airports} from './script.js';

const urlParams = new URLSearchParams(window.location.search);
const airportId = urlParams.get('id');
console.log(airportId);

const airport = airports.find(airport => airport.code === airportId);
console.log(airport);

const airportDetails = document.getElementById("airport-details");
airportDetails.innerHTML = `
    <h2>${airport.name} (${airport.code})</h2>
    <p><strong>City:</strong> ${airport.city}</p>
    <p><strong>Country:</strong> ${airport.country}</p>
    <p><strong>Terminals:</strong> ${airport.terminals.join(", ")}</p>
`;
