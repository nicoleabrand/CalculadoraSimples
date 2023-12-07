const resultado = document.querySelector(' .result ');
const confirmar = document.querySelector(' .igual ');

function insert( valor ){
    resultado.innerHTML += valor;
}


function clean() {
    resultado.innerHTML = ' ';
    confirmar.focus();
}


function backspace() {
    if(resultado.textContent){
        let result = document.getElementById('resultado').innerHTML
        resultado.innerHTML = result.substring(0, result.length - 1);
    } 
}


function confirma() {
    if(resultado.textContent != 'Erro') {
        document.getElementById("resultado").innerHTML = eval(resultado.innerHTML)
    }
}
function addteclado() {
    document.addEventListener("keypress", (e) => {
        if (e.key == "1") {
            insert("1");
        }
        else if (e.key == "2") {
            insert("2");
        }
        else if (e.key == "3") {
            insert("3");
        }
        else if (e.key == "4") {
            insert("4");
        }
        else if (e.key == "5") {
            insert("5");
        }
        else if (e.key == "6") {
            insert("6");
        }
        else if (e.key == "7") {
            insert("7");
        }
        else if (e.key == "8") {
            insert("8");
        }
        else if (e.key == "9") {
            insert("9");
        }
        else if (e.key == "0") {
            insert("0");
        }})  
}
