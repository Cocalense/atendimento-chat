function carregar() {
    var hdr = window.document.getElementById('hdr')
    hdr.innerHTML ='mudando o texto'
}


function envMsg(event){
    event.preventDefault()
    var mensagem = window.document.getElementById('digitando').value;
    if(mensagem.trim() !== ''){
        window.document.getElementById('digitando').value = '';
     //   var container = document.createElement("div");
     //  container.classList.add("")
    }
}

carregar();
document.getElementById('formChat').addEventListener('submit',envMsg)