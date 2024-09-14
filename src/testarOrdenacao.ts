import { gerarPedidos, exibirPedidos } from './gerarPedidos';
import { mergeSort } from './pedido';

function testarOrdenacaoPedidos(qtdPedidos: number): void {
    console.log(`\nTestando com ${qtdPedidos} pedidos:`);

    const pedidos = gerarPedidos(qtdPedidos);

    console.log("\nPedidos antes da ordenação:");
    exibirPedidos(pedidos);

    const inicio = Date.now();
    const pedidosOrdenados = mergeSort(pedidos);
    const fim = Date.now();

    console.log("\nPedidos depois da ordenação:");
    exibirPedidos(pedidosOrdenados);

    console.log(`\nTempo de ordenação: ${(fim - inicio)} ms\n`);
}

testarOrdenacaoPedidos(100);  
//testarOrdenacaoPedidos(1000); 
//testarOrdenacaoPedidos(100000); 
