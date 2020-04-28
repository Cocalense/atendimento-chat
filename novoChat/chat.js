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
        var container = document.createElement("div");
        container.classList.add("usuarioTop");
        var boxTextRight = document.createElement("div");
        boxTextRight.classList.add("boxTextRight")
        var textoUsuario = document.createElement("div");
        textoUsuario.classList.add("textoUsuario");
        var msg = document.createElement("p");
        msg.classList.add("texto");
        msg.innerHTML = mensagem;

        container.appendChild(boxTextRight);
        boxTextRight.appendChild(textoUsuario);
        textoUsuario.appendChild()  //mensagemcontainer
        FALTA FALTA
    }
}

carregar();
document.getElementById('formChat').addEventListener('submit',envMsg)

 
     /* container.appendChild(toRight);
                        // italico.appendChild(from);
      toRight.appendChild(italico);
      container.appendChild(msgContainer);
      msgContainer.appendChild(msg);
      document.getElementById("chatContainer").appendChild(container);
      var objDiv = document.getElementById("chatContainer");
      objDiv.scrollTop = objDiv.scrollHeight;
    }else{
        alert('Não é possivel enviar mensagem em branco!');
    }
        */