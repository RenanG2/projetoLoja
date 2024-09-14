export interface Pedido {
    id: number;
    dataHora: Date;
    nomeCliente: string;
    valorTotal: number;
}

export function mergeSort(pedidos: Pedido[]): Pedido[] {
    if (pedidos.length <= 1) {
        return pedidos;
    }

    const meio = Math.floor(pedidos.length / 2);
    const esquerda = mergeSort(pedidos.slice(0, meio));
    const direita = mergeSort(pedidos.slice(meio));

    return merge(esquerda, direita);
}

function merge(esquerda: Pedido[], direita: Pedido[]): Pedido[] {
    let resultado: Pedido[] = [];
    let i = 0, j = 0;

    while (i < esquerda.length && j < direita.length) {
        if (esquerda[i].dataHora <= direita[j].dataHora) {
            resultado.push(esquerda[i]);
            i++;
        } else {
            resultado.push(direita[j]);
            j++;
        }
    }

    return resultado.concat(esquerda.slice(i)).concat(direita.slice(j));
}
