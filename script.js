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
  const infoName = document.getElementById("infoName");
  const infoHabitat = document.getElementById("infoHabitat");
  const infoDiet = document.getElementById("infoDiet");
  const infoFact = document.getElementById("infoFact");
  const speciesInfo = document.getElementById("speciesInfo");

  // Voting section
  const votingSection = document.createElement("div");
  votingSection.id = "votingSection";
  votingSection.innerHTML = `
    <h3>Vote for Your Favorite Species</h3>
    <select id="voteSelect">
      <option value="">-- Select a species --</option>
    </select>
    <button id="voteButton">Vote</button>
    <p id="voteFeedback" class="feedback"></p>
    <div id="voteResults"></div>
  `;
  document.body.appendChild(votingSection);

  const voteSelect = document.getElementById("voteSelect");
  const voteButton = document.getElementById("voteButton");
  const voteFeedback = document.getElementById("voteFeedback");
  const voteResults = document.getElementById("voteResults");

  // Dynamically generate species cards and voting options
  speciesData.forEach((species, index) => {
    // Generate species cards
    const card = document
