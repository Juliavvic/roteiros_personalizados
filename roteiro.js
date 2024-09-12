const roteiros = [
    "Cachoeira da Neblina",
    "Grutas",
    "Cachoeiras",
    "Pesca do Tucunaré",
    "Salto do Ipy e Mutum",
    "Lagoas"
];

document.getElementById('dias').addEventListener('change', function() {
    const diasSelecionados = parseInt(this.value);
    const roteirosContainer = document.getElementById('roteirosContainer');
    roteirosContainer.innerHTML = ''; // Limpa os roteiros

    for (let dia = 1; dia <= diasSelecionados; dia++) {
        const labelDia = document.createElement('label');
        labelDia.textContent = `Escolha 1 roteiro para o Dia ${dia}:`;
        roteirosContainer.appendChild(labelDia);

        const selectDia = document.createElement('select');
        selectDia.name = `roteirosDia${dia}`;
        selectDia.multiple = true;

        roteiros.forEach(roteiro => {
            const option = document.createElement('option');
            option.value = roteiro;
            option.textContent = roteiro;
            selectDia.appendChild(option);
        });

        roteirosContainer.appendChild(selectDia);
    }
});

document.getElementById('roteiroForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const diasSelecionados = parseInt(document.getElementById('dias').value);
    let resultadoHTML = `<h2>Seu Roteiro Turístico Personalizado:</h2>`;
    
    for (let dia = 1; dia <= diasSelecionados; dia++) {
        const roteirosDia = Array.from(document.querySelectorAll(`select[name="roteirosDia${dia}"] option:checked`)).map(option => option.value);
        if (roteirosDia.length > 0) {
            resultadoHTML += `<p><strong>Dia ${dia}:</strong> ${roteirosDia.join(', ')}</p>`;
        } else {
            resultadoHTML += `<p><strong>Dia ${dia}:</strong> Nenhum roteiro selecionado.</p>`;
        }
    }

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = resultadoHTML;
    resultadoDiv.style.display = 'block';
});
