$(function () {

    //SIDE MENU - CHANGE CLASSES
    $(".icon-menu").click(function () {
        $(".modal-nav").toggleClass("show-menu");
    });

    //SIDE MENU - CLICK OUTSIDE MENU LINK
    $(document).on("click", function (e) {
        if ($(e.target).is(".icon-menu") === false) {
            $(".modal-nav").removeClass("show-menu");
        }
    });

    //LINKS ONPAGE - SMOOTH SCROLLING AND NO HASTEG ON URL, WHEN CLICKING AN ANCHOR LINK
    $(document).on('click', '.allmagazines a, .modal-nav a', function (event) {
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

    //ADD CLASS IF INPUT CHECKED
    $('.selected').click(function () {
        $(this).toggleClass('check');

        //ALERT NUMBER SELECTED
        var maxcheck = $(".check");
        if (maxcheck.length == 3) {
            alert("JÁ TEMOS 2 SELECIONADOS \nMas pode continuar selecionando")
        }
    });

    //MASK PRICES
    //http://igorescobar.github.io/jQuery-Mask-Plugin/docs.html
    $('.money').mask('#.##0,00', { reverse: true });

});

//SHOW IMAGE SELECTED IN OTHER PLACE
function showhide(el) {
    var display = document.getElementById(el).style.display;
    if (display == "block")
        document.getElementById(el).style.display = 'none';
    else
        document.getElementById(el).style.display = 'block';
};