

// const playerNames = ["Federico Chiesa", "Lautaro Martìnez", "Mike Maignan"]
// const playerTeams = ["Juventus", "Inter", "Milan"]
// const playerRoles = ["Attaccante", "Attaccante", "Portiere"]
// const playerAges = ["28", "31", "27"]
const allPlayers = [chiesa, maignan, lautaro, oshimen, rabiot, vlahovic, di_lorenzo, politano, theo, thuram, giroud, di_marco]
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
    const playerPac = document.createElement("span")
    const playerSho = document.createElement("span")
    const playerPas = document.createElement("span")
    const playerDri = document.createElement("span")
    const playerDef = document.createElement("span")
    const playerPhy = document.createElement("span")
    playerIMG.src = `./img/${allPlayers[i].name}.png`
    playerTeam.src = `./img/${allPlayers[i].team}.png`
    playerNationality.src = `./img/${allPlayers[i].nationality}.png`
    playerRole.innerText = allPlayers[i].role
    playerScore.innerText = allPlayers[i].score
    playerName.innerText = allPlayers[i].name
    playerPac.innerText = allPlayers[i].pac
    playerSho.innerText = allPlayers[i].sho
    playerPas.innerText = allPlayers[i].pas
    playerDri.innerText = allPlayers[i].dri
    playerDef.innerText = allPlayers[i].def
    playerPhy.innerText = allPlayers[i].phy

    playerIMG.classList.add("profile_pic")
    playerTeam.classList.add("team")
    playerNationality.classList.add("flag")
    playerRole.classList.add("role")
    playerName.classList.add("name")
    playerScore.classList.add("score")
    playerPac.classList.add("pac")
    playerSho.classList.add("sho")
    playerPas.classList.add("pas")
    playerDri.classList.add("dri")
    playerDef.classList.add("def")
    playerPhy.classList.add("phy")
    containerHTML.appendChild(newCard)
    newCard.append(playerIMG, playerTeam, playerNationality, playerRole, playerName, playerScore, playerSho, playerDef, playerDri, playerPac, playerSho, playerPas, playerPhy)
}


// for (let i = 0; i < playerNames.length; i++) {
//     let newPlayer = new Player(playerNames[i], playerTeams[i], playerRoles[i], playerAges[i]
//     )

//     allPlayers.push(newPlayer)
// }

// console.log(allPlayers)

