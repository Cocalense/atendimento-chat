function carregar() {
    var tituloHeader = document.getElementsByClassName('tituloHeader')
    tituloHeader.innerHTML ='Atendimento on-line'
}


//criando um parâmetro(event), para posteriormente indicar à função que previna comportamento padrão
function envMsg(event){   
    event.preventDefault()
    var mensagem = document.getElementById('digitando').value;
    if(mensagem.trim() !== ''){                                     //dúvida 
        document.getElementById('digitando').value = '';
        var container = document.createElement("div");
        container.classList.add("tituloRight");
        var boxTextRight = document.createElement("div");
        boxTextRight.classList.add("boxTextRight");
        var msg = document.createElement("p");
        msg.classList.add("texto");
        msg.innerHTML = mensagem;

        container.appendChild(boxTextRight);    //dúvida 
        boxTextRight.appendChild(textoRight);   //dúvida 
        textoRight.appendChild(texto);          //o texto é a mensagem que o atendente e o usuario escrevem
        texto.appendChild("p"); 
        texto.innerHTML = texto;                //dúvida 
    }
}

carregar();
document.getElementById('formChat').addEventListener('submit',envMsg)

mestre Lucas, avalia esse codigo e me ajuda a recria-lo e fazer funcionar ...please