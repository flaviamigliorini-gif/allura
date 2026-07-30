document.addEventListener('DOMContentLoaded', () => {
    // 1. Formatação da data no topo da página
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        const today = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dateElement.textContent = today.toLocaleDateString('pt-BR', options);
    }

    // 2. Interatividade para assinatura do boletim
    const btnNewsletter = document.getElementById('btn-newsletter');
    if (btnNewsletter) {
        btnNewsletter.addEventListener('click', () => {
            const email = prompt('Informe o seu e-mail para receber as atualizações do Observatório:');
            if (email && email.includes('@')) {
                alert('Inscrição confirmada! Você passará a receber nosso boletim informativo.');
            } else if (email) {
                alert('Por favor, informe um endereço de e-mail válido.');
            }
        });
    }

    // 3. Modal informativo sobre ONGs
    const btnInfoModal = document.getElementById('btn-info-modal');
    if (btnInfoModal) {
        btnInfoModal.addEventListener('click', () => {
            alert(
                "Como apoiar organizações que ajudam mulheres afegãs:\n\n" +
                "• UN Women (ONU Mulheres): Apoio humanitário e defesa de direitos civis.\n" +
                "• Malala Fund: Financiamento de redes e programas de educação emergencial.\n" +
                "• Anistia Internacional: Ações de conscientização e pressão diplomática.\n\n" +
                "Consulte os canais oficiais de cada instituição para realizar contribuições com segurança."
            );
        });
    }
});
