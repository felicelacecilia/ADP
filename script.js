export const airports = [
    { name: "Aeroporto di Bari", code: "FCO", city: "Bari", country: "Italia", terminals: ["Terminal 1", "Terminal 2"] },
    { name: "Aeroporto di Brindisi", code: "LHR", city: "Brindisi", country: "Italia", terminals: ["Terminal 1"] },
    { name: "Aeroporto di Foggia", code: "LAX", city: "Foggia", country: "Italia", terminals: ["Terminal 4", "Terminal 6"] },
    { name: "Aeroporto di Taranto", code: "LAU", city: "Taranto", country: "Italia", terminals: ["Terminal 4", "Terminal 6"] }
];

function generateAirportCards(airports) {
    const airportList = document.getElementById("airport-list");
    airportList.innerHTML = "";

    airports.forEach(airport => {
        const card = document.createElement("div");
        card.classList.add("airport-card");

        const title = document.createElement("h2");
        title.textContent = airport.name + " (" + airport.code + ")";
        card.appendChild(title);

        const location = document.createElement("p");
        location.textContent = airport.city + ", " + airport.country;
        card.appendChild(location);

        const terminals = document.createElement("p");
        terminals.textContent = "Terminals: " + airport.terminals.join(", ");
        card.appendChild(terminals);

        const detailsLink = document.createElement("a");
        detailsLink.textContent = "View Details";
        detailsLink.href = "details.html?id=" + airport.code;
        detailsLink.classList.add("details-link");
        card.appendChild(detailsLink);

        airportList.appendChild(card);
    });
}

window.onload = function() {
    generateAirportCards(airports);
};
