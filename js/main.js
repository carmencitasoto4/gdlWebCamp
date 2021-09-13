(function() {
    "use strict";

    var regalo = document.getElementById('regalo');
    document.addEventListener('DOMContentLoaded', function() {


            //datos de usuario
            var nombre = document.getElementById('nombre');
            var apellido = document.getElementById('apellido');
            var email = document.getElementById('email');
            //campos pases
            var pase_dia = document.getElementById('pase_dia');
            var pase_completo = document.getElementById('pase_completo');
            var pase_dosdias = document.getElementById('pase_dosdias');
            //botones y divs 
            var calcular = document.getElementById('calcular');
            var errorDiv = document.getElementById('error');
            var botonRegistro = document.getElementById('btnRegistro');
            var lista_productos = document.getElementById('lista-productos');
            var sumaTotal = document.getElementById('suma-total');
            //extras 
            var camisas = document.getElementById('camisa_evento');
            var etiquetas = document.getElementById('etiqueta');




            calcular.addEventListener('click', calcularMontos);
            pase_dia.addEventListener('blur', mostrarDia);
            pase_dosdias.addEventListener('blur', mostrarDia);
            pase_completo.addEventListener('blur', mostrarDia);

            nombre.addEventListener('blur', validarCampos);
            apellido.addEventListener('blur', validarCampos);
            email.addEventListener('blur', validarCampos);
            email.addEventListener('blur', validarEmail);

            function validarCampos() {
                if (this.value == '') {
                    errorDiv.style.display = "block";
                    errorDiv.innerHTML = "Este campo es obligatorio";
                    errorDiv.style.border = '1px solid red';
                    this.style.border = " 1px solid red"
                    this.style.backgroundColor = "pink"
                } else {
                    errorDiv.style.display = "none";
                    this.style.border = "1px solid #cccccc"
                    this.style.backgroundColor = "white"
                }
            }

            function validarEmail() {
                if (this.value.indexOf("@") > -1) {
                    errorDiv.style.display = 'none';
                    this.style.border = '1px solid #cccccc';
                } else {
                    errorDiv.style.display = 'block';
                    errorDiv.innerHTML = "Debe tener @";
                    this.style.border = '1px solid red';
                    errorDiv.style.border = '1px solid red';
                }
            }

            function calcularMontos(event) {

                event.preventDefault();
                console.log("haz hecho click");
                if (regalo.value === "") {
                    alert("Seleccione un regalo");
                    regalo.focus();
                } else {
                    var boletoDia = pase_dia.value,
                        boletoDosDias = pase_dosdias.value,
                        boletoCompleto = pase_completo.value,
                        cantCamisas = camisas.value,
                        cantEtiquetas = etiquetas.value;
                    var totalPagar = (boletoDia * 30) + (boletoDosDias * 45) + (boletoCompleto * 50) + ((cantCamisas * 10) * .93) + (cantEtiquetas * 2);

                    console.log(totalPagar);

                    var listadoProductos = [];

                    if (boletoDia >= 1) {
                        listadoProductos.push(boletoDia + " pases por día")
                    }

                    if (boletoDosDias >= 1) {
                        listadoProductos.push(boletoDosDias + " pases por dos días")
                    }
                    if (boletoCompleto >= 1) {
                        listadoProductos.push(boletoCompleto + " pases completos")
                    }

                    if (cantCamisas >= 1) {
                        listadoProductos.push(cantCamisas + " Camisas")
                    }
                    if (cantEtiquetas >= 1) {
                        listadoProductos.push(cantEtiquetas + " etiquetas")
                    }

                    console.log(listadoProductos)

                    lista_productos.style.display = "block"
                    lista_productos.innerHTML = "";
                    for (let i = 0; i < listadoProductos.length; i++) {
                        lista_productos.innerHTML += listadoProductos[i] + "<br/>"
                    }

                    sumaTotal.innerHTML = "$" + totalPagar.toFixed(2)

                }

                botonRegistro.disabled = false;
                document.getElementById('total_pedido').value = totalPagar;
            }

            function mostrarDia() {
                var boletoDia = pase_dia.value,
                    boletoDosDias = pase_dosdias.value,
                    boletoCompleto = pase_completo.value;
                var diasElegidos = [];
                if (boletoDia > 0) {

                    diasElegidos.push('viernes')

                }
                if (boletoDosDias > 0) {

                    diasElegidos.push('viernes', 'sabado')

                }
                if (boletoCompleto > 0) {

                    diasElegidos.push('viernes', 'sabado', 'domingo')

                }


                for (let i = 0; i < diasElegidos.length; i++) {
                    document.getElementById(diasElegidos[i]).style.display = "block"

                }


            }




        }) //DOMcontentloaded


}());


$(function() {

    //lettering

    $(".nombre-sitio").lettering();

    //Menu height

    var windowHeight = $(window).height();
    var barraAltura = $(".barra").innerHeight();

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > windowHeight) {
            $(".barra").addClass("fixed")
        } else { $(".barra").removeClass("fixed") }
    })

    //Menu Responsive
    $('.menu-movil').on('click', function() {
        $('.navegacion-principal').slideToggle();
    });

    $(".programa-evento .info-curso:first").show();
    $(".menu-programa a:first").addClass("activo")
    $('.menu-programa a').on("click", function() {
        $(".menu-programa a").removeClass("activo");
        $(this).addClass("activo")
        $("div.ocultar").hide();
        var enlace = $(this).attr("href")
        $(enlace).fadeIn(1000);

        return false
    })

    //Animaciones para los numeros//

    $(".resumen-evento li:nth-child(1) p").animateNumber({ number: 6 }, 5000);
    $(".resumen-evento li:nth-child(2) p").animateNumber({ number: 15 }, 5000);
    $(".resumen-evento li:nth-child(3) p").animateNumber({ number: 3 }, 3000);
    $(".resumen-evento li:nth-child(4) p").animateNumber({ number: 9 }, 1200);

    //cuenta regresiva//
    $(".cuenta-regresiva").countdown("2021/10/04 09:00:00", function(event) {
        $("#dias").html(event.strftime('%D'))
        $("#horas").html(event.strftime('%H'))
        $("#minutos").html(event.strftime('%M'))
        $("#segundos").html(event.strftime('%S'))
    })


    //Colorbox

    /* $(".invitado-info").colorbox({ inline: true, width: "50%" });*/





});