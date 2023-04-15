const itens = [...document.querySelectorAll(".itens")]
const btnReiniciar = document.getElementById("reset")
const pontosP1 = document.getElementById("pontosP1")
const pontosP2 = document.getElementById("pontosP2")

let vez = 1
let grade = [0, 0, 0, 0, 0, 0, 0, 0, 0]
let end = false

const FormasDeVencer = (grade) => {
    // Formas do jogador X vencer
    if ((grade[0] == 1 && grade[1] == 1 && grade[2] == 1) || (grade[3] == 1 && grade[4] == 1 && grade[5] == 1) || (grade[6] == 1 && grade[7] == 1 && grade[8] == 1) || (grade[0] == 1 && grade[3] == 1 && grade[6] == 1) || (grade[1] == 1 && grade[4] == 1 && grade[7] == 1) || (grade[2] == 1 && grade[5] == 1 && grade[8] == 1) || (grade[0] == 1 && grade[4] == 1 && grade[8] == 1) || (grade[2] == 1 && grade[4] == 1 && grade[6] == 1)) {

        return 1

    // Formas do jogador O vencer
    } else if ((grade[0] == 2 && grade[1] == 2 && grade[2] == 2) || (grade[3] == 2 && grade[4] == 2 && grade[5] == 2) || (grade[6] == 2 && grade[7] == 2 && grade[8] == 2) || (grade[0] == 2 && grade[3] == 2 && grade[6] == 2) || (grade[1] == 2 && grade[4] == 2 && grade[7] == 2) || (grade[2] == 2 && grade[5] == 2 && grade[8] == 2) || (grade[0] == 2 && grade[4] == 2 && grade[8] == 2) || (grade[2] == 2 && grade[4] == 2 && grade[6] == 2)) {

        return 2

    }
}

itens.map((ele, indice) => {
    ele.addEventListener("click", (eve) => {
        if (end) {              // se existir um vencedor, o jogo é encerrado

        } else {
            if (eve.target.innerHTML == "X" || eve.target.innerHTML == "O") {   // intervenção de mudança nos valores das casas

            } else {
                if (vez == 1) {
                    eve.target.innerHTML = "X"
                    eve.target.style.color = 'red'
                    grade[indice] = 1
                    if (FormasDeVencer(grade) == 1) {
                        alert("Vencedor: X")
                        if (pontosP1.innerHTML == "0") {
                            pontosP1.innerHTML = 1
                        } else {
                            pontosP1.innerHTML = Number(pontosP1.textContent) + 1
                        }
                        end = true
                        grade = [0, 0, 0, 0, 0, 0, 0, 0, 0]
                        vez = 1
                    }
                    vez = 2
                } else if (vez == 2) {
                    eve.target.innerHTML = "O"
                    eve.target.style.color = 'blue'
                    grade[indice] = 2
                    if (FormasDeVencer(grade) == 2) {
                        alert("Vencedor: O")
                        if (pontosP2.innerHTML == "0") {
                            pontosP2.innerHTML = 1
                        } else {
                            pontosP2.innerHTML = Number(pontosP2.textContent) + 1
                        }
                        end = true
                        grade = [0, 0, 0, 0, 0, 0, 0, 0, 0]
                        vez = 2
                    }
                    vez = 1
                }
                if (Number(pontosP1.textContent) > Number(pontosP2.textContent)) {
                    pontosP1.style.color = '#33fb33'
                    pontosP2.style.color = 'red'
                } else if (Number(pontosP2.textContent) > Number(pontosP1.textContent)) {
                    pontosP2.style.color = '#33fb33'
                    pontosP1.style.color = 'red'
                } else {
                    pontosP1.style.color = 'white'
                    pontosP2.style.color = 'white'
                }
            }
        }
    })
})

btnReiniciar.addEventListener("click", () => {          // evento de reiniciar o jogo
    itens.map((ele) => {
        ele.innerHTML = ""
        end = false
        grade = [0, 0, 0, 0, 0, 0, 0, 0, 0]
        vez = 1
    })
})