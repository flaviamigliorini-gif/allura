document.addEventListener('DOMContentLoaded', () => {
    const actionBtn = document.getElementById('actionBtn');

    if (actionBtn) {
        actionBtn.addEventListener('click', () => {
            alert('Para apoiar a causa, busque por ONGs internacionais reconhecidas, como UN Women, Amnesty International e Fundo Malala, que atuam na defesa dos direitos e da educação das mulheres afegãs.');
        });
    }
});
