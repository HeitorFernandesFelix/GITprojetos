function salvarCliente(){

	// Pega informacoes do cliente do input
	var v_nome = document.getElementById("nome").value;
	var v_email = document.getElementById("email").value;
	var v_contato = document.getElementById("telefone").value;
	var v_endereco = document.getElementById("msg").value;

	// Cria variavel cliente, com todos os dados
	var cliente = {nome: v_nome, email: v_email, contato: v_contato, endereco: v_endereco};

	// Transforma variavel cliente em String
	var cliente_json = JSON.stringify(cliente);

	// Salva Cliente String
	localStorage.setItem("cliente", cliente_json);

}

function salvarPedido(){

	// Pega valor do tamanho
	var tamanhos = document.getElementsByName('tamanho');

	for (var i = 0, length = tamanhos.length; i < length; i++) {
		if (tamanhos[i].checked) {
			var res = tamanhos[i].value.split(" ");
			var tamanho = {nome: res[1], valor: res[0]};
			break;
		}
	}

	// Transforma tamanho em String
    var tamanho_json = JSON.stringify(tamanho);

    // Salva String de itens
    localStorage.setItem("tamanho", tamanho_json);

	// Pega valores do checkbox
	var checks = document.querySelectorAll("input[type='checkbox']:checked"),
        i = checks.length,
        itens = [];

    while (i--) {
    	var res = checks[i].value.split(" ");
    	var item = {nome: res[1], valor: res[0]};
        itens.push(item);
    }

    // Transforma itens em String
    var itens_json = JSON.stringify(itens);


    // Salva String de itens
    localStorage.setItem("itens", itens_json);

}

function mostrarPedido() {

	// Pegando dados salvos
	var cliente = JSON.parse(localStorage.getItem("cliente"));
	var tamanho = JSON.parse(localStorage.getItem("tamanho"));
	var itens = JSON.parse(localStorage.getItem("itens"));

	var total = 0;

	// Imprimindo cliente
	document.getElementById("cliente").innerHTML =
	" Nome: "  + cliente.nome + ("<br>") + ("<br>") + " Email: " + cliente.email + ("<br>") + ("<br>") + " Contato: " + cliente.contato + ("<br>") + ("<br>") + " Endereço: "  + cliente.endereco + ("<br>") + ("<br>");

	// Imprimindo tamanho
	document.getElementById("pedido").innerHTML =
	" Tamanho: " + tamanho.nome  + " ....................................................................................... " + tamanho.valor + ("<br>");

	// Soma tamanho
	total += Number(tamanho.valor);

	// Imprimindo itens
	// Percorre itens
	for (var i = 0, length = itens.length; i < length; i++) {

		var item = itens[i].nome + " ....................................................................................... " + itens[i].valor + ("<br>");


		// Soma valor item
		total += Number(itens[i].valor);

		document.getElementById("pedido").innerHTML += item;
	}

	// Soma frete
	total += 3;

	document.getElementById("pedido").innerHTML += " Total: " + total + " reais";
}

function atualizarValores() {
	var tamanhos = document.getElementsByName('tamanho');
	var acompanhamentos = document.getElementsByName('acompanhamento');

	var valorTamanho = 0.0;
	var valorAcompanhamento = 0.0;
	var valorFrete = 3.0;
	var valorTotal = 0.0;

	for(var a = 0; a < tamanhos.length; a++) {
		if(tamanhos[a].checked) {
			valorTamanho = parseFloat(tamanhos[a].value);
		}
	}

	for(var b = 0; b < acompanhamentos.length; b++) {
		if(acompanhamentos[b].checked) {
			valorAcompanhamento += parseFloat(acompanhamentos[b].value);
		}
	}

	valorTotal = valorTamanho + valorAcompanhamento + valorFrete;
	var vtamanho = document.getElementById('valorTamanho').value ='R$ ' + valorTamanho;
	var vacompanhamento = document.getElementById('valorAcompanhamento').value = 'R$ ' + valorAcompanhamento;
	var vtotal = document.getElementById('valorTotal').value = 'R$ ' + valorTotal;
}
