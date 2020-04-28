function carregar() {
    var hdr = document.getElementById('hdr')
    hdr.innerHTML ='mudando o texto'
}


//criando um parâmetro(event), para posteriormente indicar à função que previna comportamento padrão
function envMsg(event){   
    event.preventDefault()
    var mensagem = document.getElementById('digitando').value;
    if(mensagem.trim() !== ''){
        document.getElementById('digitando').value = '';
     //   var container = document.createElement("div");
     //  container.classList.add("")
    }
}

carregar();
document.getElementById('formChat').addEventListener('submit',envMsg)

//daqui pra baixo é cola só par a conferÊncia
//function enviandoMensagens(){
   // var mensagem = document.getElementById("caixaTextoEntrada").value;
   // if(mensagem.trim() !== ''){
    //    document.getElementById("caixaTextoEntrada").value = '';
        var container = document.createElement("div");
        container.classList.add("mensagemRight");
        var direitotext = document.createElement("div");
        direitotext.classList.add("direitotext");
        var from = document.createElement("p");
        var italico = document.createElement("i");
        from.innerHTML = "Você diz: ";
        var mensagemContainer = document.createElement("div");
        mensagemContainer.classList.add("mensagemTexto");
        var msg = document.createElement("p");
//