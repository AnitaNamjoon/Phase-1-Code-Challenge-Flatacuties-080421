//Your code here
document.addEventListener("DOM ContentLoaded",function(){
  fetchInput();
});

//The characters are updated to enable the user to view
let characterBar = document.getElementById("character-bar");
let characterName = document.getElementById("name");
let characterImage = document.getElementById("image");
let characterVoteCount = document.getElementById("vote-count");
let characterVoteForm = document.getElementById("votes-form");

let  base_URL = "http://localhost:3000/characters";
  
 //Finding  the characters
function fetchInput() {
  fetch(base_URL)
    .then((response) => response.json())
    .then(function (Input) {
      renderCharacters(Input);
    });
}
//Display characters information in a detailed way
  function renderCharacters(Input) {
    data.forEach((Input) => {
      const nameSpan = document.createElement("span");
      nameSpan.innerText = data.name;

    characterBar.appendChild(nameSpan);
    nameSpan.addEventListener("click", () => {
      characterName.textContent = Input.name;
      characterImage.setAttribute("src", Input.image);
      characterVoteCount.textContent = Input.votes;
    });
  });
}

//The number of votes done and also updated
votesForm.addEventListener('submit',event => {
  event.preventDefault();
  var newVotes = document.getElementById("votes");
  let charactervotingCount = document.getElementById("vote-count");
  const currentvotes = parseInt(charactervotingCount.textcontent)
var votecount = (newVotes += currentvotes);
charactervotingCount.innerText = votecount;

var upgradevotes ={
  votes:votecount,
};
});


var resetButton = document.querySelector('#reset-btn')
resetButton.addEventListener('click', (event) => {

  fetch(base_URL)
  .then(response => response.json())
  .then(characters => {
      

      var characterID = characters.find(character => character.name === characterName.textContent)
      fetch(`${base_URL}/${characterID.id}`, {
          method: 'PATCH',
          headers: {
              'Content-Type' : 'application/json'
          },
          body: JSON.stringify({
              votes : "0"
          })
      })
      .then(response => response.json())
      .then(data => charactersvote.textContent = data.votes)
      .then((json) => console.log(json));
  })
})
