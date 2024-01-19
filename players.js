class Player {
    constructor({ name, team, role, age, nationality, score }) {
        this.name = name
        this.team = team
        this.role = role
        this.nationality = nationality
        this.age = age
        this.score = score
    }
}

const chiesa = new Player({
    name: "CHIESA",
    team: "Juventus",
    role: "LM",
    nationality: "Italy",
    score: 89

})

const lautaro = new Player({
    name: "LAUTARO",
    team: "INTER",
    role: "ATT",
    nationality: "Argentina",
    score: 89

})

const maignan = new Player({
    name: "MAIGNAN",
    team: "MILAN",
    role: "GK",
    nationality: "France",
    score: 87

})