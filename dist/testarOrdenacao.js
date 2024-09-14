"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gerarPedidos_1 = require("./gerarPedidos");
const pedido_1 = require("./pedido");
// Função para testar o Merge Sort com diferentes cenários
function testarOrdenacaoPedidos(qtdPedidos) {
    console.log(`\nTestando com ${qtdPedidos} pedidos:`);
    const pedidos = (0, gerarPedidos_1.gerarPedidos)(qtdPedidos);
    console.log("\nPedidos antes da ordenação:");
    (0, gerarPedidos_1.exibirPedidos)(pedidos);
    const inicio = Date.now();
    const pedidosOrdenados = (0, pedido_1.mergeSort)(pedidos);
    const fim = Date.now();
    console.log("\nPedidos depois da ordenação:");
    (0, gerarPedidos_1.exibirPedidos)(pedidosOrdenados);
    console.log(`\nTempo de ordenação: ${(fim - inicio)} ms\n`);
}
// Simulando cenários
testarOrdenacaoPedidos(100); // Cenário de vendas moderadas (~100 pedidos)
testarOrdenacaoPedidos(1000); // Cenário de alta demanda (~1000 pedidos)
testarOrdenacaoPedidos(100000); // Cenário com alta precisão (~100.000 pedidos)
