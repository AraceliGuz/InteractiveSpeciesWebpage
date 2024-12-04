document.addEventListener("DOMContentLoaded", () => {
  const speciesData = [
    {
      name: "Penguin",
      habitat: "Antarctica",
      diet: "Carnivore",
      fact: "Penguins are excellent swimmers and can dive to depths of over 500 meters!",
      imgSrc: "https://github.com/AraceliGuz/InteractiveSpeciesWebpage/raw/main/penguinpic.jpeg",
    },
    {
      name: "Tiger",
      habitat: "Forests",
      diet: "Carnivore",
      fact: "Tigers are the largest members of the cat family and can weigh up to 660 pounds!",
      imgSrc: "https://github.com/AraceliGuz/InteractiveSpeciesWebpage/raw/main/Tigerpic.jpg",
    },
    {
      name: "Koala",
      habitat: "Eucalyptus forests",
      diet: "Herbivore",
      fact: "Koalas sleep up to 18-22 hours a day due to their low-energy diet of eucalyptus leaves.",
      imgSrc: "https://github.com/AraceliGuz/InteractiveSpeciesWebpage/raw/main/koalaoriginal.jpeg",
    },
  ];

  const speciesContainer = document.getElementById("speciesContainer");
  const infoName = document.getElementById("infoName");
  const infoHabitat = document.getElementById("infoHabitat");
  const infoDiet = document.getElementById("infoDiet");
  const infoFact = document.getElementById("infoFact");
  const speciesInfo = document.getElementById("speciesInfo");

  // Dynamically generate species cards
  speciesData.forEach((species) => {
    const card = document.createElement("div");
    card.className = "species-card";
    card.innerHTML = `
      <img src="${species.imgSrc}" alt="${species.name}">
      <h3>${species.name}</h3>
    `;

    card.addEventListener("click", () => {
      // Populate species information
      infoName.textContent = `Name: ${species.name}`;
      infoHabitat.textContent = `Habitat: ${species.habitat}`;
      infoDiet.textContent = `Diet: ${species.diet}`;
      infoFact.textContent = `Interesting Fact: ${species.fact}`;
      speciesInfo.style.display = "block"; // Show the info section
    });

    speciesContainer.appendChild(card);
  });
});
