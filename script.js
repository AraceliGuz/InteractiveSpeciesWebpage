document.addEventListener("DOMContentLoaded", () => {
  // Initialize EmailJS with your Public Key
  emailjs.init("MB5KcWqkuel1Kq1l6"); // Replace with your actual Public Key

  const speciesData = [
    { name: "Penguin", votes: 0 },
    { name: "Tiger", votes: 0 },
    { name: "Koala", votes: 0 },
  ];

  const speciesContainer = document.getElementById("speciesContainer");
  const speciesVote = document.getElementById("speciesVote");
  const voteButton = document.getElementById("voteButton");
  const voteFeedback = document.getElementById("voteFeedback");

  // Create species cards
  speciesData.forEach((species, index) => {
    const card = document.createElement("div");
    card.className = "species-card";
    card.innerHTML = `
      <img src="images/${species.name.toLowerCase()}.jpg" alt="${species.name}">
      <h3>${species.name}</h3>
    `;
    speciesContainer.appendChild(card);

    const option = document.createElement("option");
    option.value = index;
    option.textContent = species.name;
    speciesVote.appendChild(option);
  });

  // Handle voting
  voteButton.addEventListener("click", () => {
    const selectedSpeciesIndex = speciesVote.value;
    if (selectedSpeciesIndex !== "") {
      const selectedSpecies = speciesData[selectedSpeciesIndex];
      selectedSpecies.votes++;

      // Prepare email data to send to the template
      const templateParams = {
        species: selectedSpecies.name,  // The species the user voted for
        votes: selectedSpecies.votes,   // The updated vote count
        reply_to: "0850855@my.scccd.edu" // Your email for replies
      };

      // Send email with vote data to the template
      emailjs
        .send("service_b417vw5", "YOUR_TEMPLATE_ID", templateParams)  // Use your Service ID and Template ID
        .then(() => {
          voteFeedback.textContent = `Thank you for voting for ${selectedSpecies.name}!`;
          setTimeout(() => {
            voteFeedback.textContent = "";
          }, 3000);
        })
        .catch((error) => {
          console.error("Failed to send email:", error);
          alert("Failed to send vote. Please try again.");
        });
    } else {
      alert("Please select a species to vote!");
    }
  });
});
