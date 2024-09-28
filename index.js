
const cards = [
  /* Generic Cards */
  {
    name: "Block",
    effect: "Reduce damage from the next attack towards you by 5.",
    cost: 1,
    color: "white",
    image: "",
    quanty: 4,
    chargeCost: 1,
  },
  {
    name: "Potion",
    effect: "Heal hp by 6",
    cost: 1,
    color: "white",
    image: "",
    quanty: 4,
    chargeCost: 1,
  },
  {
    name: "Assist",
    effect: "End your turn when you play this card, choose an ally and give their next attack +3",
    cost: 2,
    color: "White",
    image: "",
    quanty: 4,
    chargeCost: 1,
  },
  {
    name: "Attack",
    effect: "Deal 5 damage to target",
    cost: 1,
    color: "white",
    image: "",
    quanty: 4,
    chargeCost: 1,
  },
  {
    name: "Last Straw",
    effect: "For the next 2 turns, increase attack damage by 8 and reduce incoming damage by 10",
    cost: 4,
    color: "white",
    image: "",
    quanty: 2,
    chargeCost: 1,
  },
  {
    name: "Pack Search",
    effect: "Search your deck for one card and add it to your hand",
    cost: 0,
    color: "white",
    image: "",
    quanty: 2,
    chargeCost: 1,
  },
  {
    name: "Recycle",
    effect: "Choose one card in your discard pile and put it to the top of the deck, then shuffle you deck.",
    cost: 0,
    color: "white",
    image: "",
    quanty: 2,
    chargeCost: 1,
  },
  /* Atear Cards */
  {
    name: "Ultimate Move -Limitless Gravity",
    effect: "Deal 12 damage to target",
    cost: 6,
    color: "blue",
    image: "",
    quanty: 2,
    chargeCost: 6,
  },
  {
    name: "Ice Shard Shower",
    effect: "Deal 4 damage to target",
    cost: 2,
    color: "blue",
    image: "",
    quanty: 4,
    chargeCost: 1,
  },
  {
    name: "Healing Chant - Yggdrasil's Tears",
    effect: "Choose a player, and heal 6 damage",
    cost: 3,
    color: "blue",
    image: "",
    quanty: 2,
    chargeCost: 2,
  },
  {
    name: "Enhancement Enchantment",
    effect: "Choose a player, that player deals +2 more damage and takes -3 less damage for the next turn.",
    cost: 1,
    color: "blue",
    image: "",
    quanty: 4,
    chargeCost: 1,
  },
  {
    name: "Lightning Strike",
    effect: "Deal 4 lightning damage to target",
    cost: 2,
    color: "blue",
    image: "",
    quanty: 2,
    chargeCost: 2,
  },
  {
    name: "Fireblast",
    effect: "Deal 3 fire damage to target",
    cost: 1,
    color: "blue",
    image: "",
    quanty: 4,
  },

  /* Kazuma */
  {
    name: "Ultimate Move - Demonic Impale",
    effect: "Deal 14 damage to target. At the end of the turn take 4 damage.",
    cost: 6,
    color: "red",
    image: "",
    quanty: 1,
    chargeCost: 6,
  },
  {
    name: "Instant Slash",
    effect: "Deal 2 damage to target",
    cost: 0,
    color: "red",
    image: "",
    quanty: 3,
    chargeCost: 1,
  },
  {
    name: "Flame Sword - Infernal Slash",
    effect: "Deal 4 fire damage to target",
    cost: 2,
    color: "red",
    image: "",
    quanty: 4,
  },
  {
    name: "Thunder Sword - Discharge Strike",
    effect: "Deal 4 thunder damage to target.",
    cost: 2,
    color: "red",
    image: "",
    quanty: 4,
  },
  {
    name: "Multi-Hit Combo - Requiem",
    effect: "Deal 7 damage to target, target is stunnded for one turn.",
    cost: 4,
    color: "red",
    image: "",
    quanty: 2,
  },
]


function createLeaderCards() {
  const cardsContainer = document.getElementById("cards_container");
  console.log(cardsContainer)

  cards.forEach((card, idx) => {
    const cardContainer = document.createElement("div")
    cardContainer.className = `w-60 h-[336px] rounded-md flex items-center justify-center p-2 relative bg-${card.color}-500 outine-black outline`;

    const cardInnerBorder = document.createElement("div")
    cardInnerBorder.className = "w-full h-full rounded-lg overflow-hidden relative"

    const cardImage = document.createElement("img")
    cardImage.className = "object-cover w-full h-full"
    cardImage.src = card.image ? card.image : "mock-up-chyan-temp.svg"

    const leaderStatDetail = document.createElement("div");
    leaderStatDetail.className = `w-6 h-15 print:bg-${card.color}-500 bg-${card.color}-500 absolute left-0 top-20 z-10 rounded-r flex flex-col items-center justify-between py-3`
    leaderStatDetail.innerHTML = `
          <div class="flex flex-col items-center justify-center z-50">
            <p class="text-[14px] text-center leading-none ${card.color == "white" ? "text-black" : "text-white"} font-medium">HP <br /> <span
                class="text-[18px] ${card.color == "white" ? "text-black" : "text-white"} font-medium">${idx}</span>
            </p>
          </div>
    `

    const cardName = document.createElement("div")
    cardName.className = `w-full h-6 rounded-b-lg absolute top-2 left-0 ${card.color === "white" ? "bg-white" : `bg-${card.color}-500`} flex items-center justify-center px-4`
    cardName.innerHTML = `<p class="text-xs font-bold ${card.color === "white" ? "text-black" : "text-white"} text-center">${card.name}</p>`

    const cardEffect = document.createElement("div")
    cardEffect.className = "w-full h-24 absolute bottom-2 px-2 left-1/2 transform -translate-x-1/2"
    cardEffect.innerHTML = `
          <div class="border border-stone-200 bg-stone-900 text-white w-full h-full rounded font-medium text-center flex items-center justify-center p-1">${card.effect}</div>`
    cardInnerBorder.append(cardImage);
    cardInnerBorder.append(leaderStatDetail);

    cardContainer.append(cardInnerBorder);
    cardContainer.append(cardName)
    cardContainer.append(cardEffect)

    cardsContainer.append(cardContainer)
  })

}


/*
  {
    name: "",
    effect: "",
    cost: 0,
    color: "",
    image: "",
    quanty: 0,
  },
*/


function main() {
  createLeaderCards()
}

main();