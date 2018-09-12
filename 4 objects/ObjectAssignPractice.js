var person = {
    name: "Snarf",
    size: "Small",
    color: "redish"
}

var thundercat = {
    race: "thundercat",
    size: "medium",
    sound: "Thundercats Ho!"
}

var smurf = {
    race: "smurf",
    color: "blue"
}


// Make the person a thunder cat by assigning thundercat to person

// let pt = Object.assign(person, thundercat)
// pt;

// We've permanently modified person, but it's better to make a copy.  So copy person then thundercat into a new empty object
var personCat = Object.assign({},person,thundercat);
personCat;
// Make the a copy of a person that is a smurf
var purf = Object.assign({},person,smurf);
purf;
// Make a copy of a person that is a smurf then a thundercat
var pST = Object.assign({},person,smurf,thundercat);
pST;
// Make a copy of a person that is a thundercat then a smurf
var pTS = Object.assign({},person,thundercat,smurf);
pTS;    