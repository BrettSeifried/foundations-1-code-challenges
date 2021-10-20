// Use the map method to solve these problems!

/*
Input:

[
    { name: 'spot', type: 'dog' },
    { name: 'rover', type: 'dog' },
    { name: 'jumpy', type: 'frog' },
    { name: 'einstein', type: 'cat' },
]

*/

/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNamesWithMap(arr) {
    let name = arr.map(pets => pets.name);
    return name;
    
    //Julies Way
    
    // return arr.map((dog=>{
    //     return dog.name
    // }))
}

/*
Output:

[
    { name: 'spot', isHungry: true, type: 'dog' },
    { name: 'rover', isHungry: true, type: 'dog' },
    { name: 'jumpy', isHungry: true, type: 'frog' },
    { name: 'einstein', isHungry: true, type: 'cat' },
]*/

export function makeArrayWithIsHungry(arr) {
    const hungry = [];
    arr.map(e => {
        hungry.push({ name: `${e.name}`, isHungry: true, type: `${e.type}` });
    });
    return hungry;

    // Julies way
    // return arr.map((dog)=>{
    //     return { name: dog.name, type: dog.type, isHungry: true};
    // });

    //spread operator
    // return arr.map((dog) =>{
    //     return { ...dog, isHungry: true}
    // })
}

/*
Output:

[
    { name: 'SPOT', type: 'dog' },
    { name: 'ROVER', type: 'dog' },
    { name: 'JUMPY', type: 'frog' },
    { name: 'EINSTEIN', type: 'cat' },
]*/

export function makeShoutingArray(arr) {
    // const shout = [];
    // arr.map(e => {
    //     shout.push({ name: `${e.name.toUpperCase()}`, type: `${e.type}` });
    // });
    // return shout;

    // Indy way
    const shout = arr.map(pet => ({ name: pet.name.toUpperCase(), type: pet.type }));
    return shout;

    //Julie way
    // return arr.map((dog) => {
    //     return { name: dog.name.toUpperCase(), type: dog.type };
    // });
}


/*

Output:
['spotdog', 'roverdog', 'jumpyfrog', einsteincat']
*/

export function makeStringArray(arr) {
    let string = [];
    arr.map (e => {
        string.push(`${e.name}${e.type}`);
    });
    return string;

    //Julie way - all 3 below work
    // return arr.map((dog) => {
    //     // return dog.name + dog.type;
    //     // return Object.values(dog).join('');
    //     // return `${dog.name}${dog.type}`;
    // })
}

/*
Output:

[
    [
        ['name', 'spot'], 
        ['type', 'dog']
    ], 
    [
        ['name', 'rover'], 
        ['type', 'dog']
    ], 
    [
        ['name', 'jumpy'], 
        ['type', 'frog']
    ],
    [ 
        ['name', 'einstein'], 
        ['type', 'cat']
    ]
*/

export function makeArrayOfArraysOfArrays(arr) {
    return arr.map(item => ([['name', item.name], ['type', item.type]]));

    // Julie way
    // return arr.map((dog)=> {
    //     return [['name', dog.name],['type', dog.type]];
    // });
}