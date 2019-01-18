
	var Acumular = 0; //Acumular = Contador
	var NovoNumero = false;// sinalizar novo número
	var OperPendente = "";	// Operação pendente


	// Abaixo estamos adcionando os valores de cada botão ao parametro Numero

	function NumeroPressionado(Numero) {
		if (NovoNumero) {
			document.frm_calc.txt_01.value  = Numero;
			NovoNumero = false;
   		}
		else {
			if (document.frm_calc.txt_01.value == "0"){
				document.frm_calc.txt_01.value = Numero;
			}
			else
				document.frm_calc.txt_01.value += Numero;
   		}
	}

	// Valores de exibição quando apertado o botão igual

	function Operacao(Op) {
		if (document.frm_calc.txt_01.value == ""){

				alert("O Campo esta vázio, digite um valor!");
				document.frm_calc.txt_01.value ="0"; 
			}

			else{

				if (NovoNumero && OperPendente != "=");

					else{
						NovoNumero = true;

							if ( '+' == OperPendente )
								Acumular += parseFloat(document.frm_calc.txt_01.value);

							else if ( '-' == OperPendente )
								Acumular -= parseFloat(document.frm_calc.txt_01.value);

							else if ( '/' == OperPendente )
								Acumular /= parseFloat(document.frm_calc.txt_01.value);

							else if ( '*' == OperPendente )
								Acumular *= parseFloat(document.frm_calc.txt_01.value);
							else
								Acumular = parseFloat(document.frm_calc.txt_01.value);
								document.frm_calc.txt_01.value = Acumular;
								OperPendente = Op;
						}
   				}
	}

	// Atribuindo o ponto( . ) aos valores numéricos

	function Ponto() {
		var curtxt_01 = document.frm_calc.txt_01.value;
		if (NovoNumero) {
			curtxt_01 = "0.";
			NovoNumero = false;
   		}
		else {
			
		if (curtxt_01.indexOf(".") == -1)
			curtxt_01 += ".";
   		}
		document.frm_calc.txt_01.value = curtxt_01;
	}