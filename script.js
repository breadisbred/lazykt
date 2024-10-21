


// Define archetypes for teams
const teamArchetypes = {
    "Joker Elves": ["Infiltration", "Recon"],
    "Sex Elves": ["Seek and Destroy", "Recon"],
    "Sneaky Gitz": ["Seek and Destroy", "Infiltration"],
    "Other": ["Infiltration", "Security", "Seek and Destroy", "Recon"] // Free choice
};

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

// Define equipment for teams
const teamEquipment = {
    "Sex Elves": [
        {
            name: "CHAIN SNARE",
            description: "Composed of hooked blades attached to a length of chain, this weapon bites into the flesh or armour of the wielder’s target, preventing them from fleeing.",
            characteristics: {
                action: "Control",
                effect: "Prevents enemy from falling back if within control range of a HAND OF THE ARCHON operative.",
                roll: "Roll two D6 or one D6 if the enemy has a higher Wounds stat. If any result is a 4+, the enemy cannot perform the Fall Back action."
            }
        },
        {
            name: "WICKED BLADES",
            description: "Light yet deadly, the jagged edge of this blade has been crafted to ensure maximum agony as it’s plunged into the flesh of a victim.",
            characteristics: {
                statBoost: {
                    type: "Atk",
                    amount: 1,
                    applicableTo: "HAND OF THE ARCHON operatives’ array of blades"
                }
            }
        },
        {
            name: "TOXIN COATING",
            description: "Drukhari raiders are known to coat their blades in venom, ensuring that even the slightest nick of blade against flesh is fatal.",
            characteristics: {
                action: "Melee Attack",
                effect: "Until the end of the sequence, the operative’s melee weapon has the Lethal 5+ weapon rule.",
                usage: "Up to twice per turning point."
            }
        },
        {
            name: "REFINED POISON",
            description: "Splinter rounds are infused with exquisitely lethal concoctions distilled from the potent venoms and toxins of deadly flora and fauna.",
            characteristics: {
                action: "Shoot",
                effect: "Add 1 to the Normal Dmg stat of the weapon used (shardcarbine, splinter cannon, splinter pistol, splinter rifle, or stinger pistol).",
                usage: "Up to twice per turning point."
            }
        }
    ],
    "Joker Elves": [
        {
            name: "WRAITHBONE TALISMAN",
            description: "Charged with psychic power, this item provides fleeting insight to the bearer, enabling them to strike their opponents with unerring accuracy.",
            characteristics: {
                action: "Shooting/Fighting/Retaliating",
                effect: "Once per turning point, if you roll two or more fails, discard one to retain another as a normal success."
            }
        },
        {
            name: "SHRIEKER TOXIN ROUNDS",
            description: "Coated with virulent genetic toxins, these rounds cause the flesh of the target to twist, distort and rupture to devastating effect.",
            characteristics: {
                action: "Shoot",
                effect: "Until the end of that action, the weapon gains the Devastating 1 weapon rule.",
                usage: "Once per turning point when using a shuriken pistol or shrieker cannon (focused)."
            }
        },
        {
            name: "DEATH MASK",
            description: "On occasion, a Harlequin must perish in order to fulfil their role in the saedath. Such dedication emboldens those in their troupe that survive.",
            characteristics: {
                effect: "Keep a Tragedy tally. When a friendly VOID-DANCER TROUPE operative with an ACCOLADE rule is incapacitated, add 1 to your tally.",
                bonus: "At 3, gain 1CP and reset the tally."
            }
        },
        {
            name: "UNDERSTUDY’S MASK",
            description: "This item allows Harlequins to change roles during the saedath. Should one who holds a pivotal role be slain, another will swiftly take their place.",
            characteristics: {
                action: "Role Change",
                effect: "Once per battle, if the pivotal role operative is incapacitated, the activated operative gains that role for the battle."
            }
        }
    ],
    "Sneaky Gitz": [
        {
            name: "CHOPPAS",
            description: "Ork blades may appear crude and rusty, but this is of little comfort to those on the receiving end of a choppa blow.",
            characteristics: {
                meleeWeapon: {
                    name: "Choppa",
                    atk: 3,
                    hit: "3+",
                    dmg: "4/5"
                }
            }
        },
        {
            name: "HARPOON",
            description: "This weapon fires a sharp, barbed projectile that snags any foes it doesn’t kill outright, preventing them from moving.",
            characteristics: {
                action: "Ranged Attack",
                effect: "Once per turning point, a friendly KOMMANDO operative can use the Harpoon.",
                weaponStats: {
                    name: "Harpoon",
                    atk: 4,
                    hit: "4+",
                    dmg: "4/5",
                    range: "8\"",
                    specialRules: ["Lethal 5+", "Stun"]
                }
            }
        },
        {
            name: "DYNAMITE",
            description: "Kommandos are known to utilise a variety of improvised explosives, the most common of which are bundles of volatile dynamite.",
            characteristics: {
                action: "Ranged Attack",
                effect: "Once per battle, a friendly KOMMANDO operative can use Dynamite.",
                weaponStats: {
                    name: "Dynamite",
                    atk: 5,
                    hit: "4+",
                    dmg: "4/5",
                    range: "4\"",
                    specialRules: ["Blast 1\"", "Heavy (Reposition only)", "Saturate"]
                }
            }
        },
        {
            name: "COLLAPSIBLE STOCKS",
            description: "Kommandos often use modified guns with cut down or folding shoulder stocks to enhance the impact of their firepower.",
            characteristics: {
                effect: "Add 4\" to the Range weapon rule of specified ranged weapons."
            }
        }
    ],
    // Shared equipment
    "Common": [
        {
            name: "AMMO CACHE",
            description: "Stockpiles that provide vital reloading during battles, allowing operatives to quickly regain ammunition.",
            characteristics: {
                action: "Ammo Resupply",
                effect: "Before the battle, set up one Ammo Cache marker within your territory. Enables re-roll of one attack die for shooting actions using a weapon from its datacard."
            }
        },
        {
            name: "RAZOR WIRE",
            description: "Spooled rapidly out and affixed to posts, razor wire acts as a painful deterrent to enemies.",
            characteristics: {
                terrainType: "Exposed and Obstructing",
                effect: "Treat the distance as an additional 2\" when crossing this terrain feature."
            }
        },
        {
            name: "COMMS DEVICE",
            description: "Devices that allow operatives to coordinate operations or call in support during firefights.",
            characteristics: {
                action: "Communication Boost",
                effect: "While a friendly operative controls this marker, add 3\" to the distance requirements of its SUPPORT rules."
            }
        },
        {
            name: "MINES",
            description: "Various mines designed to inflict damage on enemy operatives.",
            characteristics: {
                action: "Setup",
                effect: "First operative within control range of the mine marker takes D3+3 damage upon triggering."
            }
        },
        {
            name: "2X LIGHT BARRICADES",
            description: "Designed to be lugged into place and then deployed by operatives and combat engineers, these barriers are proof against small arms fire.",
            characteristics: {
                terrainType: "Light",
                setup: "Set up wholly within your territory, more than 2\" from other equipment."
            }
        },
        {
            name: "HEAVY BARRICADE",
            description: "A redoubtable slab of plasteel and adamantine, this layered protective barrier provides shelter amidst the fiercest firefights.",
            characteristics: {
                terrainType: "Heavy",
                setup: "Set up within 2\" of your drop zone, more than 2\" from other equipment."
            }
        },
        {
            name: "LADDERS",
            description: "Combat ladders deploy rapidly to provide a route of ingress to strongholds or quick access to vital vantage points.",
            characteristics: {
                terrainType: "Exposed",
                setup: "Set up within your territory, upright against terrain at least 2\" tall."
            }
        },
        {
            name: "PORTABLE BARRICADE",
            description: "Little more than a suppression shield with armoured feet, these barricades can be hefted and borne forwards to provide mobile cover.",
            characteristics: {
                terrainType: "Light, Protective, Portable",
                effect: "Improves Save stat by 1 while in cover; allows for mobile cover actions."
            }
        },
        {
            name: "UTILITY GRENADES",
            description: "From neuro-suppressant psybombs to smoke-belching chemical charges, these grenades can suppress the enemy.",
            characteristics: {
                action: "Grenade Selection",
                effect: "Select two utility grenades; each can only be used a total number of times equal to your selection."
            }
        },
        {
            name: "EXPLOSIVE GRENADES",
            description: "A variety of offensive grenades employed by the forces of the 41st Millennium.",
            characteristics: {
                action: "Grenade Selection",
                effect: "Select two explosive grenades; each can only be used a total number of times equal to your selection.",
                grenadeStats: {
                    frag: {
                        name: "Frag grenade",
                        atk: 4,
                        hit: "4+",
                        dmg: "2/4",
                        range: "6\"",
                        specialRules: ["Blast 2\"", "Saturate"]
                    },
                    krak: {
                        name: "Krak grenade",
                        atk: 4,
                        hit: "4+",
                        dmg: "4/5",
                        range: "6\"",
                        specialRules: ["Piercing 1", "Saturate"]
                    }
                }
            }
        }
    ]
};


let selectedTeam = null; // Track the selected team
let selectedArchetypes = [];
let selectedCards = [];
let selectedEquipment = [];

// DOM Elements
const teamButtons = document.querySelectorAll(".team");
const archetypeButtons = document.querySelectorAll(".archetype");
const cardsContainer = document.getElementById("cardsContainer");
const savedCardsContainer = document.getElementById("savedCards");
const equipmentContainer = document.getElementById("equipmentContainer");
const savedequipmentContainer = document.getElementById("savedequipmentContainer");
const cardCountDisplay = document.getElementById("cardCount");

// Function to update archetype selection based on team
function updateArchetypeSelection(team) {
    const availableArchetypes = teamArchetypes[team];
    archetypeButtons.forEach(button => {
        const archetype = button.getAttribute("data-archetype");
        button.classList.remove("selected");
        
        // Only show archetypes available to the selected team
        if (availableArchetypes.includes(archetype)) {
            button.style.display = "inline-block";
        } else {
            button.style.display = "none";
        }
    });
}

// Function to handle team selection
teamButtons.forEach(button => {
    button.addEventListener("click", () => {
        selectedTeam = button.getAttribute("data-team");
        teamSelection.classList.add("hidden");  // Hide team selection
        archetypeSelection.classList.remove("hidden");  // Show archetype selection
        updateArchetypeSelection(selectedTeam);  // Update archetypes based on team
    });
});

// Function to handle archetype selection
archetypeButtons.forEach(button => {
    button.addEventListener("click", () => {
        const archetype = button.getAttribute("data-archetype");
        
        // Toggle archetype selection (max 2)
        if (selectedArchetypes.includes(archetype)) {
            selectedArchetypes = selectedArchetypes.filter(a => a !== archetype);
            button.classList.remove("selected");
        } else if (selectedArchetypes.length < 2) {
            selectedArchetypes.push(archetype);
            button.classList.add("selected");
        }

        updateCardsForSelectedArchetypes();  // Update cards when archetypes change
    });
});

// Function to update cards based on selected archetypes
function updateCardsForSelectedArchetypes() {
    cardsContainer.innerHTML = '';  // Clear existing cards
    selectedArchetypes.forEach(archetype => {
        archetypes[archetype].forEach(card => {
            const cardElement = document.createElement("div");
            cardElement.classList.add("card");

            // Show full card details initially (without hiding the details)
            cardElement.innerHTML = `
                <div class="title">${card.title}</div>
                <div class="reveal">${card.reveal}</div>
                <div class="details">
                    <div class="rules">${card.rules}</div>
                    <div class="victory-points">${card.victoryPoints}</div>
                </div>
            `;

            // Handle card selection (max 3 cards)
            cardElement.addEventListener("click", () => {
                if (selectedCards.includes(card)) {
                    selectedCards = selectedCards.filter(c => c !== card);
                    cardElement.classList.remove("selected");
                } else if (selectedCards.length < 3) {
                    selectedCards.push(card);
                    cardElement.classList.add("selected");
                }
                updateMainInterface();  // Update main interface with selected cards
            });

            cardsContainer.appendChild(cardElement);
        });
    });
}


// Function to update the main interface with selected cards and equipment
function updateMainInterface() {
    savedCardsContainer.innerHTML = '';  // Clear previous selections

    // Display selected cards (with reveal condition initially)
    selectedCards.forEach(card => {
        const savedCardElement = document.createElement("div");
        savedCardElement.classList.add("card");

        savedCardElement.innerHTML = `
            <div class="title">${card.title}</div>
            <div class="reveal">${card.reveal}</div>
            <div class="details hidden">
                <div class="rules">${card.rules}</div>
                <div class="victory-points">${card.victoryPoints}</div>
            </div>
        `;

        // Toggle details when clicked
        savedCardElement.addEventListener("click", () => {
            const details = savedCardElement.querySelector('.details');
            details.classList.toggle('hidden');
        });

        savedCardsContainer.appendChild(savedCardElement);
    });

    // Display selected equipment (max 4 items)
    selectedEquipment.forEach(equipment => {
    const savedEquipmentElement = document.createElement("div");
    savedEquipmentElement.classList.add("equipment");

    // Constructing the inner HTML with characteristics included
    savedEquipmentElement.innerHTML = `
        <div class="name">${equipment.name}</div>
        <div class="description">${equipment.description}</div>
        <div class="characteristics">
            ${Object.entries(equipment.characteristics).map(([key, value]) => `
                <div class="characteristic">
                    <strong>${key.replace(/([A-Z])/g, ' $1')}: </strong>${typeof value === 'object' ? JSON.stringify(value, null, 2) : value}
                </div>
            `).join('')}
        </div>
    `;

    savedequipmentContainer.appendChild(savedEquipmentElement);
});


}

// Function to update available equipment for the selected team
function updateEquipmentSelection() {
    const availableEquipment = teamEquipment[selectedTeam].concat(teamEquipment["Common"]);
    equipmentContainer.innerHTML = '';  // Clear existing equipment

    availableEquipment.forEach(equipment => {
        const equipmentElement = document.createElement("div");
        equipmentElement.classList.add("equipment");

        equipmentElement.innerHTML = `
            <div class="name">${equipment.name}</div>
            <div class="description">${equipment.description}</div>
        `;

        // Handle equipment selection (max 4 items)
        equipmentElement.addEventListener("click", () => {
            if (selectedEquipment.includes(equipment)) {
                selectedEquipment = selectedEquipment.filter(e => e !== equipment);
                equipmentElement.classList.remove("selected");
            } else if (selectedEquipment.length < 4) {
                selectedEquipment.push(equipment);
                equipmentElement.classList.add("selected");
            }
            updateMainInterface();  // Update main interface with selected equipment
        });

        equipmentContainer.appendChild(equipmentElement);
    });
}

// Menu navigation
teamMenuLink.addEventListener("click", () => showSection(teamSelection));
archetypeMenuLink.addEventListener("click", () => showSection(archetypeSelection));
equipmentMenuLink.addEventListener("click", () => {
    updateEquipmentSelection();  // Update equipment based on the selected team
    showSection(equipmentSelection);
});
selectedCardsMenuLink.addEventListener("click", () => showSection(selectedCardsSection));

// Ensure team selection is visible initially
document.addEventListener("DOMContentLoaded", () => showSection(teamSelection));



// Menu navigation for selecting team
teamMenuLink.addEventListener("click", () => {
    teamSelection.classList.remove("hidden");
    teamSelection.classList.add("active");

    archetypeSelection.classList.add("hidden");
    equipmentSelection.classList.add("hidden");
    selectedCardsSection.classList.add("hidden");
});

// Menu navigation for selecting archetypes
archetypeMenuLink.addEventListener("click", () => {
    archetypeSelection.classList.remove("hidden");
    archetypeSelection.classList.add("active");

    teamSelection.classList.add("hidden");
    equipmentSelection.classList.add("hidden");
    selectedCardsSection.classList.add("hidden");
});

// Menu navigation for selecting equipment
equipmentMenuLink.addEventListener("click", () => {
    equipmentSelection.classList.remove("hidden");
    equipmentSelection.classList.add("active");

    teamSelection.classList.add("hidden");
    archetypeSelection.classList.add("hidden");
    selectedCardsSection.classList.add("hidden");
});

// Menu navigation for Main Interface (Saved Cards)
selectedCardsMenuLink.addEventListener("click", () => {
    selectedCardsSection.classList.remove("hidden");
    selectedCardsSection.classList.add("active");

    teamSelection.classList.add("hidden");
    equipmentSelection.classList.add("hidden");
    archetypeSelection.classList.add("hidden");
});

// Initial state to ensure only the clicked tab is visible
document.addEventListener("DOMContentLoaded", function() {
    // Ensure only team selection is shown initially
    teamSelection.classList.remove("hidden");
    archetypeSelection.classList.add("hidden");
    equipmentSelection.classList.add("hidden");
    selectedCardsSection.classList.add("hidden");
});