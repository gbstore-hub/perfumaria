// ===== MENU MOBILE =====
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.querySelector('.navbar');

if (menuToggle && navbar) {
    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
        });
    });
}

// ===== FILTRO DE MARCAS NA PÁGINA DE PRODUTOS =====
const filtroBotoes = document.querySelectorAll('.filtro-marca');
const secoesMarca = document.querySelectorAll('.marca-secao');

if (filtroBotoes.length > 0) {
    filtroBotoes.forEach(botao => {
        botao.addEventListener('click', () => {
            const marcaSelecionada = botao.getAttribute('data-marca');

            filtroBotoes.forEach(b => b.classList.remove('ativo'));
            botao.classList.add('ativo');

            secoesMarca.forEach(secao => {
                if (marcaSelecionada === 'todas' || secao.id === marcaSelecionada) {
                    secao.style.display = 'block';
                } else {
                    secao.style.display = 'none';
                }
            });

            if (marcaSelecionada !== 'todas') {
                document.getElementById(marcaSelecionada).scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ===== FORMULÁRIO DE CONTATO =====
const formContato = document.getElementById('form-contato');

if (formContato) {
    formContato.ad