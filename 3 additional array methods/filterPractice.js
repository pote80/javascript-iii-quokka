var athletes = [
    {
        name: "RunGuy",
        speed: 10,
        strength: 7,
        wits: 4
    }, {
        name: "YoungGuy",
        speed: 7,
        strength: 4,
        wits: 6
    }, {
        name: "DumGuy",
        speed: 8,
        strength: 10,
        wits: 1
    }, {
        name: "FunGuy",
        speed: 5,
        strength: 5,
        wits: 8
    },{
        name: "StunGun",
        speed: 8,
        strength: 8,
        wits: 8
    }
]

//Filter OUT all athletes with wits 5 or higher
var notWitty = athletes.filter((athlete)=> athlete.wits<=5)
notWitty;
//Filter IN all athletes with a strength higher than 6
var strongeBoys = athletes.filter((athletes)=>athletes.strength>6)
strongeBoys;
//Filter OUT all althletes that don't have Guy in their name
var notAGuy = athletes.filter((athlete)=>athletes.includes(athlete.name === "Guy"))
notAGuy