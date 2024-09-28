"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gerarPedidos_1 = require("./gerarPedidos");
var pedido_1 = require("./pedido");
function testarOrdenacaoPedidos(qtdPedidos) {
    console.log("\nTestando com ".concat(qtdPedidos, " pedidos:"));
    var pedidos = (0, gerarPedidos_1.gerarPedidos)(qtdPedidos);
    console.log("\nPedidos antes da ordenação:");
    (0, gerarPedidos_1.exibirPedidos)(pedidos);
    var inicio = Date.now();
    var pedidosOrdenados = (0, pedido_1.mergeSort)(pedidos);
    var fim = Date.now();
    console.log("\nPedidos depois da ordenação:");
    (0, gerarPedidos_1.exibirPedidos)(pedidosOrdenados);
    console.log("\nTempo de ordena\u00E7\u00E3o: ".concat((fim - inicio), " ms\n"));
}
//testarOrdenacaoPedidos(100);
testarOrdenacaoPedidos(1000);
//testarOrdenacaoPedidos(100000);
//compilar: tsc -p ./tsconfig.json
//executar: node dist/testarOrdenacao.js
