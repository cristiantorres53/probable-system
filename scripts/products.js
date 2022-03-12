const formulario = document.getElementById("formulario");
const btnCrearUsuario = document.getElementById("btnCrear");
const btnColecciones = document.getElementById("btnColecciones");
let mostrarElementos = document.getElementById("elementos");

// formulario.addEventListener('submit', async (e) => {
//     e.preventDefault()

//     let name = document.getElementById('name').value

//     let resp = await fetch (url, {
//         method: 'POST',
//         body: JSON.stringify({

//         }),
//         headers: {
//             "Content-Type" : "aplication/json; charset=UTF-8"
//         }
//     })
//     let data = resp.json()
//     console.log(data)
// })

async function getImagenes() {
  try {
    const resp = await fetch("http://localhost:4001/products");
    const data = await resp.json();
    return data;
  } catch (error) {
    return console.log(error);
  }
}

async function pintarImagenes(data) {
  if (data == undefined) {
    data = await getImagenes();
  }

  mostrarElementos.innerHTML = ``;

  data.forEach((element) => {
    const { name, descripcion, img, categoria, price, tallas } = element;
    mostrarElementos.innerHTML += `
        
        <div class="card" style="width: 18rem;">
        <img src="${img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">${descripcion}</p>

          <form action="" id="compra">
          <input type="button" name="" id="btn-s" value="S">
          <input type="button" name="" id="btn-m" value="M">
          <input type="button" name="" id="btn-l" value="L">
          <input type="button" name="" id="btn-xl" value="XL">
          <input type="button" name="" id="btn-xll" value="XXL">
            <button id="btn-carrito" class="btn btn-primary btn-sm" >Agregar carrito</button>
          </form>          
        </div>
      </div>        
        `;
  });
}


pintarImagenes();



let compra = document.getElementById('compra')




compra.addEventListener('submit', async (e) => {
    e.preventDefault()



    const tallaS = document.getElementById("btn-s").value;
    const tallaM = document.getElementById("btn-m").value;
    const tallaL = document.getElementById("btn-l").value;
    const tallaXL = document.getElementById("btn-xl").value;
    const tallaXXL = document.getElementById("btn-xxl").value;
    


    if(tallaS == true){
        console.log("oprimio s")
    }
})
