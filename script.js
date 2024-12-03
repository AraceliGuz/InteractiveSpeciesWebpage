document.addEventListener("DOMContentLoaded", () => {
  const speciesData = [
    {
      name: "Penguin",
      habitat: "Antarctica",
      diet: "Fish, krill, squid",
      fact: "Penguins can dive up to 500 meters deep!",
      imgSrc: "penguin.jpg",
    },
    {
      name: "Tiger",
      habitat: "Forests, grasslands",
      diet: "Deer, wild boar",
      fact: "Tigers are excellent swimmers.",
      imgSrc: "tiger.jpg",
    },
    {
      name: "Koala",
      habitat: "Australian eucalyptus forests",
      diet: "Eucalyptus leaves",
      fact: "Koalas sleep for up to 20 hours a day.",
      imgSrc: "koala.jpg",
    },
  ];

  const speciesContainer = document.getElementById("speciesContainer");
  const speciesVote = document.getElementById("speciesVote");
  const voteButton = document.getElementById("voteButton");
  const voteFeedback = document.getElementById("voteFeedback");

  
  speciesData.forEach((species, index) => {
 
    const card = document.createElement("div");
    card.className = "species-card";
    card.innerHTML = `
      <img src="${species.imgSrc}" alt="${species.name}" style="width:100%">
      <h3>${species.name}</h3>
    `;
    card.addEventListener("click", () => {
      alert(`
        Name: ${species.name}
        Habitat: ${species.habitat}
        Diet: ${species.diet}
        Fun Fact: ${species.fact}
      `);
    });

   
    speciesContainer.appendChild(card);

    
    const option = document.createElement("option");
    option.value = index;
    option.textContent = species.name;
    speciesVote.appendChild(option);
  });

  
  voteButton.addEventListener("click", () => {
    const selectedSpeciesIndex = speciesVote.value;
    if (selectedSpeciesIndex) {
      voteFeedback.textContent = `Thank you for voting for ${speciesData[selectedSpeciesIndex].name}!`;
      setTimeout(() => {
        voteFeedback.textContent = "";
      }, 3000);

      
      console.log(`Vote submitted for: ${speciesData[selectedSpeciesIndex].name}`);
    } else {
      alert("Please select a species to vote!");
    }
  });
});
