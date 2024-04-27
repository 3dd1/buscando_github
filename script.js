const formulario = document.querySelector("#formulario")
const caixa  = document.querySelector("#caixa")

async function buscar_usuario(ev){
    ev.preventDefault()
    try{
        const requisicao = await fetch(`https://api.github.com/users/${caixa.value}`) 
        const resposta = await requisicao.json()
        if(resposta.erro){
            erro.textContent =("CEP Inválido")
        }else{
            const username = document.createElement("p")
            document.body.appendChild(username)
            username.textContent = (`username: ${resposta.login}`)
            const nome = document.createElement("p")
            document.body.appendChild(nome)
            nome.textContent = (`nome: ${resposta.name}`)
            const imagem = document.createElement("img")
            document.body.appendChild(imagem)
            imagem.src = (`imagem do usuario: ${resposta.avatar_url}`)
            const bio = document.createElement("p")
            document.body.appendChild(bio)
            bio.textContent = (`bio: ${resposta.bio}`)
            
            
            caixa.value = ""
            caixa.focus()

        }

    }catch(error){
        console.log(error);
    }
    
}
formulario.addEventListener("submit", buscar_usuario)