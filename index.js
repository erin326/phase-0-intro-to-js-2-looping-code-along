
// Code your solutions in this file
/*for (let age = 30; age < 40; age++){
    console.log(`I'm ${age} years old. Happy birthday to me!`);

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for(let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

    return gifts;
}

wrapGifts(gifts);

//const stringNames = ['Lisa', 'Kaitlin', 'Jan'];
//const eventName = 'surprise';
*/
function writeCards(stringNames, event){
    let messages = [];
    debugger;
 
    for(let i = 0; i < stringNames.length; i++) {
     messages.push(`Thank you, ${stringNames[i]}, for the wonderful ${event} gift!`)
     ; }

    

    return messages;

}

//writeCards(['Jane','Kaitlin', 'Tom'], 'birthday');
//writeCards(names, event);

function countDown(integar) {
    let i = integar;
    while(i >= 0) {
        console.log(i--);
    }
}
