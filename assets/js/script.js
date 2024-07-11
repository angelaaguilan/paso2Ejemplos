
async function getRandomUser(){

    const res = await fetch('https://api.gael.cloud/general/public/clima');
    // const res = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    // const res = await fetch("https://randomuser.me/api");
    const data = await res.json();
    console.log(data);
}

getRandomUser();





