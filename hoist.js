console.log(hello);                                   
var hello = 'world';                                 

// undefined 
// var hello   -- hoisted undefined
// console.log(hello)  -- prints undefined
// var hello = 'world' -- hello is assigned 'world'

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

//magnet 
// var needle   -- assigned 'haystack'
// var needle   -- magent is local to function
//console.log(needle)  -- function prints magnet 

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

//super cool
// var brendan   -- assigned 'super cool'
// function is never called 
// prints global variable 'super cool'

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}


//chicken
//halfchicken
// var food  -- globally assigns 'chicken'
// prints chicken
// locally assigns food 'half-chicken'
//prints 'half-chicken'

mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

//TypeError: mean is not a function

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

//undefined
//rock
//r&b
//disco
// var genre  -- hoisted undefined
// genre -- globally assigned 'disco'
// function is called and genre is locally assigned 'rock'
// prints ''rock
//locally assigns genre as r&b
// prints r&b
// globally prints disco

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

//san jose
//seattle
//burbank
//san jose
// var dojo -- globally assigned 'san jose'
// function is called and dojo is locally assigned 'seattle'
// prints 'seattle'
//locally assigns dojo as burbank
// prints burbank
// globally prints san jose
