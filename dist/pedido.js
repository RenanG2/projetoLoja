"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeSort = mergeSort;
function mergeSort(pedidos) {
    if (pedidos.length <= 1) {
        return pedidos;
    }
    var meio = Math.floor(pedidos.length / 2);
    var esquerda = mergeSort(pedidos.slice(0, meio));
    var direita = mergeSort(pedidos.slice(meio));
    return merge(esquerda, direita);
}
function merge(esquerda, direita) {
    var resultado = [];
    var i = 0, j = 0;
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
