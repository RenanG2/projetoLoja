import { Pedido } from './pedido';

export function gerarPedidos(qtd: number): Pedido[] {
    let pedidos: Pedido[] = [];
    for (let i = 0; i < qtd; i++) {
        pedidos.push({
            id: i + 1,
            dataHora: new Date(Date.now() - Math.floor(Math.random() * 10000000000)),
            nomeCliente: `Cliente ${i + 1}`,
            valorTotal: parseFloat((Math.random() * 1000).toFixed(2))
        });
    }
    return pedidos;
}

function formatarDataBrasileira(data: Date): string {
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0'); // Janeiro é mês 0
    const ano = data.getFullYear();
    const horas = String(data.getHours()).padStart(2, '0');
    const minutos = String(data.getMinutes()).padStart(2, '0');
    const segundos = String(data.getSeconds()).padStart(2, '0');

    return `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`;
}

export function exibirPedidos(pedidos: Pedido[]): void {
    pedidos.forEach(pedido => {
        const dataFormatada = formatarDataBrasileira(pedido.dataHora);
        console.log(`ID: ${pedido.id}, DataHora: ${dataFormatada}, Cliente: ${pedido.nomeCliente}, Valor: R$${pedido.valorTotal}`);
    });
}
