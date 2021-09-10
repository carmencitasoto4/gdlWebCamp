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
        var botonRegistro = document.getElementById('btnregistro');
        var lista_productos = document.getElementById('lista-productos');
        var suma = document.getElementById('suma-total');
        //extras 
        var camisas = document.getElementById('camisa_evento');
        var etiquetas = document.getElementById('etiquetas');

        if (document.getElementById('calcular')) {



            calcular.addEventListener('click', calcularmontos);
            pase_dia.addEventListener('blur', mostrarDias);
            pase_dosdias.addEventListener('blur', mostrarDias);
            pase_completo.addEventListener('blur', mostrarDias);

            nombre.addEventListener('blur', validarCampos);
            apellido.addEventListener('blur', validarCampos);
            email.addEventListener('blur', validarCampos);
            email.addEventListener('blur', validarmail);

            function validarCampos() {
                if (this.value == '') {
                    errorDiv.style.display = 'block';
                    errorDiv.innerHTML = "este campo es obligatorio";
                    this.style.border = '1px solid red';
                    errorDiv.style.border = '1px solid red';
                } else {
                    errorDiv.style.display = 'none';
                    this.style.border = '1px solid #cccccc';
                }
            }

            function validarmail() {
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

            function calcularmontos(event) {

                event.preventDefault();
                if (regalo.value === '') {
                    alert("Debes elegir un regalo");
                    regalo.focus();
                } else {
                    var boletosDia = parseInt(pase_dia.value, 10) || 0,
                        boletosCompleto = parseInt(pase_completo.value, 10) || 0,
                        boletos2Dias = parseInt(pase_dosdias.value, 10) || 0,
                        cantCamisas = parseInt(camisas.value, 10) || 0,
                        cantEtiqueta = parseInt(etiquetas.value, 10) || 0;

                    var totalPagar = (boletosDia * 30) + (boletos2Dias * 45) + (boletosCompleto * 50) + ((cantCamisas * 10) * .93) + (cantEtiqueta * 2);

                    var listadoproductos = Array();
                    if (boletosDia >= 1) {
                        listadoproductos.push(boletosDia + ' Pases por dia');
                    }
                    if (boletos2Dias >= 1) {
                        listadoproductos.push(boletos2Dias + ' Pases por 2 dias');
                    }
                    if (boletosCompleto >= 1) {
                        listadoproductos.push(boletosCompleto + ' Pases por dia completo');
                    }
                    if (cantCamisas >= 1) {
                        listadoproductos.push(cantCamisas + ' Camisas');
                    }
                    if (cantEtiqueta >= 1) {
                        listadoproductos.push(cantEtiqueta + ' Etiquetas');
                    }
                    lista_productos.style.display = "block";
                    lista_productos.innerHTML = '';
                    for (var i = 0; i < listadoproductos.length; i++) {
                        lista_productos.innerHTML = listadoproductos[i] + '<br/>';
                    }
                    suma.innerHTML = "$ " + totalPagar.toFixed(2);



                }
            }

            function mostrarDias() {
                var boletosDia = parseInt(pase_dia.value, 10) || 0,
                    boletosCompleto = parseInt(pase_completo.value, 10) || 0,
                    boletos2Dias = parseInt(pase_dosdias.value, 10) || 0;
                var diasElegidos = Array();

                if (boletosDia > 0) {
                    diasElegidos.push('viernes');
                }
                if (boletos2Dias > 0) {
                    diasElegidos.push('viernes, sabado');
                }
                if (boletosCompleto > 0) {
                    diasElegidos.push('viernes, sabado, domingo');
                }
                for (var i = 0; i < diasElegidos.length; i++) {
                    document.getElementById(diasElegidos[i]).style.display = 'block';
                }
            }

        }

        ; //DOMcontentloaded
    })


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
    $('.mobile-menu').on('click', function() {
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

    $(".invitado-info").colorbox({ inline: true, width: "50%" });





});