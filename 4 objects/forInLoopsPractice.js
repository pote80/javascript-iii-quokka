var drink = {
    color: 'orange',
    taste: 'orange',
    carbonated: true,
    brand: 'sunkisser'
}

//Loop over drink -> console log the key -> console log the key.value
for(var key in drink){
    console.log(key)
    console.log(drink[key])
}
//if the value is 'orange' change it to 'cherry'
for(var key in drink){
    if(drink[key]==="orange"){
        drink[key]="cherry"
    }
    console.log(drink[key])
}


//Write a function, called 'checkValid', that takes in an object like drink 
//loop over the object and check if values are falsy
//return false if any values are falsy
//return true if all values are truthy