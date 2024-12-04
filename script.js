// Initialize EmailJS with your public key
emailjs.init('MB5KcWqkuel1Kq1l6');  // Your public key

// Sample species data
const speciesData = [
  {
    name: "Penguin",
    habitat: "Antarctica",
    diet: "Fish, krill, squid",
    fact: "Penguins can dive up to 500 meters deep!",
    imgSrc: "https://github.com/AraceliGuz/InteractiveSpeciesWebpage/raw/main/penguinpic.jpeg"
  },
  {
    name: "Tiger",
    habitat: "Forests, grasslands",
    diet: "Deer, wild boar",
    fact: "Tigers are excellent swimmers.",
    imgSrc: "https://github.com/AraceliGuz/InteractiveSpeciesWebpage/raw/main/Tigerpic.jpg"
  },
  {
    name: "Koala",
    habitat: "Australian eucalyptus forests",
    diet: "Eucalyptus leaves",
    fact: "Koalas sleep for up to 20 hours a day.",
    imgSrc: "https://github.com/AraceliGuz/InteractiveSpeciesWebpage/raw/main/koalaoriginal.jpeg"
  }
];

// Add species data to the webpage
document.addEventListener("DOMContentLoaded", () => {
  const speciesContainer = document.getElementById("speciesContainer");
  const speciesVote = document.getElementById("speciesVote");
  const voteButton = document.getElementById("voteButton");
  const voteFeedback = document.getElementById("voteFeedback");

  speciesData.forEach((species, index) => {
    // Create species card
    const card = document.createElement("div");
    card.className = "species-card";
    card.innerHTML = `
      <img src="${species.imgSrc}" alt="${species.name}">
      <h3>${species.name}</h3>
    `;
    // Add card click event to show species information
    card.addEventListener("click", () => {
      alert(`
        Name: ${species.name}
        Habitat: ${species.habitat}
        Diet: ${species.diet}
        Fun Fact: ${species.fact}
      `);
    });
    speciesContainer.appendChild(card);

    // Add species to voting dropdown
    const option = document.createElement("option");
    option.value = index;
    option.textContent = species.name;
    speciesVote.appendChild(option);
  });

  // Handle vote submission
  voteButton.addEventListener("click", () => {
    const selectedSpeciesIndex = speciesVote.value;
    if (selectedSpeciesIndex) {
      // Display feedback
      voteFeedback.textContent = `Thank you for voting for ${speciesData[selectedSpeciesIndex].name}!`;

      // Prepare the vote data
      const voteData = {
        species: speciesData[selectedSpeciesIndex].name,
        votes: 1 // You can implement a vote counter if needed
      };

      // Send email with vote data using the provided service and template ID
      emailjs.send('service_b417vw5', 'template_cp8ex9p', voteData)
        .then(response => {
          console.log('Email sent successfully', response);
        })
        .catch(error => {
          console.error('Error sending email', error);
        });

      // Clear feedback after a short period
      setTimeout(() => {
        voteFeedback.textContent = "";
      }, 3000);

      console.log(`Vote submitted for: ${speciesData[selectedSpeciesIndex].name}`);
    } else {
      alert("Please select a species to vote!");
    }
  });
});
