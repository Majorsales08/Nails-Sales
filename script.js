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

    // Monta a mensagem formatada
    let texto = `*Olá gostaria de marcar um horário*%0A%0A` +
        `Meu Nome é ${nome}%0A` +
        `Gostari de fazer ${servico}%0A` +
        `No dia ${data}%0A` +
        `Nesse horário ${horario}%0A` ;

    // Link do WhatsApp (seu número sem + ou espaços)
    const whatsappUrl = `https://w.app/nailssales?text=${texto}`;

    // Abre o WhatsApp com a mensagem pré-preenchida
    window.open(whatsappUrl, '_blank');

    // Mostra mensagem de sucesso
    document.getElementById('form-message').style.display = 'block';

    // Opcional: limpa o formulário após envio
    this.reset();
});