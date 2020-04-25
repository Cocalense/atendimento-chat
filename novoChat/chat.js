function carregar() {
    var hdr = window.document.getElementById('hdr')
    hdr.innerHTML ='mudando o texto'
}


function envMsg(){
    var mensagem = window.document.getElementById('digitando').value;
    if(mensagem.trim() !== ''){
        window.document.getElementById('digitando').value = '';
        var container = document.createElement("div");
        container.classList.add("")
    }
}