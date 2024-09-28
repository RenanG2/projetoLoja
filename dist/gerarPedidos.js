"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gerarPedidos = gerarPedidos;
exports.exibirPedidos = exibirPedidos;
function gerarPedidos(qtd) {
    var pedidos = [];
    for (var i = 0; i < qtd; i++) {
        pedidos.push({
            id: i + 1,
            dataHora: new Date(Date.now() - Math.floor(Math.random() * 10000000000)),
            nomeCliente: "Cliente ".concat(i + 1),
            valorTotal: parseFloat((Math.random() * 1000).toFixed(2))
        });
    }
    return pedidos;
}
function formatarDataBrasileira(data) {
    var dia = String(data.getDate()).padStart(2, '0');
    var mes = String(data.getMonth() + 1).padStart(2, '0'); // Janeiro é mês 0
    var ano = data.getFullYear();
    var horas = String(data.getHours()).padStart(2, '0');
    var minutos = String(data.getMinutes()).padStart(2, '0');
    var segundos = String(data.getSeconds()).padStart(2, '0');
    return "".concat(dia, "/").concat(mes, "/").concat(ano, " ").concat(horas, ":").concat(minutos, ":").concat(segundos);
}
function exibirPedidos(pedidos) {
    pedidos.forEach(function (pedido) {
        var dataFormatada = formatarDataBrasileira(pedido.dataHora);
        console.log("ID: ".concat(pedido.id, ", DataHora: ").concat(dataFormatada, ", Cliente: ").concat(pedido.nomeCliente, ", Valor: R$").concat(pedido.valorTotal));
    });
}
