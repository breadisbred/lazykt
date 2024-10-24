// Define archetypes for teams
const teamArchetypes = {
    "Joker Elves": ["Infiltration", "Recon"],
    "Sex Elves": ["Seek and Destroy", "Recon"],
    "Sneaky Gitz": ["Seek and Destroy", "Infiltration"],
    "Other": ["Infiltration", "Security", "Seek and Destroy", "Recon"] // Free choice
};

const teamPloys = {
    "Sneaky Gitz": {
        "Strategic Ploys": [
            {
                title: "WAAAGH!",
                cost: "1 CP",
                description: "Friendly KOMMANDO operatives' melee weapons have the Balanced weapon rule.",
                tag: "Offensive"
            },
            {
                title: "DAKKA! DAKKA! DAKKA!",
                cost: "1 CP",
                description: "Friendly KOMMANDO operatives' ranged weapons have the Punishing weapon rule.",
                tag: "Offensive"
            },
            {
                title: "Skulk About",
                cost: "1 CP",
                description: "Whenever an enemy operative is shooting a friendly KOMMANDO operative that has a Conceal order, you can retain one of your defence dice as a normal success without rolling it (in addition to a cover save, if any).",
                tag: "Defensive"
            },
            {
                title: "SSSSHHHH!",
                cost: "1 CP",
                description: "Each friendly KOMMANDO operative that is not a valid target for enemy operatives, or has a conceal order and is more than 6\" from enemy operatives, can immediately perform a free Dash action. You cannot use this ploy during the first turning point.",
                tag: "Utility"
            }
        ],
        "Firefight Ploys": [
            {
                title: "Kunnin' But Brutal",
                cost: "1 CP",
                description: "Use this firefight ploy when a friendly KOMMANDO operative that has a Conceal order is fighting during an activation in which it has performed the Charge action, and you’re resolving the first attack die. Treat that normal success as a critical success instead.",
                tag: "Offensive"
            },
            {
                title: "Krump 'Em",
                cost: "1 CP",
                description: "Use this firefight ploy at the end of the Firefight phase. Select one friendly KOMMANDO operative. It can immediately perform a free Fight action.",
                tag: "Offensive"
            },
            {
                title: "Shake It Off",
                cost: "1 CP",
                description: "Use this firefight ploy when a friendly KOMMANDO operative is activated, or when its APL stat is changed. Until the start of the next turning point, you can ignore any changes to its APL stat.",
                tag: "Defensive"
            },
            {
                title: "Just A Scratch",
                cost: "1 CP",
                description: "Use this firefight ploy when an attack die inflicts Normal Damage on a friendly KOMMANDO operative (excluding BOMB SQUIG and GROT). Ignore that inflicted damage.",
                tag: "Defensive"
            }
        ]
    },
    "Joker Elves": {
        "Strategic Ploys": [
            {
                title: "Darting Salvo",
                cost: "1 CP",
                description: "Whenever a friendly VOID-DANCER TROUPE operative performs the Reposition action during its activation, it can perform the Shoot action during that action (it must do so in a location it can be placed, and any remaining move distance it had from that Reposition action can be used after it does so).",
                tag: "Offensive"
            },
            {
                title: "Cegorach's Jest",
                cost: "1 CP",
                description: "Whenever a friendly VOID-DANCER TROUPE operative is fighting or retaliating and your opponent strikes with a normal success, you can roll one D6: if the result is less than the Hit stat of your opponent’s selected weapon, that strike is a block instead (ignore the Brutal weapon rule, if relevant). You cannot use this rule for the rest of the sequence.",
                tag: "Defensive"
            },
            {
                title: "Prismatic Blur",
                cost: "1 CP",
                description: "Whenever an operative is shooting a friendly VOID-DANCER TROUPE operative that performed an action in which it moved during this turning point, you can re-roll one of your defence dice.",
                tag: "Defensive"
            },
            {
                title: "Rising Crescendo",
                cost: "1 CP",
                description: "Friendly VOID-DANCER TROUPE operatives can perform the Dash action during the same activation in which they performed the Charge action, but not vice versa (i.e. not Dash then Charge).",
                tag: "Utility"
            }
        ],
        "Firefight Ploys": [
            {
                title: "Murderous Entrance",
                cost: "1 CP",
                description: "Use this firefight ploy when a friendly VOID-DANCER TROUPE operative is fighting during an activation in which it performed the Charge action, after you strike. You can immediately resolve another of your normal successes as a strike (before your opponent), or a critical success if there are none.",
                tag: "Offensive"
            },
            {
                title: "Domino Field",
                cost: "1 CP",
                description: "Use this firefight ploy when an operative is shooting a friendly VOID-DANCER TROUPE operative during the Resolve Defence Dice step. You can allocate one of your rolled successful dice to block all of your opponent's attack dice with matching results.",
                tag: "Defensive"
            },
            {
                title: "Elusive Target",
                cost: "1 CP",
                description: "Use this firefight ploy during a friendly VOID-DANCER TROUPE operative’s activation. Until the start of its next activation, while that operative has a Conceal order and is in cover, it cannot be selected as a valid target.",
                tag: "Defensive"
            },
            {
                title: "The Curtain Falls",
                cost: "1 CP",
                description: "Use this firefight ploy when a friendly VOID-DANCER TROUPE operative is fighting, after you strike with a critical success. End that sequence (any remaining attack dice are discarded) and immediately perform a free Dash or Fall Back action up to 3\" with that operative (then the Fight action ends). That operative can do so even if it’s performed an action that prevents it from performing the Dash or Fall Back action.",
                tag: "Utility"
            }
        ]
    },
    "Sex Elves": {
        "Strategic Ploys": [
            {
                title: "Blade Artists",
                cost: "1 CP",
                description: "Friendly HAND OF THE ARCHON operatives’ melee weapons have the Rending weapon rule.",
                tag: "Offensive"
            },
            {
                title: "Merciless Sadists",
                cost: "1 CP",
                description: "Whenever a friendly HAND OF THE ARCHON operative is shooting against or fighting against a wounded enemy operative, that friendly operative’s weapons have the Balanced weapon rule.",
                tag: "Offensive"
            },
            {
                title: "Denizens Of Night",
                cost: "1 CP",
                description: "Whenever an enemy operative is shooting a friendly HAND OF THE ARCHON operative that’s more than 2\" from enemy operatives, if Heavy terrain is intervening, or any part of that friendly operative’s base is underneath Vantage terrain, you can re-roll one of your defence dice.",
                tag: "Defensive"
            },
            {
                title: "From Darkness, Death",
                cost: "1 CP",
                description: "Whenever a friendly HAND OF THE ARCHON operative is activated, before you determine its order, you can select one enemy operative that friendly operative isn’t a valid target for. Until the end of that activation, the first time that friendly operative is shooting against or fighting against that enemy operative, you can retain one of your normal successes as a critical success instead.",
                tag: "Utility"
            }
            
        ],
        "Firefight Ploys": [
            {
                title: "Prey On The Wounded",
                cost: "1 CP",
                description: "Use this firefight ploy after rolling your attack dice for a friendly HAND OF THE ARCHON operative, if it’s shooting against or fighting against a wounded enemy operative. You can re-roll any of your attack dice.",
                tag: "Offensive"
            },
            {
                title: "Cruel Deception",
                cost: "1 CP",
                description: "Use this firefight ploy during a friendly HAND OF THE ARCHON operative’s activation. During that activation, that operative can perform the Fall Back action for 1 less AP.",
                tag: "Utility"
            },
            {
                title: "Devious Scheme",
                cost: "1 CP",
                description: "Use this firefight ploy after an opponent uses a firefight ploy (excluding one that costs 0CP). The next time they would use that ploy, they must spend 1 additional CP to do so (at which point this effect ends). You cannot use this ploy again during the battle until its effect has ended.",
                tag: "Utility"
            },
            {
                title: "Heinous Arrogance",
                cost: "1 CP",
                description: "Use this firefight ploy when it’s your turn to activate a friendly operative. You can skip that activation.",
                tag: "Utility"
            }
            
        ]
    }
};

const archetypes = {
    "Infiltration": [
        {
            title: "Implant",
            reveal: "When you first score VP from this op.",
            reveal_selected: "Reveal: When you first score VP from this op.",
            rules: `Whenever a friendly operative is fighting, you can implant the enemy operative instead of striking or blocking (then discard that dice). Each operative can only be implanted once, and cannot be implanted during the first turning point.`,
            victoryPoints: "Score 1 VP whenever you implant an enemy operative. Score 1 VP if any implanted enemy operatives are in the killzone at the end of each turning point."
        },
        {
            title: "Surveillance",
            reveal: "The first time a friendly operative performs the Surveillance Action.",
            reveal_selected: "Reveal: The first time a friendly operative performs the Surveillance Action.",
            rules: `Mission Action: Surveillance (1 AP). An operative cannot perform this action while it has an Engage order.`,
            victoryPoints: "Score 1 VP if a friendly operative performs Surveillance. Score 1 VP if that operative remains concealed in the killzone."
        },
        {
            title: "Wiretap",
            reveal: "The first time a friendly operative performs the Wiretap Action.",
            reveal_selected: "Reveal: The first time a friendly operative performs the Wiretap Action.",
            rules: `Mission Action: Wiretap (1 AP). Place a Wiretap marker within the active operative's control range.`,
            victoryPoints: "Score 1 VP if an enemy operative starts or ends an action near your Wiretap marker. Score 1 VP if enemy operatives are within 2\" of your Wiretap marker."
        }
    ],
    "Security": [
        {
            title: "Contain",
            reveal: "When you first score VP from this op.",
            reveal_selected: "Reveal: When you first score VP from this op.",
            rules: "If there are no enemy operatives wholly within your territory or drop zone.",
            victoryPoints: "Score 1 VP if there are no enemy operatives within your territory and 1 VP if none are within 6\" of your drop zone."
        },
        {
            title: "Secure Centre",
            reveal: "When you first score VP from this op.",
            reveal_selected: "Reveal: When you first score VP from this op.",
            rules: "Gain VP by controlling the center of the killzone or being on the centerline.",
            victoryPoints: "Score 1 VP if you control the center or more than 3\" from the centerline."
        },
        {
            title: "Take Ground",
            reveal: "When you first score VP from this op.",
            reveal_selected: "Reveal: When you first score VP from this op.",
            rules: "Take control of specific terrain features depending on the kill zone.",
            victoryPoints: "Score VP for controlling specific terrain features within your opponent's territory."
        }
    ],
    "Seek and Destroy": [
        {
            title: "Champion",
            reveal: "When you select your first Champion.",
            reveal_selected: "Reveal: When you select your first Champion.",
            rules: "Select a friendly operative as your Champion each turning point.",
            victoryPoints: "Score 1 VP when your Champion incapacitates an enemy. Score 2 VP if the enemy had 12+ wounds."
        },
        {
            title: "Overrun",
            reveal: "When you first score VP from this op.",
            reveal_selected: "Reveal: When you first score VP from this op.",
            rules: "Score VP when friendly operatives incapacitate enemies in your opponent's territory.",
            victoryPoints: "Score 1 VP for incapacitating an enemy. Score 1 VP for having 3+ APL of friendly operatives in your opponent's territory."
        },
        {
            title: "Storm Objectives",
            reveal: "When you first score VP from this op.",
            reveal_selected: "Reveal: When you first score VP from this op.",
            rules: "Control objective markers that enemy operatives controlled.",
            victoryPoints: "Score 1 VP for storming an objective marker and 1 VP for controlling it at the end of the turn."
        }
    ],
    "Recon": [
        {
            title: "Confirm Kill",
            reveal: "The first time an enemy operative is incapacitated.",
            reveal_selected: "Reveal: The first time an enemy operative is incapacitated.",
            rules: "Place a Confirm Kill marker on the incapacitated enemy's control range.",
            victoryPoints: "Score 1 VP for controlling a Confirm Kill marker. Score 2 VP if the enemy had 12+ wounds."
        },
        {
            title: "Recover Items",
            reveal: "At the start of the Set Up operatives step.",
            reveal_selected: "Reveal: At the start of the Set Up operatives step.",
            rules: "Place Item mission markers. Perform the Pick Up Marker action after the first turning point.",
            victoryPoints: "Score 2 VP for each Item marker picked up and controlled at the end of the battle."
        },
        {
            title: "Plant Beacon",
            reveal: "The first time a friendly operative performs the Plant Beacon action.",
            reveal_selected: "Reveal: The first time a friendly operative performs the Plant Beacon action.",
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


// Global Variables
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
const savedEquipmentContainer = document.getElementById("savedItems");


// Function to handle card selection (max 3 cards)
function handleCardSelection(card, cardElement) {
    if (selectedCards.includes(card)) {
        // Remove if already selected
        selectedCards = selectedCards.filter(c => c !== card);
        cardElement.classList.remove("selected");
    } else if (selectedCards.length < 3) {
        // Add to selected cards if below the limit
        selectedCards.push(card);
        cardElement.classList.add("selected");
    }
    updateMainInterface(); // Update main interface with selected cards
}

// Function to handle equipment selection (max 4 items)
function handleEquipmentSelection(equipment, equipmentElement) {
    if (selectedEquipment.includes(equipment)) {
        // Remove if already selected
        selectedEquipment = selectedEquipment.filter(e => e !== equipment);
        equipmentElement.classList.remove("selected");
    } else if (selectedEquipment.length < 4) {
        // Add to selected equipment if below the limit
        selectedEquipment.push(equipment);
        equipmentElement.classList.add("selected");
    }
    updateMainInterface(); // Update main interface with selected equipment
}

// Function to update archetype selection based on team
function updateArchetypeSelection(team) {
    const availableArchetypes = teamArchetypes[team] || []; // Fallback to empty array
    archetypeButtons.forEach(button => {
        const archetype = button.getAttribute("data-archetype");
        button.classList.remove("selected");
        
        // Only show archetypes available to the selected team
        button.style.display = availableArchetypes.includes(archetype) ? "inline-block" : "none";
    });
}

// Function to update the main interface with selected cards and equipment
// Function to update the main interface with selected cards and equipment
function updateMainInterface() {
    savedCardsContainer.innerHTML = ''; // Clear previous selections
    savedEquipmentContainer.innerHTML = ''; // Clear previous equipment selections
    const ploysContainer = document.getElementById("ploysContainer");
    ploysContainer.innerHTML = ''; // Clear previous ploys

    // Display selected cards (with reveal condition initially)
    selectedCards.forEach(card => {
        const savedCardElement = document.createElement("div");
        savedCardElement.classList.add("card");

        savedCardElement.innerHTML = `
            <div class="card">
                <div class="title">${card.title}</div>
                <div class="reveal"><strong>${card.reveal_selected}</strong></div>
                <div class="details">
                    <div class="rules"><strong>Rules:</strong> ${card.rules}</div>
                    <div class="victory-points"><strong>Victory Points:</strong> ${card.victoryPoints}</div>
                </div>
            </div>
        `;

        // Toggle details when clicked
        savedCardElement.addEventListener("click", () => {
            const details = savedCardElement.querySelector('.details');
            details.classList.toggle('hidden');
        });

        // Add event listener for deselecting card from Main Interface
        savedCardElement.addEventListener("dblclick", () => {
            selectedCards = selectedCards.filter(c => c !== card); // Remove card from selectedCards
            updateMainInterface(); // Update main interface to reflect changes
            updateCardsForSelectedArchetypes(); // Update card selection interface
        });

        savedCardsContainer.appendChild(savedCardElement);
    });

    // Display selected equipment (max 4 items)
    // Display selected equipment (max 4 items)
selectedEquipment.forEach(equipment => {
    const savedEquipmentElement = document.createElement("div");
    savedEquipmentElement.classList.add("equipment");

    savedEquipmentElement.innerHTML = `
        <div class="name">${equipment.name}</div>
        <div class="description">${equipment.description}</div>
        <div class="characteristics">
            ${Object.entries(equipment.characteristics).map(([key, value]) => {
                if (typeof value === 'object') {
                    return `
                        <div class="characteristic">
                            <strong>${key.replace(/([A-Z])/g, ' $1')}: </strong>
                            <div style="padding-left: 10px;">
                                ${Object.entries(value).map(([subKey, subValue]) => `
                                    <div>${subKey}: <strong>${subValue}</strong></div>
                                `).join('')}
                            </div>
                        </div>
                    `;
                } else {
                    return `
                        <div class="characteristic">
                            <strong>${key.replace(/([A-Z])/g, ' $1')}: </strong>${value}
                        </div>
                    `;
                }
            }).join('')}
        </div>
    `;

    // Add event listener for deselecting equipment from Main Interface
    savedEquipmentElement.addEventListener("dblclick", () => {
        selectedEquipment = selectedEquipment.filter(e => e !== equipment); // Remove equipment from selectedEquipment
        updateMainInterface(); // Update main interface to reflect changes
        updateEquipmentSelection(); // Update equipment selection interface
    });

    savedEquipmentContainer.appendChild(savedEquipmentElement);
});


    // Display selected ploys
    // Display selected ploys
if (selectedTeam) {
    const teamPloysData = teamPloys[selectedTeam];
    for (const category in teamPloysData) {
        const categoryElement = document.createElement("div");
        categoryElement.classList.add("ploy-category");
        categoryElement.innerHTML = `<h3>${category}</h3>`;

        teamPloysData[category].forEach(ploy => {
            const ployElement = document.createElement("div");
            ployElement.classList.add("ploy");

            // Set the border color based on the tag
            let borderColor = "";
            switch (ploy.tag) {
                case "Offensive":
                    borderColor = "red";
                    break;
                case "Defensive":
                    borderColor = "blue";
                    break;
                case "Utility":
                    borderColor = "green";
                    break;
            }

            ployElement.style.border = `2px solid ${borderColor}`;
            ployElement.style.padding = "10px";
            ployElement.style.margin = "5px 0";
            ployElement.style.borderRadius = "5px"; // Rounded corners

            ployElement.innerHTML = `
                <div class="ploy-title"><strong>${ploy.tag} - ${category}: ${ploy.title} (${ploy.cost})</strong></div>
                <div class="ploy-description">${ploy.description}</div>
            `;

            categoryElement.appendChild(ployElement);
        });

        ploysContainer.appendChild(categoryElement);
    }
}

}


// Function to update available equipment for the selected team
function updateEquipmentSelection() {
    const availableEquipment = (teamEquipment[selectedTeam] || []).concat(teamEquipment["Common"]);
    equipmentContainer.innerHTML = ''; // Clear existing equipment

    availableEquipment.forEach(equipment => {
        const equipmentElement = document.createElement("div");
        equipmentElement.classList.add("equipment");

        equipmentElement.innerHTML = `
            <div class="name">${equipment.name}</div>
            <div class="description">${equipment.description}</div>
        `;

        // Check if the equipment is already selected and apply 'selected' class
        if (selectedEquipment.includes(equipment)) {
            equipmentElement.classList.add("selected");
        }

        // Add event listener for equipment selection
        equipmentElement.addEventListener("click", () => handleEquipmentSelection(equipment, equipmentElement));

        equipmentContainer.appendChild(equipmentElement);
    });
}

// Function to update cards based on selected archetypes
function updateCardsForSelectedArchetypes() {
    cardsContainer.innerHTML = ''
    selectedArchetypes.forEach(archetype => {
        archetypes[archetype].forEach(card => {
            const cardElement = document.createElement("div");
            cardElement.classList.add("card");

            // Show full card details initially 
            cardElement.innerHTML = `
            <div class="card">
                <div class="title">${card.title}</div>
                <div class="reveal"><strong>${card.reveal}</strong></div>
                <div class="details">
                    <div class="rules"><strong>Rules:</strong> ${card.rules}</div>
                    <div class="victory-points"><strong>Victory Points:</strong> ${card.victoryPoints}</div>
                </div>
            </div>
        `;


            // Check if the card is already selected and apply 'selected' class
            if (selectedCards.includes(card)) {
                cardElement.classList.add("selected");
            }

            // Add event listener for card selection
            cardElement.addEventListener("click", () => handleCardSelection(card, cardElement));

            cardsContainer.appendChild(cardElement);
        });
    });
}

// Function to handle team selection
teamButtons.forEach(button => {
    button.addEventListener("click", () => {
        selectedTeam = button.getAttribute("data-team");


        // Clear previous selections when the team changes
        selectedCards = [];
        selectedArchetypes = [];
        selectedEquipment = [];
        cardsContainer.innerHTML = ''
        
        // Update the UI accordingly
        updateMainInterface(); // Update main interface with cleared selections
        updateArchetypeSelection(selectedTeam); // Update archetypes based on new team
        updateEquipmentSelection(); // Update equipment options
        
        teamSelection.classList.add("hidden"); // Hide team selection
        archetypeSelection.classList.remove("hidden"); // Show archetype selection
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

        updateCardsForSelectedArchetypes(); // Update cards when archetypes change
    });
});

// Menu navigation
teamMenuLink.addEventListener("click", () => showSection(teamSelection));
archetypeMenuLink.addEventListener("click", () => showSection(archetypeSelection));
equipmentMenuLink.addEventListener("click", () => {
    updateEquipmentSelection(); // Update equipment based on the selected team
    showSection(equipmentSelection);
});
selectedCardsMenuLink.addEventListener("click", () => showSection(selectedCardsSection));

// Show the appropriate section
function showSection(section) {
    // Hide all sections
    [teamSelection, archetypeSelection, equipmentSelection, selectedCardsSection].forEach(sec => sec.classList.add("hidden"));
    
    // Show the requested section
    section.classList.remove("hidden");
}

// Ensure team selection is visible initially
document.addEventListener("DOMContentLoaded", () => {
    showSection(teamSelection);
});


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
