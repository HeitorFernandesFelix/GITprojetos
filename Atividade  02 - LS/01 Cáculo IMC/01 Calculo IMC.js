function calcularIMC(parametro) {

				//Recebendo os Dados (Altura, Peso e Genero)

				var altura = document.getElementById('alturaid').value;
				var peso = document.getElementById('pesoid').value;
				var genero = document.querySelector('input[name="genero"]:checked').value;

				// Calculando IMC

				var imc = peso / (altura*altura);

				// Condições para verificação

				if (genero == 'Null') {}

				if (genero == 'Masculino') {

					if (imc < 19.1) {
						alert("Abaixo do Peso, Genero: " + genero);
					}
						else if (imc < 25.8){
							alert("Peso Normal, Genero: " + genero);
						}
							else if (imc < 27.3){
								alert("Marginalmente Acima do Peso, Genero: " + genero);
							}
								else if(imc <= 32.3){
									alert("Acima do Peso Ideal, Genero: " + genero);
								}
									else if (imc>32.3){
										alert("Obeso, Genero: " + genero);
									}
										else{
											alert("Impossível Realizar Calculo");
										}

				}
				else if (genero == 'Feminino'){

					if (imc < 20.7) {
						alert("Abaixo do Peso, Genero: " + genero);
					}
						else if (imc < 26.4){
							alert("Peso Normal, Genero: " + genero);
						}
							else if (imc < 27.8){
								alert("Marginalmente Acima do Peso, Genero: " + genero);
							}
								else if(imc <= 31.1){
									alert("Acima do Peso Ideal, Genero: " + genero);
								}
									else if (imc>31.1) {
										alert("Obeso, Genero: " + genero);
									}
										else {
											alert("Impossível Realizar Calculo");
										}
				}
			}