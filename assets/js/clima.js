// 1. Crear la referencia de la sección de climas del DOM
const climasSection = document.querySelector(".climas");
const apiURL = "https://api.gael.cloud/general/public/clima";

console.log(`Sección en DOM: ${climasSection}`);
console.log(`APIURL: ${apiURL}`);

// 2. Crear una función para obtener los datos de  climas desde la API GAEL
async function getClimas() {
    const res = await fetch(apiURL); // Fetch hace un request al endpoint
    // En RES se guarda la respuesta con el código de estado HTTP, las cabeceras, si existió un problema de comunicación y el cuerpo de la respuesta
    console.log(`RES - respuesta de API: ${res}`);
    const climas = await res.json(); // res.json Transforma los resultados para poder leerllos como un obj de JS
    console.log(`TRANSF A JSON: ${climas}`);
    return climas;
}

// 3. Crear una función que renderice los climas en el DOM
async function renderClimas() {
    const climas = await getClimas();
    let template = "";
    climas.forEach((clima) => {
        template += `
            <div class="clima">
            <h3>${clima.Estacion}</h3>
            <p>${clima.Temp}°C</p>
            </div>
            `;
    });
    climasSection.innerHTML = template;
}

renderClimas();







