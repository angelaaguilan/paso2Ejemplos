// 1. Crear la referencia de la sección de climas del DOM
const phSection = document.querySelector(".placeHolders");
const apiURL = 'https://jsonplaceholder.typicode.com/users';

// 2. Crear una función para obtener los datos de  climas desde la API GAEL
async function getDatos() {
    const res = await fetch(apiURL); // Fetch hace un request al endpoint
    // En RES se guarda la respuesta con el código de estado HTTP, las cabeceras, si existió un problema de comunicación y el cuerpo de la respuesta
    console.log(`RES - respuesta de API: ${res}`);
    const placeHolders = await res.json(); // res.json Transforma los resultados para poder leerllos como un obj de JS
    console.log(`TRANSF A JSON: ${placeHolders}`);
    return placeHolders;
}

// 3. Crear una función que renderice los placeHolders en el DOM
async function renderPlaceHolders() {
    const placeHolders = await getDatos();
    console.log(`En renderizar: ${placeHolders}`);
    let template = "";
    placeHolders.forEach((placeHolder) => {
        console.log(placeHolder);
//        console.log(`En renderizar individual NAME: ${placeHolder.name}`);
//        console.log(`En renderizar individual EMAIL: ${placeHolder.email}`);
        template += `
            <div class="placeHolder">
            <p>${placeHolder.name }</p>
            <p>${placeHolder.email }</p>
            </div>
            `;
    });
    phSection.innerHTML = template;
}

renderPlaceHolders();

