

// const playerNames = ["Federico Chiesa", "Lautaro Martìnez", "Mike Maignan"]
// const playerTeams = ["Juventus", "Inter", "Milan"]
// const playerRoles = ["Attaccante", "Attaccante", "Portiere"]
// const playerAges = ["28", "31", "27"]
const allPlayers = [chiesa, maignan, lautaro]
const containerHTML = document.getElementById("container")

for (let i = 0; i < allPlayers.length; i++) {
    console.log(allPlayers[i])
    const newCard = document.createElement("div")
    const playerIMG = document.createElement("img")
    const playerTeam = document.createElement("img")
    const playerNationality = document.createElement("img")
    const playerRole = document.createElement("span")
    const playerScore = document.createElement("span")
    const playerName = document.createElement("span")
    newCard.classList.add("card")
    playerIMG.src = `./img/${allPlayers[i].name}.png`
    playerTeam.src = `./img/${allPlayers[i].team}.png`
    playerNationality.src = `./img/${allPlayers[i].nationality}.png`
    playerRole.innerText = allPlayers[i].role
    playerScore.innerText = allPlayers[i].score
    playerName.innerText = allPlayers[i].name
    playerIMG.classList.add("profile_pic")
    playerTeam.classList.add("team")
    playerNationality.classList.add("flag")
    playerRole.classList.add("role")
    playerName.classList.add("name")
    playerScore.classList.add("score")
    containerHTML.appendChild(newCard)
    newCard.append(playerIMG, playerTeam, playerNationality, playerRole, playerName, playerScore)
}


// for (let i = 0; i < playerNames.length; i++) {
//     let newPlayer = new Player(playerNames[i], playerTeams[i], playerRoles[i], playerAges[i]
//     )

//     allPlayers.push(newPlayer)
// }

// console.log(allPlayers)

