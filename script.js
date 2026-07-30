document.addEventListener('DOMContentLoaded', () => {
    // 1. Atualizar e exibir a data local formatada no cabeçalho
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        const today = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dateElement.textContent = today.toLocaleDateString('pt-BR', options);
    }

    // 2. Interatividade de assinatura da newsletter
    const btnNewsletter = document.getElementById('btn-newsletter');
    if (btnNewsletter) {
        btnNewsletter.addEventListener('click', () => {
            const email = prompt('Informe seu endereço de e-mail para assinar o boletim diário:');
            if (email && email.includes('@')) {
                alert('Inscrição realizada com sucesso! Você receberá nosso resumo diário por e-mail.');
            } else if (email) {
                alert('Por favor, informe um endereço de e-mail válido.');
            }
        });
    }

    // 3. Modal explicativo para informações sobre apoio e doações
    const btnInfoModal = document.getElementById('btn-info-modal');
    if (btnInfoModal) {
        btnInfoModal.addEventListener('click', () => {
            alert(
                "Como apoiar os Direitos das Mulheres Afegãs:\n\n" +
                "• UN Women (ONU Mulheres): Atuação direta na proteção e direitos das mulheres.\n" +
                "• Malala Fund: Apoio a redes clandestinas e alternativas de ensino secundário.\n" +
                "• Anistia Internacional: Monitoramento global e pressão diplomática.\n\n" +
                "Consulte sempre os portais oficiais de cada instituição para contribuições seguras."
            );
        });
    }
});
