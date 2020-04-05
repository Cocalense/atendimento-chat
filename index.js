document.addEventListener('DOMContentLoaded', function(){

    document.getElementsByClassName("botaoEnviar").addEventListener("click", enviandoMensagens);
    document.getElementById("caixaTexto").addEventListener("keydown", function(event){
        if (event.key === "Enter"){
            enviandoMensagens();
        }
    });
}, false);

function stopDefAction(botaoEnviar) {
    botaoEnviar.preventDefault();
}

function enviandoMensagens(){
    var mensagem = document.getElementById("caixaTexto").value;
    if(mensagem.trim() !== ''){
        document.getElementById("caixaTexto").value = '';
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
        msg.classList.add("mensagemTexto");
        msg.innerHTML = mensagem;
        container.appendChild(direitotext);
        italico.appendChild(from);
        direitotext.appendChild(italico);
        container.appendChild(mensagemContainer);
        mensagemContainer.appendChild(msg);
        document.getElementById("chatBox").appendChild(container);
        var objDiv = document.getElementById("chatBox")
        objDiv.scrollTop = objDiv.scrollHeight;
    }
    else{
        window.alert(" [Error] Impossível enviar mensagem em branco!");
    }
    
}