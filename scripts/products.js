const formulario = document.getElementById('formulario')
const btnCrearUsuario = document.getElementById('btnCrear')
const btnColecciones = document.getElementById('btnColecciones')


formulario.addEventListener('submit', async (e) => {
    e.preventDefault()

    let name = document.getElementById('name').value

    let resp = await fetch (url, {
        method: 'POST',
        body: JSON.stringify({
            
        }),
        headers: {
            "Content-Type" : "aplication/json; charset=UTF-8"
        }
    })
    let data = resp.json()
    console.log(data)
})