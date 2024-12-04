document.addEventListener("DOMContentLoaded", () => {
  const speciesData = [
    {
      name: "Penguin",
      habitat: "Antarctica",
      diet: "Carnivore",
      fact: "Penguins are excellent swimmers and can dive to depths of over 500 meters!",
      imgSrc: "https://github.com/AraceliGuz/InteractiveSpeciesWebpage/raw/main/penguinpic.jpeg",
      votes: 0,
    },
    {
      name: "Tiger",
      habitat: "Forests",
      diet: "Carnivore",
      fact: "Tigers are the largest members of the cat family and can weigh up to 660 pounds!",
      imgSrc: "https://github.com/AraceliGuz/InteractiveSpeciesWebpage/raw/main/Tigerpic.jpg",
      votes: 0,
    },
    {
      name: "Koala",
      habitat: "Eucalyptus forests",
      diet: "Herbivore",
      fact: "Koalas sleep up to 18-22 hours a day due to their low-energy diet of eucalyptus leaves.",
      imgSrc: "https://github.com/AraceliGuz/InteractiveSpeciesWebpage/raw/main/koalaoriginal.jpeg",
      votes: 0,
    },
  ];

  const speciesContainer = document.getElementById("speciesContainer");
  const votingSection = document.getElementById("votingSection");

  // Dynamically generate species cards
  speciesData.forEach((species, index) => {
    const card = document.createElement("div");
    card.className = "species-card";
    card.innerHTML = `
      <img src="${species.imgSrc}" alt="${species.name}">
      <h3>${species.name}</h3>
    `;

    card.addEventListener("click", () => {
      const speciesInfo = document.getElementById("speciesInfo");
      document.getElementById("infoName").textContent = `Name: ${species.name}`;
      document.getElementById("infoHabitat").textContent = `Habitat: ${species.habitat}`;
      document.getElementById("infoDiet").textContent = `Diet: ${species.diet}`;
      document.getElementById("infoFact").textContent = `Interesting Fact: ${species.fact}`;
      speciesInfo.style.display = "block";
    });

    speciesContainer.appendChild(card);
  });

  // Generate voting section
  const voteForm = `
    <h3>Vote for Your Favorite Species</h3>
    <select id="voteSelect">
      <option value="">-- Select a species --</option>
      ${speciesData.map((species, index) => `<option value="${index}">${species.name}</option>`).join("")}
    </select>
    <button id="voteButton">Vote</button>
    <p id="voteFeedback" class="feedback"></p>
    <div id="voteResults"></div>
  `;
  votingSection.innerHTML = voteForm;

  const voteButton = document.getElementById("voteButton");
  const voteSelect = document.getElementById("voteSelect");
  const voteFeedback = document.getElementById("voteFeedback");
  const voteResults = document.getElementById("voteResults");

  // Handle voting
  voteButton.addEventListener("click", () => {
    const selectedIndex = voteSelect.value;

    if (selectedIndex !== "") {
      speciesData[selectedIndex].votes++;

      voteFeedback.textContent = `Thank you for voting for ${speciesData[selectedIndex].name}!`;
      setTimeout(() => {
        voteFeedback.textContent = "";
      }, 3000);

      updateVoteResults();
    } else {
      alert("Please select a species to vote!");
    }
  });

  // Function to update vote results
  const updateVoteResults = () => {
    voteResults.innerHTML = "<h4>Current Votes:</h4>";
    speciesData.forEach((species) => {
      const result = document.createElement("p");
      result.textContent = `${species.name}: ${species.votes} votes`;
      voteResults.appendChild(result);
    });
  };
});
