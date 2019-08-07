function Mash(){
    return "Ay boss you live in a " + getHome() + " with a whopping " + getChildCount() + " children"
}
console.log(Mash());
function getHome(){
    const houses = ["Mansion", "Apartment", "Shack", "House", "Pile of doodoo"]
    return houses[Math.floor((Math.random()*(4)))]
}

function getChildCount(){
    if (Math.random>.5){
    return Math.floor((Math.random()*100))}
    else {
        //2nd user argument :3
    }
}
let color; color = "gae"