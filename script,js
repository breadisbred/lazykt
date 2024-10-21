const archetypes = {
    "Infiltration": ["Card 1A", "Card 1B", "Card 1C"],
    "Security": ["Card 2A", "Card 2B", "Card 2C"],
    "Seek and Destroy": ["Card 3A", "Card 3B", "Card 3C"],
    "Reckon": ["Card 4A", "Card 4B", "Card 4C"]
};

let selectedArchetypes = [];
let selectedCards = [];

const archetypeButtons = document.querySelectorAll(".archetype");
const cardsContainer = document.getElementById("cardsContainer");
const savedCardsContainer = document.getElementById("savedCards");
const cardCountDisplay = document.getElementById("cardCount");

// Add event listeners to archetype buttons
archetypeButtons.forEach(button => {
    button.addEventListener("click", () => {
        const archetype = button.getAttribute("data-archetype");

        // Toggle archetype selection (allow max 2)
        if (selectedArchetypes.includes(archetype)) {
            selectedArchetypes = selectedArchetypes.filter(a => a !== archetype);
            button.classList.remove("selected");
        } else if (selectedArchetypes.length < 2) {
            selectedArchetypes.push(archetype);
            button.classList.add("selected");
        }

        updateArchetypeSelection();
    });
});

function updateArchetypeSelection() {
    const selectedArchetypesDisplay = document.getElementById("selectedArchetypesDisplay");
    selectedArchetypesDisplay.textContent = `Selected Archetypes: ${selectedArchetypes.join(", ")}`;

    // Update cards available for selection
    cardsContainer.innerHTML = '';
    selectedArchetypes.forEach(archetype => {
        archetypes[archetype].forEach(card => {
            const cardButton = document.createElement("button");
            cardButton.classList.add("card");
            cardButton.textContent = card;

            // Handle card selection
            cardButton.addEventListener("click", () => {
                if (selectedCards.includes(card)) {
                    selectedCards = selectedCards.filter(c => c !== card);
                    cardButton.classList.remove("selected");
                } else if (selectedCards.length < 3) {
                    selectedCards.push(card);
                    cardButton.classList.add("selected");
                }
                updateSavedCards();
            });

            cardsContainer.appendChild(cardButton);
        });
    });
}

function updateSavedCards() {
    savedCardsContainer.innerHTML = '';
    selectedCards.forEach(card => {
        const savedCardButton = document.createElement("button");
        savedCardButton.classList.add("card");
        savedCardButton.textContent = card;

        // Remove card on click
        savedCardButton.addEventListener("click", () => {
            selectedCards = selectedCards.filter(c => c !== card);
            updateSavedCards();
            updateArchetypeSelection();
        });

        savedCardsContainer.appendChild(savedCardButton);
    });

    cardCountDisplay.textContent = selectedCards.length;
}
