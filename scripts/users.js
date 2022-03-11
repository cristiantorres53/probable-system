const formulario = document.getElementById('formulario')
const btnCrearUsuario = document.getElementById('btncrear')


formulario.addEventListener('submit', async (e) => {
    e.preventDefault()

    let foto = document.getElementById('foto').value
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let description = document.getElementById('description').value

    let resp = await fetch (url, {
        method: 'POST',
        body: JSON.stringify({
            foto: url,
            name : name,
            email: email,
            description:description
        }),
        headers: {
            "Content-Type" : "aplication/json; charset=UTF-8"
        }
    })
    let data = resp.json()
    console.log(data)
})