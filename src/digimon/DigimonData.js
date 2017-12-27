/* Digimon Digital Adventures Modifiable Data */

module.exports.DigimonAttributes = [
	{ id: "None" },
	{ id: "Vaccine" },
	{ id: "Virus" },
	{ id: "Data" }
];

module.exports.DigimonFamilies = [
	{ id: "Nature Spirits", desc: "Animal or Monster Digimon. They tend to prefer deserts and harsh climates." },
	{ id: "Deep Savers", desc: "Deep sea, artic, or some type aquatic Digimon fit into this Family." },
	{ id: "Nightmare Soldiers", desc: "Undead or Demonic Digimon, they tend to inhabit graveyards or abandoned buildings." },
	{ id: "Wind Guardians", desc: "Bird or air-based Digimon. They tend to prefer open, grassy areas, if they ever land." },
	{ id: "Metal Empire", desc: "Machine or Cyborg Digimon. They tend to prefer cities and factories to inhabit." },
	{ id: "Dark Empire", desc: "Terrifying, apocalyptic Digimon, or Digimon who dwell in the Dark Area." },
	{ id: "Virus Busters", desc: "Holy or Angelic Digimon. They do not always show a preference for where they live." },
	{ id: "Dragon's Roar", desc: "Draconic Digimon, or Digimon who favor mountain or volcanic areas to live in." },
	{ id: "Jungle Troopers", desc: "Insect or Plant Digimon, or Digimon who favor jungles and forests to live in." },
	{ id: "Unknown", desc: "Digimon which are strange or mutated in some way, and do not fit into another Family." }
];

/* Digimon Digital Adventures Hard Data */

module.exports.DigimonStages = {
	"Fresh": { id: "Fresh", startingDP: 5, baseMovement: 2, woundBoxes: 0, brains: 0, attacks: 1, specValues: 0 },
	"In-Training": { id: "In-Training", startingDP: 10, baseMovement: 4, woundBoxes: 1, brains: 1, attacks: 2, specValues: 0 },
	"Rookie": { id: "Rookie", startingDP: 25, baseMovement: 6, woundBoxes: 2, brains: 3, attacks: 2, specValues: 1 },
	"Champion": { id: "Champion", startingDP: 40, baseMovement: 8, woundBoxes: 5, brains: 5, attacks: 3, specValues: 2 },
	"Ultimate": { id: "Ultimate", startingDP: 55, baseMovement: 10, woundBoxes: 7, brains: 7, attacks: 4, specValues: 3 },
	"Mega": { id: "Mega", startingDP: 70, baseMovement: 12, woundBoxes: 10, brains: 10, attacks: 5, specValues: 4 },
	"Burst": { id: "Burst", startingDP: 85, baseMovement: 14, woundBoxes: 14, brains: 13, attacks: 5, specValues: 5 }
};

module.exports.BurstModifier = {
	startingDP: 15,
	baseMovement: 2,
	woundBoxes: 4,
	brains: 3,
	specValues: 1
}

module.exports.DigimonSizes = [
	{ id: "Tiny", area: "1x1", squareMeters: "1+", bodyBonus: 0, notes: "May occupy squares that another Digimon or Tamer are standing in." },
	{ id: "Small", area: "1x1", squareMeters: "1+", bodyBonus: 2, notes: "May move through squares that other Digimon or Tamers are standing in." },
	{ id: "Medium", area: "1x1", squareMeters: "1+", bodyBonus: 4, notes: "" },
	{ id: "Large", area: "2x2", squareMeters: "4+", bodyBonus: 6, notes: "" },
	{ id: "Huge", area: "3x3", squareMeters: "9+", bodyBonus: 8, notes: "" },
	{ id: "Gigantic", area: "4+x4+", squareMeters: "16+", bodyBonus: 10, notes: "" }
];

module.exports.DigimonStats = ["Health", "Accuracy", "Damage", "Dodge", "Armor"];

module.exports.DigimonQualityTags = ["S", "A", "T"];

module.exports.DigimonQualityTagsFull = {
	S: "Qualities which sport the Static Tag are Qualities which are, in short, always on. The Digimon is always considered effected by this Quality unless something happens to disable it.",

	A: "Qualities which have the Attack Tag are Qualities which help directly modify Attacks of the Digimon. While most Qualities modifying Attack are for a single Attack, some may be able to modify more than a single Attack.",

	T: "Trigger Qualities are ones that require a ‘trigger’ to occur. That is to say; they need to have the player activate them in some manner; whether by using an Action in Combat, or by having the enemy miss with an Attack."
}

module.exports.DigimonAttackEffects = {
	"Immobilize (N)" : "The target takes a penalty to their Movement equal to the user’s Bit Value x2 for the duration of the Effect.",

	"Knockback (N)" : "The target is forcibly pushed away from the user a number of meters equal to the user’s CPU Value. This Effect has no Duration.",

	"Taunt (N)" : "The target is takes an Accuracy penalty for attacking anyone who is not the user of the Taunt Effect equal to the user’s CPU Value x3 for the duration of this Effect.",

	"Poison (N)" : "The target takes a set amount of unalterable Wound Box Damage equal to the user’s Bit Value. This Effect has triple the normal Duration of other Effects.",

	"Confuse (N)" : "The target takes a penalty to Accuracy and Dodge equal to the target’s CPU value or Bit value (whichever is higher), for the duration of the Effect.",

	"Stun (N)" : "The target may not take Actions for the duration of this Effect. If the target was Clashing, the Clash ends.",

	"Fear (N)" : "The target takes an Accuracy penalty for attacking the user of this Effect equal to the user’s Bit Value x2 for the duration of this Effect.",

	"Lifesteal (P)" : "This Attack heals a number of the user’s Wound Boxes equal to the user’s CPU value. If the Attack deals damage less than the user’s CPU value, it instead heals for that amount instead. You may use this Attack multiple times per round, but may only activate the Effect once per round. However, you may use this Attack as a Complex Action in order to double the Lifesteal Effect’s potency. Lifesteal has no Duration.",

	"Vigor (P)" : "The target gains a bonus to their Dodge and Movement scores equal to the user’s Bit Value for the duration of this Effect.",

	"Charm (N)" : "The user takes control of the target’s actions for the duration of this Effect.",

	"Fury (P)" : "The target gains a bonus to their Accuracy and Damage scores equal to the user’s Bit value for the duration of this Effect.",

	"Cleanse (P)" : "The user may reduce the duration of a number of Effects equal to their Bit value.",

	"Haste (P)" : "The target of the Attack gains an additional Simple Action to use for one round. This Effect has no Duration. An Attack with the Haste Effect must be used as a Complex Action.",

	"Blind (N)" : "The target takes a penalty to their Accuracy, Dodge, and Movement equal to the user’s Bit Value. Additionally, the target automatically fails Perception checks for the duration of this Effect.",

	"Paralysis (N)" : "The target cannot move for the duration of the effect and takes a penalty to their Dodge and Armor equal to the user’s Bit value. If the target was Clashing, the Clash ends.",

	"Weaken (N)" : "The target takes a penalty to all stats (including Health) equal to the user’s Bit Value x2 for the duration of this Effect.",

	"Strengthen (P)" : "The target gains a bonus to all stats (including Health) equal to the user’s Bit Value x2 for the duration of this Effect.",

	"Heal (P)" : "The target gains an amount of Temporary Wound Boxes equal to the user’s Bit value x2. You cannot use a Heal Effect more than once per Round, but may increase the potency to your Bit value x5 by making an Attack with [Heal] a Complex Action instead for that round.",

	"Regenerate (P)" : "The target regains Wound Boxes at the start of each round equal to the user’s Bit Value for the duration if this Effect. While under the effects of Regenerate, the target is also treated as if they had Resistant Rank 2."
}

module.exports.DigimonQualities = {
	"Agility": {tags: ["T"], cost: 2, maxRanks: false, desc: "The Digimon may re-roll any dice that show up as 1’s on a Dodge roll once per fight.", unlocks: ["Avoidance"], handler: "ability" },

	"Area Attack - Blast": {tags: ["A", "T"], cost: 2, maxRanks: false, desc: "Ranged: Blast Attacks create a circular zone whose origin point is somewhere within the user’s Range. The diameter is 1 Meter at base, but the user may add their Bit Value to the diameter.", unlocks: [], handler: "attack", attackTag: "[Blast]" },

	"Area Attack - Burst": {tags: ["A", "T"], cost: 2, maxRanks: false, desc: "Melee/Ranged: Burst Attacks create a circular zone with the user at the point of origin. The base radius is 1 Meter, however the user may add double their Bit Value to the radius.", unlocks: [], handler: "attack", attackTag: "[Burst]" },

	"Area Attack - Close Blast": {tags: ["A", "T"], cost: 2, maxRanks: false, desc: "Melee/Ranged: Close Blasts originate in a circular zone adjacent to the user. The circle’s base radius is 3 Meters. The user may add double their Bit Value to the radius.", unlocks: [], handler: "attack", attackTag: "[Close Blast]" },

	"Area Attack - Cone": {tags: ["A", "T"], cost: 2, maxRanks: false, desc: "Melee/Ranged: Cone Attacks create a triangle, or a cone, which originates adjacent to the user. The shape has a base length of 3 meters. The user may add double their Bit Value to the length.", unlocks: [], handler: "attack", attackTag: "[Cone]" },

	"Area Attack - Line": {tags: ["A", "T"], cost: 2, maxRanks: false, desc: "Melee/Ranged: Line Attacks create a pillar which originate adjacent to the user. The pillar’s length is 5 meters at base. The user may add their Bit value to the length. The pillar’s width is 1 at base, but the user may add 1 to the width for each Size Class they are above Medium.", unlocks: [], handler: "attack", attackTag: "[Line]" },

	"Area Attack - Pass": {tags: ["A", "T"], cost: 2, maxRanks: false, desc: "Melee: Pass Attacks have the user charge in a straight line in a given direction, hitting every target along the way. Once the Pass Attack is called, the direction can not be changed. They may move a distance equal to their Movement score, and then continue to move an additional number of meters equal to (or less than) their CPU Value. A Pass Attack requires Movement to use; so if the user has a Pass Attack they must use up two Simple Actions to use it. However, if the Pass Attack has the [Charge] Tag, this rule is ignored and the Pass Attack only takes up one Simple Action.", unlocks: [], handler: "attack", attackTag: "[Pass]" },

	"Armor Piercing": {tags: ["A"], cost: 1, maxRanks: 3, desc: "Choose one Attack. That Attack ignores up to X points that any defending Digimon has in Armor, where X is one higher than the Ranks you have of Armor Piercing. Armor Piercing may only be applied to one Attack per Digimon. A Digimon may not have Armor Piercing and Certain Strike on the same Attack.", unlocks: [], handler: "attack", attackTag: "[Armor Piercing]" },

	"Attack Effect - Immobilize (N)": {tags: ["A"], cost: 1, maxRanks: 0, desc: "The target takes a penalty to their Movement equal to the user’s Bit Value x2 for the duration of the Effect.", unlocks: [], handler: "attack", attackTag: "[Immobilize]" },

	"Attack Effect - Knockback (N)": {tags: ["A"], cost: 1, maxRanks: 0, desc: "The target is forcibly pushed away from the user a number of meters equal to the user’s CPU Value. This Effect has no Duration.", unlocks: [], handler: "attack", attackTag: "[Knockback]" },

	"Attack Effect - Taunt (N)": {tags: ["A"], cost: 1, maxRanks: 0, desc: "The target is takes an Accuracy penalty for attacking anyone who is not the user of the Taunt Effect equal to the user’s CPU Value x3 for the duration of this Effect.", unlocks: [], handler: "attack", attackTag: "[Taunt]" },

	"Attack Effect - Poison (N)": {tags: ["A"], cost: 2, maxRanks: 0, desc: "The target takes a set amount of unalterable Wound Box Damage equal to the user’s Bit Value. This Effect has triple the normal Duration of other Effects.", unlocks: [], handler: "attack", attackTag: "[Poison]" },

	"Attack Effect - Confuse (N)": {tags: ["A"], cost: 2, maxRanks: 0, desc: "The target takes a penalty to Accuracy and Dodge equal to the target’s CPU value or Bit value (whichever is higher), for the duration of the Effect.", unlocks: [], handler: "attack", attackTag: "[Confuse]" },

	"Attack Effect - Stun (N)": {tags: ["A"], cost: 2, maxRanks: 0, desc: "The target may not take Actions for the duration of this Effect. If the target was Clashing, the Clash ends.", unlocks: [], handler: "attack", attackTag: "[Stun]" },

	"Attack Effect - Fear (N)": {tags: ["A"], cost: 2, maxRanks: 0, desc: "The target takes an Accuracy penalty for attacking the user of this Effect equal to the user’s Bit Value x2 for the duration of this Effect.", unlocks: [], handler: "attack", attackTag: "[Fear]" },

	"Attack Effect - Lifesteal (P)": {tags: ["A"], cost: 2, maxRanks: 0, desc: "This Attack heals a number of the user’s Wound Boxes equal to the user’s CPU value. If the Attack deals damage less than the user’s CPU value, it instead heals for that amount instead. You may use this Attack multiple times per round, but may only activate the Effect once per round. However, you may use this Attack as a Complex Action in order to double the Lifesteal Effect’s potency. Lifesteal has no Duration.", unlocks: [], handler: "attack", attackTag: "[Lifesteal]" },

	"Attack Effect - Vigor (P)": {tags: ["A"], cost: 2, maxRanks: 0, desc: "The target gains a bonus to their Dodge and Movement scores equal to the user’s Bit Value for the duration of this Effect.", unlocks: [], handler: "attack", attackTag: "[Vigor]" },

	"Attack Effect - Fury (P)": {tags: ["A"], cost: 2, maxRanks: 0, desc: "The target gains a bonus to their Accuracy and Damage scores equal to the user’s Bit value for the duration of this Effect.", unlocks: [], handler: "attack", attackTag: "[Fury]" },

	"Attack Effect - Cleanse (P)": {tags: ["A"], cost: 2, maxRanks: 0, desc: "The user may reduce the duration of a number of Effects equal to their Bit value.", unlocks: [], handler: "attack", attackTag: "[Cleanse]" },

	"Attack Effect - Haste (P)": {tags: ["A"], cost: 2, maxRanks: 0, desc: "The target of the Attack gains an additional Simple Action to use for one round. This Effect has no Duration. An Attack with the Haste Effect must be used as a Complex Action.", unlocks: [], handler: "attack", attackTag: "[Haste]" },

	"Attack Effect - Blind (N)": {tags: ["A"], cost: 3, maxRanks: 0, desc: "The target takes a penalty to their Accuracy, Dodge, and Movement equal to the user’s Bit Value. Additionally, the target automatically fails Perception checks for the duration of this Effect.", unlocks: [], handler: "attack", attackTag: "[Blind]" },

	"Attack Effect - Paralysis (N)": {tags: ["A"], cost: 3, maxRanks: 0, desc: "The target cannot move for the duration of the effect and takes a penalty to their Dodge and Armor equal to the user’s Bit value. If the target was Clashing, the Clash ends.", unlocks: [], handler: "attack", attackTag: "[Paralysis]" },

	"Attack Effect - Charm (N)": {tags: ["A"], cost: 3, maxRanks: 0, desc: "The user takes control of the target’s actions for the duration of this Effect.", unlocks: [], handler: "attack", attackTag: "[Charm]" },

	"Attack Effect - Weaken (N)": {tags: ["A"], cost: 3, maxRanks: 0, desc: "The target takes a penalty to all stats (including Health) equal to the user’s Bit Value x2 for the duration of this Effect.", unlocks: [], handler: "attack", attackTag: "[Weaken]" },

	"Attack Effect - Strengthen (P)": {tags: ["A"], cost: 3, maxRanks: 0, desc: "The target gains a bonus to all stats (including Health) equal to the user’s Bit Value x2 for the duration of this Effect.", unlocks: [], handler: "attack", attackTag: "[Strengthen]" },

	"Attack Effect - Heal (P)": {tags: ["A"], cost: 3, maxRanks: 0, desc: "The target gains an amount of Temporary Wound Boxes equal to the user’s Bit value x2. You cannot use a Heal Effect more than once per Round, but may increase the potency to your Bit value x5 by making an Attack with [Heal] a Complex Action instead for that round.", unlocks: [], handler: "attack", attackTag: "[Heal]" },

	"Attack Effect - Regenerate (P)": {tags: ["A"], cost: 3, maxRanks: 0, desc: "The target regains Wound Boxes at the start of each round equal to the user’s Bit Value for the duration if this Effect. While under the effects of Regenerate, the target is also treated as if they had Resistant Rank 2.", unlocks: [], handler: "attack", attackTag: "[Regenerate]" },

	"Certain Strike": {tags: ["A"], cost: 2, maxRanks: 3, desc: "Choose one Attack. That Attack now negates up to X Successful Dodge dice that any defending Digimon roll, where X is the ranks you have in Certain Strike. Certain Strike may only be applied to one Attack per Digimon. A Digimon may not have Certain Strike and Armor Piercing on the same Attack.", unlocks: ["Signature Move"], handler: "attack", attackTag: "[Certain Strike]" },

	"Charge Attack": {tags: ["A"], cost: 1, maxRanks: 0, desc: "Choose a [Melee] Attack. By applying the [Charge] Tag to that Attack, the Digimon may use the Attack and move as one Simple Action, instead of needing to use two Simple Actions; one to Attack and one to Move. In short a [Charge] Tag allows the Digimon to use the tagged Attack to move and Attack at the same time.", unlocks: [], handler: "attack", attackTag: "[Charge]" },

	"Combat Awareness I": {tags: ["A"], cost: 1, maxRanks: false, desc: "Add your Ranks in Combat Awareness to your Initiative in the first round of Combat. You gain +2 to Dodge against Surprise Attacks.", unlocks: ["Combat Awareness II"], handler: "ability" },

	"Combat Awareness II": {tags: ["A"], cost: 1, maxRanks: false, desc: "Add your Ranks in Combat Awareness to your Dodge for the first round of Combat. You gain a +4 bonus to Dodge against Surprise Attacks.", prereqs: {"Combat Awareness I": 1}, unlocks: ["Combat Awareness III"], handler: "ability" },

	"Combat Awareness III": {tags: ["A"], cost: 1, maxRanks: false, desc: "Add your Ranks in Combat Awareness to your Accuracy for the first round of Combat. You gain a +6 bonus to Dodge against Surprise Attacks. You gain +2 Movement for the first round of Combat.", prereqs: {"Combat Awareness II": 1}, unlocks: [], handler: "ability" },

	"Combat Monster": {tags: ["S"], cost: 2, maxRanks: false, desc: "Whenever the Digimon takes damage, it gains a cumulative bonus to the Damage of its next successful Attack equal to the number of Wound Boxes it has lost since the last successful Attack. For example, if the Digimon takes 4 damage, misses, takes 3 damage, then connects, the Attack deals an additional 7 Damage. The next Attack in the same scenario gains no bonus Damage.", unlocks: ["Berserker"], handler: "ability" },

	"Conjurer": {tags: ["T"], cost: 2, maxRanks: false, desc: "The Digimon is capable of summoning objects out of thin air as a Complex Action. The objects may be re-flavored however you want; toys, blocks, just about any object which cannot move on its own. The objects may occupy a number of cubic meters equal to five times the Digimon’s Bit Value. The objects may be summoned, lined up, stacked on top of each other, or simply littered around the field as a Complex Action. The objects count as Obstructing Terrain (this means that it stops attacks from going through, even Area Attacks!). The objects have Wound Boxes equal to five times the Digimon’s Bit Value, and Armor equal to double the Digimon’s Bit Value. They do not have a Dodge Stat. For example, a Digimon with Brains of 50 would have a Bit Value of 5, which would allow it to use Conjurer to create 25 Cubic Meters of objects which sport 25 Wound Boxes and 10 Armor.", unlocks: ["Summoner"], handler: "ability" },

	"Counterattack": {tags: ["T"], cost: 2, maxRanks: false, desc: "Once per combat, if an enemy were to miss with an Attack, you may make a free attack with them as the sole target (you may not use this Quality while also using the attack as an Area Attack). You may choose any Attack on your Attack List otherwise. The target only rolls half of their Dodge Pool in response to the new Attack.", unlocks: ["Counterblow"], handler: "ability" },

	"Data Optimization - Close Combat": {tags: ["S"], cost: 1, maxRanks: false, desc: "The Digimon adds +2 to its Accuracy Pool when using a [Melee] tagged Attack, but takes a -1 penalty to its Accuracy Pool when using a [Ranged] tagged Attack.", unlocks: ["Data Specialization - Fistful of Force", "Data Specialization - Flurry", "Hybrid Drive - Close Combat Adjacent"], handler: "dataOpt" },

	"Data Optimization - Ranged Striker": {tags: ["S"], cost: 1, maxRanks: false, desc: "The Digimon adds +2 to its Accuracy when using a [Ranged] tagged Attack, but suffers a -1 penalty to its Dodge pool when defending against a [Melee] tagged Attack.", unlocks: ["Data Specialization - Sniper", "Data Specialization - Mobile Artillery", "Hybrid Drive - Ranged Striker Adjacent"], handler: "dataOpt" },

	"Data Optimization - Guardian": {tags: ["S"], cost: 1, maxRanks: false, desc: "The Digimon gains a +2 Armor bonus, but takes a -1 penalty to its Base Movement score.", unlocks: ["Data Specialization - What Goes Around", "Data Specialization - True Guardian", "Hybrid Drive - Guardian Adjacent"], handler: "dataOpt", statMods: { Armor: 2, BaseMovement: -1 } },

	"Data Optimization - Brawler": {tags: ["S"], cost: 2, maxRanks: false, desc: "The Digimon gains a +2 bonus to all checks it makes when Clashing. In addition, it is treated as if it were one Size Class larger when Clashing. Gigantic Digimon with Brawler Optimization gain a flat +4 to all checks it makes while Clashing.", unlocks: ["Data Specialization - Power Throw", "Data Specialization - Wrestlemania", "Hybrid Drive - Brawler Adjacent"], handler: "dataOpt" },

	"Data Optimization - Speed Striker": {tags: ["S"], cost: 1, maxRanks: false, desc: "The Digimon gains a +3 bonus to its Base Movement score, but gains a -1 Dodge penalty.", unlocks: ["Data Specialization - Hit and Run", "Data Specialization - Uncatchable Target", "Hybrid Drive - Speed Striker Adjacent"], handler: "dataOpt", statMods: { BaseMovement: 3, Dodge: -1 } },

	"Data Optimization - Effect Warrior": {tags: ["S"], cost: 2, maxRanks: false, desc: "The Digimon gains a +1 bonus to its base Spec Values, but suffers a -2 Armor penalty.", unlocks: ["Data Specialization - Black Mage", "Data Specialization - White Mage", "Hybrid Drive - Effect Warrior Adjacent"], handler: "dataOpt", statMods: { Armor: -2, SpecValues: 1 } },

	"Extra Movement - Flight": {tags: ["S"], cost: 2, maxRanks: false, desc: "The Digimon is capable of flying through the air.", unlocks: ["Advanced Mobility - Flight"], handler: "addMovement", movementType: "Flight Speed" },

	"Extra Movement - Digger": {tags: ["S"], cost: 1, maxRanks: false, desc: "The Digimon is capable of burrowing through the ground, so long as it’s as soft as dirt. Snow or sand are other alternatives.", unlocks: ["Advanced Mobility - Digger"], handler: "addMovement", movementType: "Digging Speed" },

	"Extra Movement - Swimmer": {tags: ["S"], cost: 1, maxRanks: false, desc: "The Digimon is capable of moving through the water at a much faster speed than normal.", unlocks: ["Advanced Mobility - Swimmer"], handler: "addMovement", movementType: "Swim Speed" },

	"Extra Movement - Wallclimber": {tags: ["S"], cost: 1, maxRanks: false, desc: "The Digimon is capable of scaling vertical surfaces, but not on ceilings.", unlocks: ["Advanced Mobility - Wallclimber"], handler: "addMovement", movementType: "Wallclimb Speed" },

	"Extra Movement - Jumper": {tags: ["S"], cost: 1, maxRanks: false, desc: "The Digimon is capable of jumping at a height and length equal to its Movement.", unlocks: ["Advanced Mobility - Jumper"], handler: "addMovement", movementType: "Jump Height" },

	"Hide in Plain Sight": {tags: ["S"], cost: 1, maxRanks: 3, desc: "Anyone attempting to spot the user of the Hide in Plain Sight Quality takes a penalty to their Roll to find them (usually Perception) equal to the Ranks it has multiplied by 4. For example, if you have Hide in Plain Sight Rank 3, anyone attempting to spot you will take a -12 penalty to their rolls. The Digimon may become transparent, be capable of disguising itself to be less obvious, or maybe just really good at finding a place to hide.", unlocks: ["Sneak Attack", "Shade Cloak"], handler: "ability" },

	"Huge Power": {tags: ["T"], cost: 2, maxRanks: false, desc: "The Digimon may re-roll any dice that show up as 1’s on a Accuracy roll once per fight.", unlocks: ["Overkill"], handler: "ability" },

	"Improved Derived Stat - Body": {tags: ["S"], cost: 1, maxRanks: 0, desc: "Whenever you take Improved Derived Stat - Body, increase your Agility Derived Stat by 1.", unlocks: [], handler: "addStat", statMods: { Body: 1 }  },

	"Improved Derived Stat - Brains": {tags: ["S"], cost: 1, maxRanks: 0, desc: "Whenever you take Improved Derived Stat - Brains, increase your Agility Derived Stat by 1.", unlocks: [], handler: "addStat", statMods: { Brains: 1 }  },

	"Improved Derived Stat - Agility": {tags: ["S"], cost: 1, maxRanks: 0, desc: "Whenever you take Improved Derived Stat - Agility, increase your Agility Derived Stat by 1.", unlocks: [], handler: "addStat", statMods: { Agility: 1 }  },

	"Mighty Blow": {tags: ["S"], cost: 2, maxRanks: false, desc: "Whenever the Digimon deals Damage to an Opponent and the result is equal to or greater than twice the Opponent’s Body score, the Opponent is Stunned for one round.", unlocks: [], handler: "ability" },

	"Mode Change": {tags: ["T"], cost: 2, maxRanks: 0, desc: "For each Rank you take of Mode Change, pick two Stats. As a Simple Action, you can swap the two Stats around. Each time you take this Quality, choose a combination you have not taken before. Health may not be chosen as a Stat for this Quality. Use only the Base Stat when doing the math, it is not changed by things like Stances or Directing.", unlocks: ["Mode Change X.0"], handler: "ability" },

	"Naturewalk": {tags: ["S"], cost: 1, maxRanks: 0, desc: "The Digimon is at home on a certain type of Terrain. For each Rank you take in this Quality, choose a different type of Terrain such as, but not limited to: Tundra, Forest, Mountain, Jungle, or Desert. Be sure to talk to your GM when taking this Quality; they might not have a lot of the Terrain in mind for their campaign. The Digimon does not suffer Movement penalties from Difficult Terrain of its chosen environment.", unlocks: ["Element Master"], handler: "ability" },

	"Pack Master": {tags: ["S"], cost: 2, maxRanks: 3, desc: "All Allies within the Digimon’s Ranged Burst Radius (1+Bit Value Doubled), gain a +2 Accuracy bonus per Rank the Digimon has in this Quality.", unlocks: [], handler: "ability" },

	"Pack Tactics": {tags: ["S"], cost: 1, maxRanks: 3, desc: "Whenever this Digimon is either within the Digimon’s [Burst] Radius of an ally, or it and an ally Flank an enemy, the Digimon gains a +2 bonus to its Accuracy Rolls per Rank in this Quality.", unlocks: ["Coordinated Assault"], handler: "ability" },

	"Quick Healer": {tags: ["T"], cost: 2, maxRanks: false, desc: "The Digimon may re-roll any dice that show up as 1’s when rolling to heal out of Combat, but only once after each fight.", unlocks: ["Regenerator"], handler: "" },

	"Reach": {tags: ["S"], cost: 3, maxRanks: 0, desc: "The Digimon is able to use [Melee] Attacks and Initiate Clashes at a Range equal to the number of Ranks in this Quality doubled. If the Digimon uses a [Melee] Attack with an Area Tag, they may have the point of origin be anywhere within its reach. [Melee] Attacks take a penalty to Accuracy as if they were [Ranged] Attacks based on the distance.", unlocks: [], handler: "ability" },

	"Resistant": {tags: ["S"], cost: 1, maxRanks: 0, desc: "For each Rank in Resistant a Digimon has, it decreases the duration of incoming [Effect] Tagged Attacks by 1 Round (this Quality cannot bring the Duration below 1 Round (3 Rounds for Poison).", unlocks: [], handler: "ability" },

	"Slayer": {tags: ["S"], cost: 1, maxRanks: 0, desc: "Slayer is a very specific Quality: when you take the first Rank of the Quality, choose one Major and two Minor ‘targets’. For one example, a WarGreymon who takes Slayer for slaying Dramon-class Digimon might choose a Major of Dramon-class Digimon, and a Minor of Dragon Man and Dinosaur Digimon. Slayer grants a +2 bonus to Accuracy checks against the Major, and +1 against the Minors, per Rank. Additionally, if the Digimon fits into one of these Qualities itself, on a Missed Attack it takes unalterable damage equal to its CPU Value. Be sure to consult your GM before you take and decide on this Quality.",  unlocks: [], handler: "ability" },

	"Selective Targeting": {tags: ["S"], cost: 2, maxRanks: false, desc: "The Digimon’s Attacks will no longer be able to Damage Allies or place negative Effects on them such as Poison, Weaken, or Blind. Inversely, enemies the Digimon Attack will not be able to gain benefits from positive Effects such as Healing, Strengthen, or Cleanse.", unlocks: [], handler: "ability" },

	"Speedy": {tags: ["S"], cost: 1, maxRanks: 0, desc: "For each Rank you take in Speedy, the Digimon adds 2 to its Movement. You may not more than double the Digimon’s Base Movement in this manner.", unlocks: ["Teleport", "Advanced Mobility - Movement"], handler: "restriction" },

	"System Boost - BIT Value": {tags: ["S"], cost: 3, maxRanks: 0, desc: "For each Rank you take in System Boost, increase Digimon’s BIT Value by 1. You may not more than double the Digimon’s BIT Value in this manner. The stat may still be improved by Derived Stats as per usual after System Boost.", unlocks: [], handler: "restriction" },

	"System Boost - CPU Value": {tags: ["S"], cost: 3, maxRanks: 0, desc: "For each Rank you take in System Boost, increase Digimon’s CPU Value by 1. You may not more than double the Digimon’s CPU Value in this manner. The stat may still be improved by Derived Stats as per usual after System Boost.", unlocks: [], handler: "restriction" },

	"System Boost - RAM Value": {tags: ["S"], cost: 3, maxRanks: 0, desc: "For each Rank you take in System Boost, increase Digimon’s RAM Value by 1. You may not more than double the Digimon’s RAM Value in this manner. The stat may still be improved by Derived Stats as per usual after System Boost.", unlocks: [], handler: "restriction" },

	"Technician": {tags: ["S"], cost: 1, maxRanks: 3, desc: "A Digimon with Technician is skilled at repairing code and technology, and by default can read and comprehend Digicode for its Tamer. It also gains a +4 bonus to repairing or deciphering code and machinery, or simply rebuilding things in the Digital World, per Rank in this Quality.", unlocks: ["Trojan", "Firewall"], handler: "ability" },

	"Tracker": {tags: ["S"], cost: 1, maxRanks: 3, desc: "Tracker makes a Digimon significantly better at finding its target. It gains a +4 bonus to Perception (Brains) checks to find hidden traps or enemies in the immediate area, or follow a trail. If the Digimon has a proper tool to track the target, such as clothing or a trail of footprints, it gains an additional +2 bonus per Rank in Tracker.", unlocks: [], handler: "ability" },

	"Tumbler": {tags: ["S"], cost: 3, maxRanks: false, desc: "The Digimon only takes one-half the Damage it normally would when falling due to being Pinned midair, and recieves Bonus Armor equal to its CPU Value Doubled when it is Thrown.", unlocks: [], handler: "ability" },

	"Weapon": {tags: ["S, A"], cost: 1, maxRanks: 3, desc: "Your Digimon has a Weapon, or some type of fighting style it prefers. Attacks which use said Weapon or fighting style may gain a [Weapon] Tag. A Digimon may only have a number of [Weapon] Tagged Attacks equal to the Ranks it has in this Quality. Whenever a Digimon uses a [Weapon] Tagged Attack, it gains a bonus to Accuracy and Damage equal to the Ranks in this Quality.", unlocks: ["Chrome Digizoid Weapon", "Black Digizoid Weapon", "Blue Digizoid Weapon", "Gold Digizoid Weapon", "Obsidian Digizoid Weapon", "Red Digizoid Weapon"], handler: "attack", attackTag: "[Weapon]" }
}

module.exports.DigimonQualitiesAdvanced = {
	"Advanced Mobility - Movement": {tags: ["S"], cost: 3, maxRanks: false, desc: "The Digimon may now take Speedy Ranks to a point where it will triple its Base Movement over Double it.", prereqs: {"Speedy": 1}, unlocks: [], handler: "ability" },

	"Advanced Mobility - Flight": {tags: ["S"], cost: 3, maxRanks: false, desc: "The Digimon is not slowed down by even the harshest of winds while it’s in the air and its Flight speed is increased by 3.", prereqs: {"Extra Movement - Flight": 1}, unlocks: [], handler: "addStat", statMods: { "Flight Speed": 3 } },

	"Advanced Mobility - Digger": {tags: ["S"], cost: 3, maxRanks: false, desc: "The Digimon is now capable of digging through the majority of surfaces without being slowed down. It can dig through softer metals but this is now trated as Difficult Terrain. The Digimon’s Digging speed is increased by 3.", prereqs: {"Extra Movement - Digger": 1}, unlocks: [], handler: "addStat", statMods: { "Digging Speed": 3 } },

	"Advanced Mobility - Swimmer": {tags: ["S"], cost: 3, maxRanks: false, desc: "The Digimon is capable of swimming without being slowed down by harsh currents, and its Swimming speed is increased by 3.", prereqs: {"Extra Movement - Swimmer": 1}, unlocks: [], handler: "addStat", statMods: { "Swim Speed": 3 } },

	"Advanced Mobility - Wallclimber": {tags: ["S"], cost: 3, maxRanks: false, desc: "The Digimon is now capable of walking on ceilings, and cannot be slowed or slip off any wall surfaces. Its Wall Climbing Speed is increased by 3.", prereqs: {"Extra Movement - Wallclimber": 1}, unlocks: [], handler: "addStat", statMods: { "Wallclimb Speed": 3 } },

	"Advanced Mobility - Jumper": {tags: ["S"], cost: 3, maxRanks: false, desc: "The Digimon’s Jump height and Length is increased by its CPU Value times Five.", prereqs: {"Extra Movement - Jumper": 1}, unlocks: [], handler: "addStat", statMods: { "Jump Height": 0 }, multiplier: "CPU Value" },

	"Avoidance": {tags: ["T"], cost: 2, maxRanks: false, desc: "Once per fight, the Digimon may choose one of the following: it may either activate Agility an additional time per fight, or it may re-roll 1’s and 2’s instead of just 1’s on an activation of Agility, again only once per Combat.", prereqs: {"Agility": 1}, unlocks: [], handler: "ability" },

	"Berserker": {tags: ["T"], cost: 2, maxRanks: false, desc: "The Digimon gains a Rage Meter, which is represented by 2D6, both dice starting at 1 (which means the value of the Rage Meter beings at 2). Normally the Rage Meter is inactive but may be activated as a Simple Action. Whenever the Digimon connects with an Attack, it gains +1 Rage. Whenever it misses with an Attack, it gains +2 Rage. Whenever it is hit by an Attack, it gains +2 Rage. If a whole Round passes by without the Digimon using an Attack or being hit by an Attack itself, it loses 4 Rage. The Rage Meter must be active for the Digimon to gain Rage. For every point the Digimon has in Rage, it gains a +1 bonus to Armor and Damage. However, when the Rage Meter is filled (in this case at a value of 12), the Digimon goes berserk and is now under the GM’s control, generally attacking everything on sight. The Rage Meter may be deactivated as a Simple Action involving a TN 5+(Rage) Persuade Check from the Tamer or another Ally.", prereqs: {"Combat Monster": 1}, unlocks: ["Boiling Blood"], handler: "ability" },

	"Boiling Blood": {tags: ["S"], cost: 1, maxRanks: 3, desc: "For each Rank in Boiling Blood, the user of this Quality lowers the penalty to its Rage Meter on a round without a connected Attack by 1. For example, if you take Boiling Blood Rank 2, on a Round where the Digimon does not Attack, and an Opponent does not hit with an Attack, it only loses 2 Rage instead of 4.", prereqs: {"Combat Monster": 1}, unlocks: ["You Won’t Like Me When I’m Angry"], handler: "ability" },

	"Coordinated Assault": {tags: ["T"], cost: 3, maxRanks: false, desc: "The Digimon may Mark a single target as a Simple Action. A Target who is Marked gains a -3 Dodge Penalty over a -1 Penalty for each Attack which targets it somehow past the first one in each Round of Combat. This Quality may only be activated once every Combat. The Mark vanishes if the uses loses the Quality (usually by Digivolving) or is defeated. If the original target of the Mark is defeated, the user of this Quality may change the target for free immediately after.", prereqs: {"Pack Tactics": 1}, unlocks: [], handler: "ability" },

	"Counterblow": {tags: ["T", "A"], cost: 2, maxRanks: false, desc: "Choose one Attack to apply a [Counter] Tag to. Whenever the Digimon activates the Counterattack Quality and uses the tagged Attack, the target of the tagged Attack may only apply 1/2 of their Armor Stat, in addition to the penalty to their Dodge Pool.", prereqs: {"Counterattack": 1}, unlocks: [], handler: "attack", attackTag: "[Counter]" },

	"Data Specialization - Fistful of Force": {tags: ["S", "T"], cost: 2, maxRanks: false, desc: "The Digimon’s [Melee] tagged [Area] Attacks now scale for area size as if they were [Ranged] Attacks.", prereqs: {"Data Optimization - Close Combat": 1, "Hybrid Drive - Brawler Adjacent": 1, "Hybrid Drive - Speed Striker Adjacent": 1}, unlocks: [], handler: "dataSpec", stage: "Ultimate" },

	"Data Specialization - Flurry": {tags: ["S", "T"], cost: 3, maxRanks: false, desc: "The Digimon may make an additional [Melee] Attack once per Round for free. This Attack cannot be modified in any way; you cannot add Tags or Qualities which are not tagged as Static. The Digimon takes a -2 Accuracy Pool Penalty when making this Attack.", prereqs: {"Data Optimization - Close Combat": 1, "Hybrid Drive - Brawler Adjacent": 1, "Hybrid Drive - Speed Striker Adjacent": 1}, unlocks: [], handler: "dataSpec", stage: "Ultimate" },

	"Data Specialization - Sniper": {tags: ["S", "T"], cost: 2, maxRanks: false, desc: "The Digimon’s limitations on range for [Ranged] Attacks is considered doubled before it starts suffering penalties to Accuracy. The Digimon takes a -1 Base Movement Penalty and a -2 penalty to its Accuracy Pool when making an Attack against a foe within 2 Meters.", prereqs: {"Data Optimization - Ranged Striker": 1, "Hybrid Drive - Speed Striker Adjacent": 1, "Hybrid Drive - Effect Warrior Adjacent": 1}, unlocks: [], handler: "dataSpec", statMods: { BaseMovement: -1 }, stage: "Ultimate" },

	"Data Specialization - Mobile Artillery": {tags: ["S", "T"], cost: 3, maxRanks: false, desc: "The Digimon adds its Bit Value an additional time when calculating the size of [Area] Tagged Attacks. Additionally, the Digimon no longer takes a penalty for having multiple targets within its [Area] Attacks. The Digimon takes a -1 Movement Penalty.", prereqs: {"Data Optimization - Ranged Striker": 1, "Hybrid Drive - Speed Striker Adjacent": 1, "Hybrid Drive - Effect Warrior Adjacent": 1}, unlocks: [], handler: "dataSpec", statMods: { BaseMovement: -1 }, stage: "Ultimate" },

	"Data Specialization - What Goes Around": {tags: ["S", "T"], cost: 2, maxRanks: false, desc: "Whenever the Digimon is hit by a [Melee] Attack, it deals damage equal to its CPU Value to the opponent. This damage cannot be reduced by Armor or Dodge.", prereqs: {"Data Optimization - Guardian": 1, "Hybrid Drive - Brawler Adjacent": 1, "Hybrid Drive - Effect Warrior Adjacent": 1}, unlocks: [], handler: "dataSpec", stage: "Ultimate" },

	"Data Specialization - True Guardian": {tags: ["S", "T"], cost: 3, maxRanks: false, desc: "Whenever the Digimon Intercedes, it gains a bonus to Armor equal to the distance traveled to Intercede. Additionally, if the Attack had an [Area] tag, any allies behind the Digimon have the damage taken reduced by the Digimon’s CPU value multiplied by 5, and any [Effect]s they would take are negated. The Digimon takes a -2 Accuracy Penalty.", prereqs: {"Data Optimization - Guardian": 1, "Hybrid Drive - Brawler Adjacent": 1, "Hybrid Drive - Effect Warrior Adjacent": 1}, unlocks: [], handler: "dataSpec", statMods: { Accuracy: -2 }, stage: "Ultimate" },

	"Data Specialization - Power Throw": {tags: ["S", "T"], cost: 2, maxRanks: false, desc: "Whenever the Digimon throws a target, it adds its CPU value doubled to its Accuracy.", prereqs: {"Data Optimization - Brawler": 1, "Hybrid Drive - Close Combat Adjacent": 1, "Hybrid Drive - Guardian Adjacent": 1}, unlocks: [], handler: "dataSpec", stage: "Ultimate" },

	"Data Specialization - Wrestlemania": {tags: ["S", "T"], cost: 3, maxRanks: false, desc: "The Digimon may Clash without making an Action once per Round. It may initiate multiple Clashes if it has Multi-Grappler, but they must all be initiated at the same time. The Digimon takes a -1 penalty to Damage, Armor, and Health.", prereqs: {"Data Optimization - Brawler": 1, "Hybrid Drive - Close Combat Adjacent": 1, "Hybrid Drive - Guardian Adjacent": 1}, unlocks: [], handler: "dataSpec", statMods: { Damage: -1, Armor: -1, Health: -1 }, stage: "Ultimate" },

	"Data Specialization - Hit and Run": {tags: ["S", "T"], cost: 2, maxRanks: false, desc: "Whenever the Digimon uses a [Charge] tagged Attack, they add the distance traveled to the Damage.", prereqs: {"Data Optimization - Speed Striker": 1, "Hybrid Drive - Close Combat Adjacent": 1, "Hybrid Drive - Ranged Striker Adjacent": 1}, unlocks: [], handler: "dataSpec", stage: "Ultimate" },

	"Data Specialization - Uncatchable Target": {tags: ["S", "T"], cost: 3, maxRanks: false, desc: "The Digimon gains a +3 Dodge bonus and does not suffer a stacking Dodge penalty if it is attacked multiple times in a round. The Digimon also gains a +1 Dodge bonus to [Area] tagged Attacks.", prereqs: {"Data Optimization - Speed Striker": 1, "Hybrid Drive - Close Combat Adjacent": 1, "Hybrid Drive - Ranged Striker Adjacent": 1}, unlocks: [], handler: "dataSpec", statMods: { Dodge: 3 }, stage: "Ultimate" },

	"Data Specialization - Black Mage": {tags: ["S", "T"], cost: 2, maxRanks: false, desc: "Whenever the Digimon uses a ‘negative’ [Effect] Tagged Attack (an Effect which hinders or damages a target such as Poison, Blind, or Weaken), it gains an additional round to the duration after the leftover Accuracy Dice and Resistant are calculated. For reference, this means most negative Effects the Digimon uses will not have a Duration below 2 rounds (4 for Poison).", prereqs: {"Data Optimization - Effect Warrior": 1, "Hybrid Drive - Ranged Striker Adjacent": 1, "Hybrid Drive - Guardian Adjacent": 1}, unlocks: [], handler: "dataSpec", stage: "Ultimate" },

	"Data Specialization - White Mage": {tags: ["S", "T"], cost: 3, maxRanks: false, desc: "Whenever the Digimon uses a ‘positive’ [Effect] Tagged Attack (an Effect which would bolster or heal a target such as Healing, Cleanse, or Vigor), it adds its Bit Value doubled to the Power of the Effect an additional time.", prereqs: {"Data Optimization - Effect Warrior": 1, "Hybrid Drive - Ranged Striker Adjacent": 1, "Hybrid Drive - Guardian Adjacent": 1}, unlocks: [], handler: "dataSpec", stage: "Ultimate" },

	"Element Master": {tags: ["T"], cost: 2, maxRanks: 0, desc: "Per each Rank in Element Master, the Digimon gains the ability to manipulate an aspect of nature such as earth, fire, or water. The Digimon may only manipulate natural sources of the element: magical, modified, or otherwise GM-decided outliers may not me manipulated. Within its [Burst] radius (consider it Ranged], the Digimon may also change Difficult Terrain into Basic Terrain of its chosen element as a Simple Action, or vise-versa.", prereqs: {"Naturewalk": 1}, unlocks: [], handler: "ability" },

	"Elemental Summoner": {tags: ["S"], cost: 3, maxRanks: false, desc: "Whenever the Digimon’s summoned objects are destroyed, they deal damage to any enemies or allies within a [Burst] radius equal to the Digimon’s Bit Value doubled. The Burst Radius is the same as if the Digimon was using a [Burst] Attack itself. The Digimon’s summoned objects are effected by Qualities such as Selective Targeting, Mobile Artillery, and otherwise.", prereqs: {"Conjurer": 1}, unlocks: [], handler: "ablity" },

	"Firewall": {tags: ["S"], cost: 2, maxRanks: false, desc: "The Digimon gains a bonus to routing out intruders and otherwise protecting the code it’s currently working on equal to its Technician Rank. In addition, the Digimon may purchase an additional 3 ranks of Technician. If the Digimon already has the Trojan quality, the cost of this Quality goes up to 3 DP over 2.", prereqs: {"Technician": 1}, unlocks: ["Technician (Firewall)"], handler: "technician" },

	"Jogress Partner": {tags: ["S"], cost: 3, maxRanks: false, desc: "NOTE: Digimon MUST have already DNA Digivolved with chosen partner prior to purchasing this ability. Choose another Digimon in your party. Whenever this Digimon DNA Digivolves with that Digimon, it gains a +2 DP Bonus per Stage above Rookie when creating the new Digimon. This bonus stacks if each partner has this Quality.", prereqs: {}, unlocks: [], handler: "ability" },

	"Hybrid Drive - Close Combat Adjacent": {tags: ["S"], cost: 3, maxRanks: 2, desc: "Digimon gains the ability to purchase Data Specialization from the Brawler and Speed Striker trees.", prereqs: {"Data Optimization - Close Combat": 1}, unlocks: ["Data Specialization - Power Throw", "Data Specialization - Wrestlemania", "Data Specialization - Hit and Run", "Data Specialization - Uncatchable Target"], handler: "hybrid", stage: "Ultimate" },

	"Hybrid Drive - Ranged Striker Adjacent": {tags: ["S"], cost: 3, maxRanks: 2, desc: "Digimon gains the ability to purchase Data Specialization from the Speed Striker and Effect Warrior trees.", prereqs: {"Data Optimization - Ranged Striker": 1}, unlocks: ["Data Specialization - Hit and Run", "Data Specialization - Uncatchable Target", "Data Specialization - Black Mage", "Data Specialization - White Mage"], handler: "hybrid", stage: "Ultimate" },

	"Hybrid Drive - Guardian Adjacent": {tags: ["S"], cost: 3, maxRanks: 2, desc: "Digimon gains the ability to purchase Data Specialization from the Brawler and Effect Warrior trees.", prereqs: {"Data Optimization - Guardian": 1}, unlocks: ["Data Specialization - Power Throw", "Data Specialization - Wrestlemania", "Data Specialization - Black Mage", "Data Specialization - White Mage"], handler: "hybrid", stage: "Ultimate" },

	"Hybrid Drive - Brawler Adjacent": {tags: ["S"], cost: 3, maxRanks: 2, desc: "Digimon gains the ability to purchase Data Specialization from the Close Combat and Guardian trees.", prereqs: {"Data Optimization - Brawler": 1}, unlocks: ["Data Specialization - Fistful of Force", "Data Specialization - Flurry", "Data Specialization - What Goes Around", "Data Specialization - True Guardian"], handler: "hybrid", stage: "Ultimate" },

	"Hybrid Drive - Speed Striker Adjacent": {tags: ["S"], cost: 3, maxRanks: 2, desc: "Digimon gains the ability to purchase Data Specialization from the Close Combat and Ranged Striker trees.", prereqs: {"Data Optimization - Speed Striker": 1}, unlocks: ["Data Specialization - Fistful of Force", "Data Specialization - Flurry", "Data Specialization - Sniper", "Data Specialization - Mobile Artillery"], handler: "hybrid", stage: "Ultimate" },

	"Hybrid Drive - Effect Warrior Adjacent": {tags: ["S"], cost: 3, maxRanks: 2, desc: "Digimon gains the ability to purchase Data Specialization from the Ranged Striker and Guardian trees.", prereqs: {"Data Optimization - Effect Warrior": 1}, unlocks: ["Data Specialization - Sniper", "Data Specialization - Mobile Artillery", "Data Specialization - What Goes Around", "Data Specialization - True Guardian"], handler: "hybrid", stage: "Ultimate" },

	"Mode Change X.0": {tags: ["S"], cost: 2, maxRanks: 2, desc: "If you take Rank 1 of Mode Change X.0, you may now change a selection of two Stats (not Health) with another two Stats (not Health) when making your choice for Mode Change. If you take Rank 2 of Mode Change X.0, you may now swap the Stats around as you see fit. You may retroactively change the Stats for Mode Change when you take Ranks in this Quality.", prereqs: {"Mode Change": 1}, unlocks: [], handler: "ability" },

	"Overkill": {tags: ["T"], cost: 2, maxRanks: false, desc: "Once per fight, the Digimon may choose one of the following: it may either activate Huge Power an additional time per fight, or it may re-roll 1’s and 2’s instead of just 1’s on an activation of Huge Power, again only once per Combat.", prereqs: {"Huge Power": 1}, unlocks: [], handler: "ability" },

	"Multi-Grappler": {tags: ["S"], cost: 3, maxRanks: false, desc: "The Digimon may initiate clashes with multiple targets at once. Each combatant still makes only a single check per Round. The Digimon also no longer takes a penalty from Clashing at a Range if it has Reach for a single enemy. It still takes the penalty as normal if it clashes with multiple enemies at a Range.", prereqs: {"Data Optimization - Brawler": 1}, unlocks: [], handler: "ability" },

	"Regenerator": {tags: ["T"], cost: 2, maxRanks: false, desc: "Once per fight, the Digimon may choose one of the following: it may either activate Quick Healer an additional time per fight, or it may re-roll 1’s and 2’s instead of just 1’s on an activation of Quick Healer, again only once per Combat.", prereqs: {"Quick Healer": 1}, unlocks: [], handler: "ability" },

	"Shade Cloak": {tags: ["S"], cost: 3, maxRanks: false, desc: "The Digimon may now apply their Hide in Plain Sight bonus to all allies within its [Burst] radius. In addition, the Digimon may now purchase an additional 3 Ranks of Hide in Plain Sight.", prereqs: {"Hide in Plain Sight": 3}, unlocks: [], handler: "ability" },

	"Signature Move": {tags: ["S"], cost: 3, maxRanks: false, desc: "The Digimon may now apply Certain Strike and Armor Piercing to the same Attack.", prereqs: {"Certain Strike": 3}, unlocks: [], handler: "ability" },

	"Sneak Attack": {tags: ["T"], cost: 3, maxRanks: false, desc: "If the Digimon is hidden from all foes thanks to a successful Stealth (Agility) check versus the opponent’s Perception (Mind), it gains a bonus to Accuracy and Damage on the next Attack it makes equal to its RAM value doubled. The Digimon must have some means of going unseen or unnoticed for this Quality to be activated (simply standing in plain sight with a weapon drawn and making a Stealth Check will not let you activate the Quality. The Digimon must be invisible, hidden, or otherwise in order to utilize this Quality). This Quality may only be activated once per combat session, or twice if the first round of combat is a Surprise Round.", prereqs: {"Hide in Plain Sight": 1}, unlocks: [], handler: "ability" },

	"Summoner": {tags: ["S"], cost: 3, maxRanks: false, desc: "The Digimon’s summoned objects are now capable of Attacking as well as playing a defensive role! Each summoned minion takes up a space of 1 cubic meter (so it may create a number of these objects equal to its Conjurer space limit). They sport a Damage Stat and an Accuracy Stat equal to the user’s Bit Value, as well as a Movement score equal to the user’s Brains. However their Wound Boxes are now only equal to the user’s Bit Value times four, and Armor equal to the Bit Value alone. The summoned objects are now capable of flight, but not Ranged Attacks. If the Digimon has the summoned objects Attack, it takes up one of its Simple Actions for the round.", prereqs: {"Conjurer": 1}, unlocks: [], handler: "ability" },

	"Teleport": {tags: ["T"], cost: 3, maxRanks: false, desc: "The Digimon is capable of instantly teleporting a number of meters equal to its Base Movement+2. It requires a line of sight to be able to utilize this Quality. It may use this Quality to teleport away as a reaction to an enemy’s Attack once per battle, causing the Attack to miss. Using Teleport to cause an Attack to miss will not Trigger Counterattack. When it uses Teleport to avoid an Attack, the Digimon forfeits a Simple Action on its next round of combat.", prereqs: {"Speedy": 0}, unlocks: ["Transporter"], handler: "addMovement", movementType: "Teleport Distance", statMods: { "Teleport Distance": 2 } },

	"Transporter": {tags: ["S"], cost: 2, maxRanks: false, desc: "The Digimon is now capable of warping away with allies in tow while using Teleport. The allies must be adjacent for Transporter to work properly. This also means it can use the Teleport Quality to bring allies out of harm’s way in reaction to an Attack. All allies who are transported in this manner also forfeit one Simple Action on their next Round. Finally, the Digimon’s Teleport distance increases by 2.", prereqs: {"Teleport": 1}, unlocks: [], handler: "addStat", statMods: { "Teleport Distance": 2 } },

	"Trojan": {tags: ["S"], cost: 2, maxRanks: false, desc: "The Digimon gains a bonus to getting to places it shouldn’t be and otherwise invading protected areas equal to its Technician Rank. In addition, the Digimon may purchase an additional 3 ranks of Technician. If the Digimon already has the Firewall quality, the cost of this Quality goes up to 3 DP over 2.", prereqs: {"Technician": 1}, unlocks: ["Technician (Trojan)"], handler: "technician" },

	"Technician (Firewall)": {tags: ["S"], cost: 1, maxRanks: 3, desc: "A Digimon with Technician is skilled at repairing code and technology, and by default can read and comprehend Digicode for its Tamer. It also gains a +4 bonus to repairing or deciphering code and machinery, or simply rebuilding things in the Digital World, per Rank in this Quality.", prereqs: {"Firewall": 1}, unlocks: [], handler: "ability" },

	"Technician (Trojan)": {tags: ["S"], cost: 1, maxRanks: 3, desc: "A Digimon with Technician is skilled at repairing code and technology, and by default can read and comprehend Digicode for its Tamer. It also gains a +4 bonus to repairing or deciphering code and machinery, or simply rebuilding things in the Digital World, per Rank in this Quality.", prereqs: {"Trojan": 1}, unlocks: [], handler: "ability" },

	"You Won’t Like Me When I’m Angry": {tags: ["S"], cost: 3, maxRanks: false, desc: "Double the number of dice used to track the Digimon’s Rage Meter (2 to 4). This means the Digimon’s Rage starts at 4 and can go as high as 24. Adjust all calculations for the Rage mechanics accordingly.", prereqs: {"Boiling Blood": 1}, unlocks: [], handler: "ability" },

	"Burst Power": {tags: ["T"], cost: 0, maxRanks: false, desc: "Burst Power is activated as a Simple Action. When activated, the Digimon gains +4 to all Stats for 4 Rounds. At the end of the 4th round, the Digimon loses 1 point in each Stat per Round. So, if the Digimon maintains Burst Power for 7 rounds, they would be at a -3 in all Stats. Burst Power is Deactivated as a Simple Action. Once Burst Power has been activated, the Digimon cannot activate it again until the start of the next Combat session.", prereqs: {}, unlocks: [], handler: "ability", stage: "Burst" }
}

module.exports.DigimonQualitiesDigizoid = {
	"Chrome Digizoid Armor": {tags: ["S, T"], cost: 1, maxRanks: false, desc: "The Digimon gains 2 Armor and 1 Health.", prereqs: {}, unlocks: [], handler: "digizoidArmor", stage: "Ultimate", statMods: {"Armor": 2, "Health": 1} },
	
	"Black Digizoid Armor": {tags: ["S, T"], cost: 2, maxRanks: false, desc: "The Digimon gains 2 Armor. At the start of eachround, roll 1D6. On a roll of 1 or 2, the user gains a bonus 4 Armor for that round. On a roll of 3 or 4, the user gains a bonus 4 Dodge for that round. On a roll of 5 or 6, the Digimon gains 2 Armor and 2 Dodge for that round.", prereqs: {}, unlocks: [], handler: "digizoidArmor", stage: "Mega", statMods: {Armor: 2} },
	
	"Blue Digizoid Armor": {tags: ["S, T"], cost: 3, maxRanks: false, desc: "The Digimon’s Armor score increases by 1, it gains an additional 2 Dodge, and their Base Movement is increased by 4. Additionally, the user is treated as if it had an additional instance of the Agility Quality (if it already has Agility it can use it an extra time per Combat.).", prereqs: {}, unlocks: [], handler: "digizoidArmor", stage: "Mega", statMods: {Armor: 1, Dodge: 2, BaseMovement: 4} },
	
	"Gold Digizoid Armor": {tags: ["S, T"], cost: 2, maxRanks: false, desc: "The Digimon’s Armor increases by 4. Additionally, whenever the user is hit by a [Ranged] Attack, the opponent who used the Attack takes an unalterable amount of Damage equal to the user’s CPU Value doubled.", prereqs: {}, unlocks: [], handler: "digizoidArmor", stage: "Mega", statMods: {Armor: 4} },
	
	"Obsidian Digizoid Armor": {tags: ["S, T"], cost: 2, maxRanks: false, desc: "The Digimon’s Armor increases by 4. Additionally, whenever the user is hit by a [Melee] Attack, the opponent who used the Attack takes an unalterable amount of Damage equal to the user’s CPU Value doubled.", prereqs: {}, unlocks: [], handler: "digizoidArmor", stage: "Mega", statMods: {Armor: 4} },
	
	"Red Digizoid Armor": {tags: ["S, T"], cost: 3, maxRanks: false, desc: "The Digimon gains +4 to their Armor and +2 to their Health. Additionally, the Digimon gains one free Rank of Resistant.", prereqs: {}, unlocks: [], handler: "digizoidArmor", stage: "Mega", statMods: {Armor: 4, Health: 2} },
	
	"Chrome Digizoid Weapon": {tags: ["S, T"], cost: 1, maxRanks: false, desc: "This Quality will only apply to [Weapon] tagged Attacks. The Digimon adds 2 to Accuracy and 1 to Damage when using a [Weapon] Attack.", prereqs: {"Weapon": 1}, unlocks: [], handler: "digizoidWeapon", stage: "Ultimate" },
	
	"Black Digizoid Weapon": {tags: ["S, T"], cost: 2, maxRanks: false, desc: "The Digimon gains 2 Accuracy. At the start of eachround, roll 1D6. On a roll of 1 or 2, the user gains a bonus 4 Damage for that round. On a roll of 3 or 4, the user gains a bonus 4 Accuracy for that round. On a roll of 5 or 6, the Digimon gains 2 Damage and 2 Accuracy for that round.", prereqs: {"Weapon": 1}, unlocks: [], handler: "digizoidWeapon", stage: "Mega", statMods: {Accuracy: 2} },
	
	"Blue Digizoid Weapon": {tags: ["S, T"], cost: 3, maxRanks: false, desc: "The Digimon’s [Weapon] Attacks gain 4 bonus Accuracy when used and 1 bonus Damage. Additionally they are all treated as if they had an extra rank of Certain Strike (even if the Attack already had Certain Strike)", prereqs: {"Weapon": 1}, unlocks: [], handler: "digizoidWeapon", stage: "Mega" },
	
	"Gold Digizoid Weapon": {tags: ["S, T"], cost: 2, maxRanks: false, desc: "The Digimon’s [Weapon] Attacks gain 4 extra Damage and 1 extra Accuracy. The Digimon is treated as if it had an additional instance of the Huge Power Quality (if it already has Huge Power it can use it an exta time per Combat.)", prereqs: {"Weapon": 1}, unlocks: [], handler: "digizoidWeapon", stage: "Mega" },
	
	"Obsidian Digizoid Weapon": {tags: ["S, T"], cost: 3, maxRanks: false, desc: "The Digimon’s [Weapon] Attacks gain 4 bonus Damage when used and 1 bonus Accuracy. Additionally they are all treated as if they had an extra rank of Armor Piercing (even if the Attack already had Armor Piercing)", prereqs: {"Weapon": 1}, unlocks: [], handler: "digizoidWeapon", stage: "Mega" },
	
	"Red Digizoid Weapon": {tags: ["S, T"], cost: 3, maxRanks: false, desc: "The Digimon’s Weapon Attacks gain +6 Damage and are treated as if it had the Mighty Blow Quality. If the Digimon already has the Mighty Blow Quality, it now applies the [Stun] Effect on a Damage Result of 1.5 times the target’s Body Stat instead of Double the target’s Body Stat.", prereqs: {"Weapon": 1}, unlocks: [], handler: "digizoidWeapon", stage: "Mega" }
}

/*var handlers = {
	"ability": "Special abilities you can make use of at specified moments",
	"attack": "Purchases a Tag for modifying attacks",
	"dataOpt": "Indicates a Quality is a Data Optimization and will modify stats",
	"addMovement": "Indicates a movement type to add",
	"addStat": Indicates a Quality will modify a Digimon's stats,
	"restriction": Indicates a stat modification with a restriction value,
	"dataSpec": Indicates a Quality is a Data Specialization
}*/

module.exports.AttackGroups = [
	[
		"[Blast]",
		"[Burst]",
		"[Close Blast]",
		"[Cone]",
		"[Line]",
		"[Pass]"
	],
	[
		"[Armor Piercing]",
		"[Certain Strike]"
	],
	[
		"[Immobilize]",
		"[Knockback]",
		"[Taunt]",
		"[Poison]",
		"[Confuse]",
		"[Stun]",
		"[Fear]",
		"[Lifesteal]",
		"[Vigor]",
		"[Fury]",
		"[Cleanse]",
		"[Haste]",
		"[Blind]",
		"[Paralysis]",
		"[Charm]",
		"[Weaken]",
		"[Strengthen]",
		"[Heal]",
		"[Regenerate]"
	]
];

module.exports.GetQuality = function (quality) {
	if (module.exports.DigimonQualities.hasOwnProperty(quality)) {
		return module.exports.DigimonQualities[quality];
	}
	else if (module.exports.DigimonQualitiesAdvanced.hasOwnProperty(quality)) {
		return module.exports.DigimonQualitiesAdvanced[quality];
	}
	else if (module.exports.DigimonQualitiesDigizoid.hasOwnProperty(quality)) {
		return module.exports.DigimonQualitiesDigizoid[quality];
	}
	else
	{
		return null;
	}
}

module.exports.digizoidDiscount = function (applyDiscount) {
	let modifier = applyDiscount ? -1 : 1;
	for (let quality in module.exports.DigimonQualitiesDigizoid) {
		module.exports.DigimonQualitiesDigizoid[quality].cost += modifier;
	}
}