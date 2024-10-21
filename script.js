const archetypes = {
    "Infiltration": [
        {
            title: "Implant",
            reveal: "Reveal: When you first score VP from this op.",
            rules: `Whenever a friendly operative is fighting, you can implant the enemy operative instead of striking or blocking (then discard that dice). Each operative can only be implanted once, and cannot be implanted during the first turning point.`,
            victoryPoints: "Score 1 VP whenever you implant an enemy operative. Score 1 VP if any implanted enemy operatives are in the killzone at the end of each turning point."
        },
        {
            title: "Surveillance",
            reveal: "Reveal: The first time a friendly operative performs the Surveillance Action.",
            rules: `Mission Action: Surveillance (1 AP). An operative cannot perform this action while it has an Engage order.`,
            victoryPoints: "Score 1 VP if a friendly operative performs Surveillance. Score 1 VP if that operative remains concealed in the killzone."
        },
        {
            title: "Wiretap",
            reveal: "Reveal: The first time a friendly operative performs the Wiretap Action.",
            rules: `Mission Action: Wiretap (1 AP). Place a Wiretap marker within the active operative's control range.`,
            victoryPoints: "Score 1 VP if an enemy operative starts or ends an action near your Wiretap marker. Score 1 VP if enemy operatives are within 2\" of your Wiretap marker."
        }
    ],
    "Security": [
        {
            title: "Contain",
            reveal: "Reveal: When you first score VP from this op.",
            rules: "If there are no enemy operatives wholly within your territory or drop zone.",
            victoryPoints: "Score 1 VP if there are no enemy operatives within your territory and 1 VP if none are within 6\" of your drop zone."
        },
        {
            title: "Secure Centre",
            reveal: "Reveal: When you first score VP from this op.",
            rules: "Gain VP by controlling the center of the killzone or being on the centerline.",
            victoryPoints: "Score 1 VP if you control the center or more than 3\" from the centerline."
        },
        {
            title: "Take Ground",
            reveal: "Reveal: When you first score VP from this op.",
            rules: "Take control of specific terrain features depending on the kill zone.",
            victoryPoints: "Score VP for controlling specific terrain features within your opponent's territory."
        }
    ],
    "Seek and Destroy": [
        {
            title: "Champion",
            reveal: "Reveal: When you select your first Champion.",
            rules: "Select a friendly operative as your Champion each turning point.",
            victoryPoints: "Score 1 VP when your Champion incapacitates an enemy. Score 2 VP if the enemy had 12+ wounds."
        },
        {
            title: "Overrun",
            reveal: "Reveal: When you first score VP from this op.",
            rules: "Score VP when friendly operatives incapacitate enemies in your opponent's territory.",
            victoryPoints: "Score 1 VP for incapacitating an enemy. Score 1 VP for having 3+ APL of friendly operatives in your opponent's territory."
        },
        {
            title: "Storm Objectives",
            reveal: "Reveal: When you first score VP from this op.",
            rules: "Control objective markers that enemy operatives controlled.",
            victoryPoints: "Score 1 VP for storming an objective marker and 1 VP for controlling it at the end of the turn."
        }
    ],
    "Recon": [
        {
            title: "Confirm Kill",
            reveal: "Reveal: The first time an enemy operative is incapacitated.",
            rules: "Place a Confirm Kill marker on the incapacitated enemy's control range.",
            victoryPoints: "Score 1 VP for controlling a Confirm Kill marker. Score 2 VP if the enemy had 12+ wounds."
        },
        {
            title: "Recover Items",
            reveal: "Reveal: At the start of the Set Up operatives step.",
            rules: "Place Item mission markers. Perform the Pick Up Marker action after the first turning point.",
            victoryPoints: "Score 2 VP for each Item marker picked up and controlled at the end of the battle."
        },
        {
            title: "Plant Beacon",
            reveal: "Reveal: The first time a friendly operative performs the Plant Beacon action.",
            rules: "Place Beacon markers in your or your opponent's territory.",
            victoryPoints: "Score 1 VP for placing a Beacon marker in your or your opponent's territory."
        }
    ]
};

let selectedArchetypes = [];
let selectedCards = [];

// DOM Elements
const archetypeButtons = document.querySelectorAll(".archetype");
const cardsContainer = document.getElementById("cardsContainer");
const savedCardsContainer = document.getElementById("savedCards");
const cardCountDisplay = document.getElementById("cardCount");

const archetypeSelection = document.getElementById("archetypeSelection");
const selectedCardsSection = document.getElementById("selectedCards");

const archetypeMenuLink = document.getElementById("archetypeMenuLink");
const selectedCardsMenuLink = document.getElementById("selectedCardsMenuLink");

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
            const cardElement = document.createElement("div");
            cardElement.classList.add("card");

            // Make the entire card clickable
            cardElement.innerHTML = `
                <div class="title">${card.title}</div>
                <div class="reveal">${card.reveal}</div>
                <div class="rules">${card.rules}</div>
                <div class="victory-points">${card.victoryPoints}</div>
            `;

            // Handle card selection
            cardElement.addEventListener("click", () => {
                if (selectedCards.includes(card)) {
                    selectedCards = selectedCards.filter(c => c !== card);
                    cardElement.classList.remove("selected"); // Remove orange border when unselected
                } else if (selectedCards.length < 3) {
                    selectedCards.push(card);
                    cardElement.classList.add("selected"); // Add orange border when selected
                }
                updateSavedCards();
            });

            // Light up cards only in the selection menu, not in the saved cards section
            cardElement.addEventListener('mouseover', () => {
                cardElement.classList.add('hover');
            });
            cardElement.addEventListener('mouseout', () => {
                cardElement.classList.remove('hover');
            });

            cardsContainer.appendChild(cardElement);
        });
    });
}

function updateSavedCards() {
    savedCardsContainer.innerHTML = '';
    selectedCards.forEach(card => {
        const savedCardElement = document.createElement("div");
        savedCardElement.classList.add("card");

        // Make the entire card clickable for deselection in the saved cards section
        savedCardElement.innerHTML = `
            <div class="title">${card.title}</div>
            <div class="reveal">${card.reveal}</div>
            <div class="rules">${card.rules}</div>
            <div class="victory-points">${card.victoryPoints}</div>
        `;

        // Remove card from selection when clicked in the saved cards section
        savedCardElement.addEventListener("click", () => {
            selectedCards = selectedCards.filter(c => c !== card);
            updateSavedCards();
            updateArchetypeSelection();
        });

        savedCardsContainer.appendChild(savedCardElement);
    });

    cardCountDisplay.textContent = selectedCards.length;
}

// Switching between sections/pages
archetypeMenuLink.addEventListener("click", () => {
    archetypeSelection.classList.add("active");
    archetypeSelection.classList.remove("hidden");

    selectedCardsSection.classList.add("hidden");
    selectedCardsSection.classList.remove("active");
});

selectedCardsMenuLink.addEventListener("click", () => {
    selectedCardsSection.classList.add("active");
    selectedCardsSection.classList.remove("hidden");

    archetypeSelection.classList.add("hidden");
    archetypeSelection.classList.remove("active");
});