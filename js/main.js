$(function () {

    //SIDE MENU
    $(".icon-menu").click(function (e) {
        e.preventDefault();
        $(".modal-nav").toggleClass("show-menu");
    });
    $(document).on("click", function (e) {
        if ($(e.target).is(".icon-menu") === false) {
            $(".modal-nav").removeClass("show-menu");
        }
    });

    

});

/* //MOSTRA IMAGEM SELECIONADA
function showhide(el) {
    var display = document.getElementById(el).style.display;
    if (display == "block")
        document.getElementById(el).style.display = 'none';
    else
        document.getElementById(el).style.display = 'block';
};

//ADICIONA CLASSE MOSTRANDO O SELECIONADO
$('.selected').click(function () {
    $(this).toggleClass('active');

    //AVISO DE QUANTIDADES SELECIONADAS
    var maxSelecionado = document.querySelectorAll(".active");
    if (maxSelecionado.length == 3) {
        alert("JÁ TEMOS 2 SELECIONADOS! \nMas pode continuar selecionando")
    }
});

//MODAL PARA IMAGENS AMPLIADAS
var cliq = document.querySelectorAll(".imgclick");
cliq.forEach(function (img) {
    img.onclick = function () {
        document.getElementById("modal").style.display = "block";
        document.getElementById("modal-img").src = this.src;
    }
});

//LINK PARA IR AO TOPO SUAVEMENTE
$("#gototop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 900);
    return false;
});

//PREÇOS MASCARA
//http://igorescobar.github.io/jQuery-Mask-Plugin/docs.html
$('.money').mask('#.##0,00', { reverse: true }); */