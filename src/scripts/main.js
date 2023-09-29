document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('[data-faq-question]');

    const logoSection = document.querySelector('.logo');
    const alturaLogo = logoSection.clientHeight;

    window.addEventListener('scroll', function() {
        const posicaoAtual = this.window.scrollY;

        if (posicaoAtual < alturaLogo) {
            ocultaElementosDoHeader();
        } else {
            exibeElementosDoHeader();
        }
    })

    //FAQ
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreOuFechaResposta);
    }
})

function ocultaElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function exibeElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function abreOuFechaResposta(elemento) {
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}