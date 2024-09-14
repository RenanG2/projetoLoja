import { Pedido } from './pedido';

export function gerarPedidos(qtd: number): Pedido[] {
    let pedidos: Pedido[] = [];
    for (let i = 0; i < qtd; i++) {
        pedidos.push({
            id: i + 1,
            dataHora: new Date(Date.now() - Math.floor(Math.random() * 10000000000)), // Gera datas aleatórias
            nomeCliente: `Cliente ${i + 1}`,
            valorTotal: parseFloat((Math.random() * 1000).toFixed(2)) // Gera valores aleatórios
        });
    }
    return pedidos;
}

export function exibirPedidos(pedidos: Pedido[]): void {
    pedidos.forEach(pedido => {
        console.log(`ID: ${pedido.id}, DataHora: ${pedido.dataHora.toISOString()}, Cliente: ${pedido.nomeCliente}, Valor: R$${pedido.valorTotal}`);
    });
}
