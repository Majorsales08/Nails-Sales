// Menu mobile toggle
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('active');
});

// Formulário de agendamento para WhatsApp
document.getElementById('booking-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o envio normal do form

    // Coleta os valores dos campos
    const nome = document.getElementById('nome').value.trim();
    const horario = document.getElementById('horario').value;
    const servico = document.getElementById('servico').value;
    const data = document.getElementById('data').value;

    // Verifica se os campos obrigatórios estão preenchidos
    if (!nome || !servico || !data || !horario) {
        alert("Por favor, preencha todos os campos obrigatórios!");
        return;
    }

    // Monta a mensagem formatada (exatamente como você pediu)
    let texto = `*Olá gostaria de marcar um horário*%0A%0A` +
        `Meu Nome é ${nome}%0A` +
        `Gostaria de fazer ${servico}%0A` +
        `No dia ${data}%0A` +
        `Nesse horário ${horario}%0A`;

    // Link CORRETO do WhatsApp (seu número: 5514988349715)
    const whatsappUrl = `https://wa.me/5514988349715?text=${texto}`;

    // Abre o WhatsApp com a mensagem pré-preenchida
    window.open(whatsappUrl, '_blank');

    // Mostra mensagem de sucesso
    document.getElementById('form-message').style.display = 'block';

    // Limpa o formulário após envio
    this.reset();
});