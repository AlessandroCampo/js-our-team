
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Player {
    constructor({ name, team, role, age, nationality, score, pac, sho, pas, dri, def, phy }) {
        this.name = name
        this.team = team
        this.role = role
        this.nationality = nationality
        this.age = age
        this.score = score
        this.pac = pac
        this.sho = sho
        this.pas = pas
        this.dri = dri
        this.def = def
        this.phy = phy
    }
}

const chiesa = new Player({
    name: "CHIESA",
    team: "Juventus",
    role: "LM",
    nationality: "Italy",
    score: 89,
    pac: getRandomInt(75, 100) + " PAC",
    sho: getRandomInt(75, 100) + " SHO",
    pas: getRandomInt(75, 100) + " PAS",
    dri: getRandomInt(75, 100) + " DRI",
    def: getRandomInt(75, 100) + " DEF",
    phy: getRandomInt(75, 100) + " PHY"
})

const lautaro = new Player({
    name: "LAUTARO",
    team: "INTER",
    role: "ATT",
    nationality: "Argentina",
    score: 89,
    pac: getRandomInt(75, 100) + " PAC",
    sho: getRandomInt(75, 100) + " SHO",
    pas: getRandomInt(75, 100) + " PAS",
    dri: getRandomInt(75, 100) + " DRI",
    def: getRandomInt(75, 100) + " DEF",
    phy: getRandomInt(75, 100) + " PHY"

})

const maignan = new Player({
    name: "MAIGNAN",
    team: "MILAN",
    role: "GK",
    nationality: "France",
    score: 87,
    pac: getRandomInt(75, 100) + " PAC",
    sho: getRandomInt(75, 100) + " SHO",
    pas: getRandomInt(75, 100) + " PAS",
    dri: getRandomInt(75, 100) + " DRI",
    def: getRandomInt(75, 100) + " DEF",
    phy: getRandomInt(75, 100) + " PHY"

})

const giroud = new Player({
    name: "GIROUD",
    team: "MILAN",
    role: "ATT",
    nationality: "France",
    score: 84,
    pac: getRandomInt(75, 100) + " PAC",
    sho: getRandomInt(75, 100) + " SHO",
    pas: getRandomInt(75, 100) + " PAS",
    dri: getRandomInt(75, 100) + " DRI",
    def: getRandomInt(75, 100) + " DEF",
    phy: getRandomInt(75, 100) + " PHY"

})

const theo = new Player({
    name: "THEO",
    team: "MILAN",
    role: "TDS",
    nationality: "France",
    score: 90,
    pac: getRandomInt(75, 100) + " PAC",
    sho: getRandomInt(75, 100) + " SHO",
    pas: getRandomInt(75, 100) + " PAS",
    dri: getRandomInt(75, 100) + " DRI",
    def: getRandomInt(75, 100) + " DEF",
    phy: getRandomInt(75, 100) + " PHY"
})

const di_lorenzo = new Player({
    name: "DI LORENZO",
    team: "NAPOLI",
    role: "DEF",
    nationality: "Italy",
    score: 85,
    pac: getRandomInt(75, 100) + " PAC",
    sho: getRandomInt(75, 100) + " SHO",
    pas: getRandomInt(75, 100) + " PAS",
    dri: getRandomInt(75, 100) + " DRI",
    def: getRandomInt(75, 100) + " DEF",
    phy: getRandomInt(75, 100) + " PHY"
})

const oshimen = new Player({
    name: "OSHIMEN",
    team: "NAPOLI",
    role: "ATT",
    nationality: "Nigeria",
    score: 92,
    pac: getRandomInt(75, 100) + " PAC",
    sho: getRandomInt(75, 100) + " SHO",
    pas: getRandomInt(75, 100) + " PAS",
    dri: getRandomInt(75, 100) + " DRI",
    def: getRandomInt(75, 100) + " DEF",
    phy: getRandomInt(75, 100) + " PHY"
})

const politano = new Player({
    name: "POLITANO",
    team: "NAPOLI",
    role: "LM",
    nationality: "Italy",
    score: 80,
    pac: getRandomInt(75, 100) + " PAC",
    sho: getRandomInt(75, 100) + " SHO",
    pas: getRandomInt(75, 100) + " PAS",
    dri: getRandomInt(75, 100) + " DRI",
    def: getRandomInt(75, 100) + " DEF",
    phy: getRandomInt(75, 100) + " PHY"
})

const rabiot = new Player({
    name: "RABIOT",
    team: "JUVENTUS",
    role: "CC",
    nationality: "France",
    score: 84,
    pac: getRandomInt(75, 100) + " PAC",
    sho: getRandomInt(75, 100) + " SHO",
    pas: getRandomInt(75, 100) + " PAS",
    dri: getRandomInt(75, 100) + " DRI",
    def: getRandomInt(75, 100) + " DEF",
    phy: getRandomInt(75, 100) + " PHY"
})

const vlahovic = new Player({
    name: "VLAHOVIC",
    team: "JUVENTUS",
    role: "ATT",
    nationality: "Serbia",
    score: 86,
    pac: getRandomInt(75, 100) + " PAC",
    sho: getRandomInt(75, 100) + " SHO",
    pas: getRandomInt(75, 100) + " PAS",
    dri: getRandomInt(75, 100) + " DRI",
    def: getRandomInt(75, 100) + " DEF",
    phy: getRandomInt(75, 100) + " PHY"
})

const thuram = new Player({
    name: "THURAM",
    team: "INTER",
    role: "ATT",
    nationality: "France",
    score: 83,
    pac: getRandomInt(75, 100) + " PAC",
    sho: getRandomInt(75, 100) + " SHO",
    pas: getRandomInt(75, 100) + " PAS",
    dri: getRandomInt(75, 100) + " DRI",
    def: getRandomInt(75, 100) + " DEF",
    phy: getRandomInt(75, 100) + " PHY"
})

const di_marco = new Player({
    name: "DI MARCO",
    team: "INTER",
    role: "DEF",
    nationality: "Italy",
    score: 83,
    pac: getRandomInt(75, 100) + " PAC",
    sho: getRandomInt(75, 100) + " SHO",
    pas: getRandomInt(75, 100) + " PAS",
    dri: getRandomInt(75, 100) + " DRI",
    def: getRandomInt(75, 100) + " DEF",
    phy: getRandomInt(75, 100) + " PHY"
})