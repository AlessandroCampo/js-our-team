class Player {
    constructor(name, team, role, age) {
        this.name = name
        this.team = team
        this.role = role
        this.age = age
    }
}

const playerNames = ["Federico Chiesa", "Lautaro Martìnez", "Mike Maignan"]
const playerTeams = ["Juventus", "Inter", "Milan"]
const playerRoles = ["Attaccante", "Attaccante", "Portiere"]
const playerAges = ["28", "31", "27"]
const allPlayers = []

for (let i = 0; i < playerNames.length; i++) {
    let newPlayer = new Player(playerNames[i], playerTeams[i], playerRoles[i], playerAges[i]
    )

    allPlayers.push(newPlayer)
}

console.log(allPlayers)