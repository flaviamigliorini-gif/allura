// Aguarda que a página seja completamente carregada antes de atribuir os eventos
document.addEventListener('DOMContentLoaded', () => {
    const actionBtn = document.getElementById('actionBtn');

    if (actionBtn) {
        actionBtn.addEventListener('click', () => {
            alert('Para apoiar, busque por ONGs internacionais reconhecidas como a UN Women, Amnesty International e Fundo Malala que atuam na defesa dos direitos educacionais das mulheres afegãs.');
        });
    }
});
