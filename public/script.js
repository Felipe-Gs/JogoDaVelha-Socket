// faz a conexão com o socket io no backend
const socket = io.connect('http://localhost:3333/');


// Quando houver alteração no backend
socket.on('test', (data) => {
    toChangeArray(data.position);
})



const valIndexx = []
const resultado = []
const valoresX = []
const pocibilidade1 = [0, 1, 2]
const pocibilidade2 = [0, 3, 6]
const pocibilidade3 = [3, 4, 5]
const pocibilidade4 = [1, 4, 7]
const pocibilidade5 = [6, 7, 8]
const pocibilidade6 = [2, 5, 8]
const pocibilidade7 = [0, 4, 8]
const pocibilidade8 = [2, 4, 6]
const valoresO = []
const valor = 999
const posicaoX = []
// array de proriedades
console.log(pocibilidade1[2])
const items = [
    0, 0, 0,
    0, 0, 0,
    0, 0, 0
]
let flag = true;

// Renderiza dento da <div #hash />
function renderHashGame() {
    let table = `<table>`;

    for (let r = 0; r < 3; r++) {
        table += `<tr>`;

        for (let d = 0; d < 3; d++) {
            table += `<td>`;

            table += `</td>`;
        }

        table += `</tr>`;
    }
    table += `</table>`;
    document.querySelector('#hash').innerHTML = table;
    
    
    
}

// adiciona o evento de click a todos os <td>
function addEvents() {
    const allTableData = document.querySelectorAll('#hash td');
   
    allTableData.forEach((value, index) => {
        value.addEventListener('click', () => {
            // Emite a posição para o servidor
            socket.emit('test', { position: index });
            console.log(index + 'valor do index')
            // console.log('o valor do index é: ' + index)
            // resultado.push(index)
            // console.log(resultado + 'resultados')
            
        })
    })
   
}

// Muda o estado do array items
// Altera também a flag
function toChangeArray(valIndex) {
    
    const allTableData = document.querySelectorAll('#hash td');

    if(flag && items[valIndex] === 0) {
        items[valIndex] = 1;

        // adicona uma classe x
        allTableData[valIndex].classList.add('x');
        flag = false;

        valoresX.push(valIndex)
        valIndexx.push(valIndex)
        console.log(valoresX)
        console.log(valIndex + 'valores do index')
        console.log(valIndexx + 'valores totais dos index')
        verificaGanhador()
        let rs = document.querySelectorAll('#resultados');
        
        
        
    }else if (!flag && items[valIndex] === 0) {
        items[valIndex] = 2;

        // adicona uma classe circule
        allTableData[valIndex].classList.add('circule');
        flag = true;
        valIndexx.push(valIndex)
        valoresO.push(valIndex)
        console.log(valIndexx + 'valores totais dos index')
        verificaGanhadorO()
        // console.log(valoresO + 'valores O')
    }

    
    // console.log(items[valIndex])
    // console.log('x = 1, O = 2')
    
}

function verificaGanhador(){
    console.log(valoresX +'valores x')
        if(valoresX.includes(pocibilidade1[0]) && valoresX.includes(pocibilidade1[1]) && valoresX.includes(pocibilidade1[2])){
            console.log('JOGADOR X GANHOU!')
            var resp = window.document.getElementById('resultados');
            resp.innerHTML = `Jogador X ganhou!`
            console.log('1')
        }

        else if(valoresX.includes(pocibilidade2[0]) && valoresX.includes(pocibilidade2[1]) && valoresX.includes(pocibilidade2[2])){
            console.log('JOGADOR X GANHOU!  ')
            var resp = window.document.getElementById('resultados');
            resp.innerHTML = `Jogador X ganhou!`
            console.log('2')
        }
        
        else if(valoresX.includes(pocibilidade3[0]) && valoresX.includes(pocibilidade3[1]) && valoresX.includes(pocibilidade3[2])){
            console.log('JOGADOR X GANHOU!  ')
            var resp = window.document.getElementById('resultados');
            resp.innerHTML = `Jogador X ganhou!`
            console.log('3')
        }

        else if(valoresX.includes(pocibilidade4[0]) && valoresX.includes(pocibilidade4[1]) && valoresX.includes(pocibilidade4[2])){
            console.log('JOGADOR X GANHOU!  ')
            console.log('4')
        }

        else if(valoresX.includes(pocibilidade5[0]) && valoresX.includes(pocibilidade5[1]) && valoresX.includes(pocibilidade5[2])){
            console.log('JOGADOR X GANHOU!  ')
            var resp = window.document.getElementById('resultados');
            resp.innerHTML = `Jogador X ganhou!`
            console.log('5')
        }

        else if(valoresX.includes(pocibilidade6[0]) && valoresX.includes(pocibilidade6[1]) && valoresX.includes(pocibilidade6[2])){
            console.log('JOGADOR X GANHOU!  ')
            var resp = window.document.getElementById('resultados');
            resp.innerHTML = `Jogador X ganhou!`
            console.log('6')
        }

        else if(valoresX.includes(pocibilidade7[0]) && valoresX.includes(pocibilidade7[1]) && valoresX.includes(pocibilidade7[2])){
            console.log('JOGADOR X GANHOU!  ')
            var resp = window.document.getElementById('resultados');
            resp.innerHTML = `Jogador X ganhou!`
            console.log('7')
        }

        else if(valoresX.includes(pocibilidade8[0]) && valoresX.includes(pocibilidade8[1]) && valoresX.includes(pocibilidade8[2])){
            console.log('JOGADOR X GANHOU!  ')
            console.log('8')
        }
        else if(valIndexx.length === 9){
            console.log('deu empate');
            var resp = window.document.getElementById('resultados');
            resp.innerHTML = `Empate`
        }
}

function verificaGanhadorO(){
    console.log(valoresO +'valores O')
        if(valoresO.includes(pocibilidade1[0]) && valoresO.includes(pocibilidade1[1]) && valoresO.includes(pocibilidade1[2])){
            console.log('JOGADOR O GANHOU!')
            var resp = window.document.getElementById('resultados');
            resp.innerHTML = `Jogador O ganhou!`
            console.log('1')
        }

        else if(valoresO.includes(pocibilidade2[0]) && valoresO.includes(pocibilidade2[1]) && valoresO.includes(pocibilidade2[2])){
            console.log('JOGADOR O GANHOU!  ')
            var resp = window.document.getElementById('resultados');
            resp.innerHTML = `Jogador O ganhou!`
            console.log('2')
        }
        
        else if(valoresO.includes(pocibilidade3[0]) && valoresO.includes(pocibilidade3[1]) && valoresO.includes(pocibilidade3[2])){
            console.log('JOGADOR O GANHOU!  ')
            var resp = window.document.getElementById('resultados');
            resp.innerHTML = `Jogador O ganhou!`
            console.log('3')
        }

        else if(valoresO.includes(pocibilidade4[0]) && valoresO.includes(pocibilidade4[1]) && valoresO.includes(pocibilidade4[2])){
            console.log('JOGADOR O GANHOU!  ')
            var resp = window.document.getElementById('resultados');
            resp.innerHTML = `Jogador O ganhou!`
            console.log('4')
        }

        else if(valoresO.includes(pocibilidade5[0]) && valoresO.includes(pocibilidade5[1]) && valoresO.includes(pocibilidade5[2])){
            console.log('JOGADOR O GANHOU!  ')
            var resp = window.document.getElementById('resultados');
            resp.innerHTML = `Jogador O ganhou!`
            console.log('5')
        }

        else if(valoresO.includes(pocibilidade6[0]) && valoresO.includes(pocibilidade6[1]) && valoresO.includes(pocibilidade6[2])){
            console.log('JOGADOR O GANHOU!  ')
            var resp = window.document.getElementById('resultados');
            resp.innerHTML = `Jogador O ganhou!`
            console.log('6')
        }

        else if(valoresO.includes(pocibilidade7[0]) && valoresO.includes(pocibilidade7[1]) && valoresO.includes(pocibilidade7[2])){
            console.log('JOGADOR O GANHOU!  ')
            console.log('7')
        }

        else if(valoresO.includes(pocibilidade8[0]) && valoresO.includes(pocibilidade8[1]) && valoresO.includes(pocibilidade8[2])){
            console.log('JOGADOR O GANHOU!  ')
            var resp = window.document.getElementById('resultados');
            resp.innerHTML = `Jogador O ganhou!`
            console.log('8')
        }else if(valIndexx.length === 9){
            console.log('deu empate');
            var resp = window.document.getElementById('resultados');
            resp.innerHTML = `Empate`
        }
}

function Reiniciar(){
    location.reload();
}

// Chama as funçoes
renderHashGame();
addEvents();