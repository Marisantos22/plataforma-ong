const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

if (menuBtn && menu) {

    menuBtn.addEventListener("click", function () {

        menu.classList.toggle("ativo");

    });

}


const linksMenu = document.querySelectorAll(".menu a");

linksMenu.forEach(function (link) {

    link.addEventListener("click", function () {

        if (menu) {
            menu.classList.remove("ativo");
        }

    });

});


function aplicarMascara(input, tipo) {

    input.addEventListener("input", function () {

        let valor = input.value.replace(/\D/g, "");

        if (tipo === "cpf") {

            valor = valor.substring(0, 11);

            valor = valor.replace(
                /(\d{3})(\d)/,
                "$1.$2"
            );

            valor = valor.replace(
                /(\d{3})(\d)/,
                "$1.$2"
            );

            valor = valor.replace(
                /(\d{3})(\d{1,2})$/,
                "$1-$2"
            );

        }

        if (tipo === "telefone") {

            valor = valor.substring(0, 11);

            if (valor.length <= 10) {

                valor = valor.replace(
                    /(\d{2})(\d)/,
                    "($1) $2"
                );

                valor = valor.replace(
                    /(\d{4})(\d)/,
                    "$1-$2"
                );

            } else {

                valor = valor.replace(
                    /(\d{2})(\d)/,
                    "($1) $2"
                );

                valor = valor.replace(
                    /(\d{5})(\d)/,
                    "$1-$2"
                );

            }

        }

        if (tipo === "cep") {

            valor = valor.substring(0, 8);

            valor = valor.replace(
                /(\d{5})(\d)/,
                "$1-$2"
            );

        }

        input.value = valor;

    });

}


const cpf = document.getElementById("cpf");

if (cpf) {
    aplicarMascara(cpf, "cpf");
}


const telefone = document.getElementById("telefone");

if (telefone) {
    aplicarMascara(telefone, "telefone");
}


const cep = document.getElementById("cep");

if (cep) {
    aplicarMascara(cep, "cep");
}



const formulario = document.getElementById("formCadastro");
const mensagemCadastro = document.getElementById("mensagemCadastro");

if (formulario) {
    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();

        if (!formulario.checkValidity()) {
            formulario.reportValidity();
            return;
        }

        if (mensagemCadastro) {
            mensagemCadastro.textContent =
                "Cadastro demonstrativo concluído! Seus dados não foram enviados a um servidor.";
        }

        formulario.reset();
    });
}


const barras = document.querySelectorAll(".barra-progresso");

barras.forEach(function (barra) {

    const progresso = barra.dataset.progresso;

    barra.style.width = progresso + "%";

});
