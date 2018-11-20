$(function () {

    //SIDE MENU - CHANGE CLASSES
    $(".icon-menu").click(function () {
        $(".modal-nav").toggleClass("show-menu");
    });
    //SIDE MENU - WHEN CLICK IS NOT MENU LINK
    $(document).on("click", function (e) {
        if ($(e.target).is(".icon-menu") === false) {
            $(".modal-nav").removeClass("show-menu");
        }
    });
    //SIDE MENU - SMOOTH SCROLLING WHEN CLICKING AN ANCHOR LINK
    $(document).on('click', '.modal-nav a', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    });

    //MODAL ZOOM IMAGENS
    var cliq = document.querySelectorAll(".imgclick");
    cliq.forEach(function (img) {
        img.onclick = function () {
            document.getElementById("modal").style.display = "block";
            document.getElementById("modal-img").src = this.src;
        }
    });

    //ADICIONA CLASSE MOSTRANDO O SELECIONADO
    $('.selected').click(function () {
        $(this).toggleClass('active');

        //AVISO DE QUANTIDADES SELECIONADAS
        var maxselected = document.querySelectorAll(".active");
        if (maxselected.length == 3) {
            alert("JÁ TEMOS 2 SELECIONADOS \nMas pode continuar selecionando")
        }
    });

    //usar data para mostrar imagens abaixo/selecionadas

    //MASK PRICES
    //http://igorescobar.github.io/jQuery-Mask-Plugin/docs.html
    $('.money').mask('#.##0,00', { reverse: true });

});

//SHOW IMAGE SELECTED
/* 
function showhide(el) {
    var display = document.getElementById(el).style.display;
    if (display == "block")
        document.getElementById(el).style.display = 'none';
    else
        document.getElementById(el).style.display = 'block';
};
*/