"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeSort = mergeSort;
// Função Merge Sort para ordenar os pedidos
function mergeSort(pedidos) {
    if (pedidos.length <= 1) {
        return pedidos;
    }
    const meio = Math.floor(pedidos.length / 2);
    const esquerda = mergeSort(pedidos.slice(0, meio));
    const direita = mergeSort(pedidos.slice(meio));
    return merge(esquerda, direita);
}
// Função para mesclar duas metades ordenadas
function merge(esquerda, direita) {
    let resultado = [];
    let i = 0, j = 0;
    while (i < esquerda.length && j < direita.length) {
        if (esquerda[i].dataHora <= direita[j].dataHora) {
            resultado.push(esquerda[i]);
            i++;
        }
        else {
            resultado.push(direita[j]);
            j++;
        }
    }
    return resultado.concat(esquerda.slice(i)).concat(direita.slice(j));
}
