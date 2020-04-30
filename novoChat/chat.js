
//criando um parâmetro(event), para posteriormente indicar à função que previna comportamento padrão
function envMsg(event){   
    event.preventDefault()
    var mensagem = document.getElementById('digitando').value;
    if(mensagem.trim() !== ''){                                     //dúvida 
        document.getElementById('digitando').value = '';
        var container = document.createElement("div");
        container.classList.add("tituloRight");
        var tituloVcDiz  = document.createElement("p");
        tituloVcDiz .innerText = "Você diz: ";
        var boxTextRight = document.createElement("div");
        boxTextRight.classList.add("boxTextRight");
        var msg = document.createElement("p");
        msg.classList.add("texto");
        msg.innerHTML = mensagem;

        container.appendChild(tituloVcDiz);
        container.appendChild(boxTextRight);
        boxTextRight.appendChild(msg);
        var secaoCentral = document.getElementById("secaoCentral");
        secaoCentral.appendChild(container);
    }
}

carregar();
document.getElementById('formChat').addEventListener('submit',envMsg)

mestre Lucas, avalia esse codigo e me ajuda a recria-lo e fazer funcionar ...please