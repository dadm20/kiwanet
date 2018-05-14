    $(document).ready(function() {

        // validate del formulario de inicio de sesión
        var validator = $("#inicio_sesion").validate({
            rules: {
                email: {
                    required: true,
                    email: true,
                },
                password: {
                    required: true,
                    minlength: 4
                }
            },
            messages: {
                email: {
                    required: "Ingrese su correo electrónico",
                    email: "Ingrese un correo electrónico válido",
                },
                password: {
                    required: "Ingrese su contraseña",
                    minlength: jQuery.validator.format("Mínimo {0} caracteres")
                }
            },

            submitHandler: function() {

                correo = $("#email").val();
                pass = $("#password").val();

                if (correo == 'daniel@kiwanet.co' && pass == '1234') {
                    var url = "modulos/voluntario/index.html";
                    $(location).attr('href', url);
                } else if (correo == 'julian@kiwanet.co' && pass == '1234') {
                    var url = "modulos/ejecutor/index.html";
                    $(location).attr('href', url);
                } else if (correo == 'diego@kiwanet.co' && pass == '1234') {
                    var url = "modulos/tesorero/index.html";
                    $(location).attr('href', url);
                } else {
                    $("#alerta").removeClass("ocultar");
                }
            },
        });

        /*
         ************* Validaciones del Voluntario *************
         */

        // validate del formulario de solicitar_material.html
        var validator = $("#solicitar_material").validate({
            rules: {
                proyecto: {
                    required: true,
                },
                tipo_material: {
                    required: true,
                },
                cantidad: {
                    required: true,
                },
                fecha: {
                    required: true,
                    date: true
                },
                motivo: {
                    required: true,
                },
            },
            messages: {
                proyecto: {
                    required: "Seleccione un proyecto",
                },
                tipo_material: {
                    required: "Seleccione el tipo de material",
                },
                cantidad: {
                    required: "Ingrese la cantidad",
                },
                fecha: {
                    required: "Ingrese una fecha",
                    date: "Ingrese una fecha valida"
                },
                motivo: {
                    required: "Ingrese el motivo de la solicitud",
                },
            },

            submitHandler: function() {
                $("#alerta").removeClass("ocultar");
                $("#solicitar_material")[0].reset();
            },
        });


        // validate del formulario de reporte_consumo.html
        var validator = $("#reporte_consumo").validate({
            rules: {
                proyecto: {
                    required: true,
                },
                fecha_inicio: {
                    required: true,
                    date: true
                },
                fecha_fin: {
                    required: true,
                    date: true
                },
            },
            messages: {
                proyecto: {
                    required: "Seleccione un proyecto",
                },
                fecha_inicio: {
                    required: "Ingrese una fecha",
                    date: "Ingrese una fecha valida"
                },
                fecha_fin: {
                    required: "Ingrese una fecha",
                    date: "Ingrese una fecha valida"
                },
            },

            submitHandler: function() {

                fecha_inicio = $("#fecha_inicio").val();
                fecha_fin = $("#fecha_fin").val();

                if (fecha_fin < fecha_inicio) {
                    $("#alerta").removeClass("ocultar");
                } else {
                    $("#chartContainer").removeClass("ocultar");
                    $("#reporte_consumo").addClass("ocultar");
                    $("#c_b").css("height", "450px");
                    $("#alerta").addClass("ocultar");
                }
            },
        });

        /*
         ************* Validaciones del Ejecutor de proyecto *************
         */

        // validate del formulario de proyecto.html.html

        var validator = $("#crear_proyecto").validate({
            rules: {
                proyecto: {
                    required: true,
                },
                nombre: {
                    required: true,
                },
                direccion: {
                    required: true,
                },
                ciudad: {
                    required: true,
                },
                presupuesto: {
                    required: true,
                },
                descripcion: {
                    required: true,
                },


            },
            messages: {
                proyecto: {
                    required: "Seleccione un proyecto",
                },
                nombre: {
                    required: "Ingrese un nombre para el proyecto",
                },
                direccion: {
                    required: "Ingrese la dirección del proyecto",
                },
                ciudad: {
                    required: "Ingrese la ciudad del proyesto",
                },
                presupuesto: {
                    required: "Ingrese el presupuesto si lo tiene",
                },
                descripcion: {
                    required: "Ingrese una descripción al proyesto",
                },

            },

            submitHandler: function() {
                $("#alerta").removeClass("ocultar");
                $("#crear_proyecto")[0].reset();
            },
        }); 
    
        // validate del formulario de actualizar.html

        var validator = $("#actualizar_proyecto").validate({
            rules: {
                proyecto: {
                    required: true,
                },
                descripcion: {
                    required: true,
                },
               

            },
            messages: {
                proyecto: {
                    required: "Seleccionar proyecto",
                },
                descripcion: {
                    required: "Ingresar una descripción",
                },
                

            },

            submitHandler: function() {
                $("#alerta").removeClass("ocultar");
                $("#actualizar_proyecto")[0].reset();
            },
        });


// validate del formulario de historico.html

        var validator = $("#reporte_historico").validate({
            rules: {
                proyecto: {
                    required: true,
                },
                fecha_inicio: {
                    required: true,
                    date: true
                },
                fecha_fin: {
                    required: true,
                    date: true
                },
            },
            messages: {
                proyecto: {
                    required: "Seleccione un proyecto",
                },
                fecha_inicio: {
                    required: "Ingrese una fecha",
                    date: "Ingrese una fecha valida"
                },
                fecha_fin: {
                    required: "Ingrese una fecha",
                    date: "Ingrese una fecha valida"
                },
                

            },

            submitHandler: function() {

                fecha_inicio = $("#fecha_inicio").val();
                fecha_fin = $("#fecha_fin").val();

                if (fecha_fin < fecha_inicio) {
                    $("#alerta").removeClass("ocultar");
                } else {
                    $("#chartContainer").removeClass("ocultar");
                    $("#reporte_historico").addClass("ocultar");
                    $("#c_b").css("height", "450px");
                    $("#alerta").addClass("ocultar");
                }
            },
        });


        // validate del formulario de proyecto.html.html

        var validator = $("#asignar_voluntario").validate({
            rules: {
                proyecto: {
                    required: true,
                },
                voluntario: {
                    required: true,
                },
                fecha_inicio: {
                    required: true,
                    date: true
                },
                fecha_fin: {
                    required: true,
                    date: true
                },                
                descripcion: {
                    required: true,
                },


            },
            messages: {
                proyecto: {
                    required: "Seleccione un proyecto",
                },
                voluntario: {
                    required: "Seleccione un voluntario",
                },
                fecha_inicio: {
                    required: "Ingrese una fecha",
                    date: "Ingrese una fecha valida"
                },
                fecha_fin: {
                    required: "Ingrese una fecha",
                    date: "Ingrese una fecha valida"
                },                
                descripcion: {
                    required: "Ingresar descripción",
                },

            },

            submitHandler: function() {
                   

                $("#alerta").removeClass("ocultar");
                $("#asignar_voluntario")[0].reset();

                
            },
        });



// validate del formulario de proyecto.html.html

        var validator = $("#crear_voluntario").validate({
            rules: {
                tipo_doc: {
                    required: true,
                },
                identificacion: {
                    required: true,
                },
                nombre: {
                    required: true,
                },
                apellido: {
                    required: true,
                },
                sexo: {
                    required: true,
                },
                edad: {
                    required: true,
                },
                perfil: {
                    required: true,
                },
                descripcion: {
                    required: true,
                },
                ciudad: {
                    required: true,
                },


            },
            messages: {
                tipo_doc: {
                    required: "Seleccionar tipo",
                },
                identificacion: {
                    required: "Ingresar numero de identificación",
                },
                nombre: {
                    required: "Ingresar nombre",
                },
                apellido: {
                    required: "Ingresar apellido ",
                },
                sexo: {
                    required: "Seleccionar",
                },
                edad: {
                    required: "Ingresar edad",
                },
                perfil: {
                    required: "Seleccionar",
                },
                descripcion: {
                    required: "Ingresar descripción",
                },
                ciudad: {
                    required: "Ingresar ciudad",
                },

            },

            submitHandler: function() {
                $("#alerta").removeClass("ocultar");
                $("#crear_voluntario")[0].reset();
            },
        }); 


// validate del formulario de proyecto.html.html

        var validator = $("#dato_financiero").validate({
            rules: {
                tipo: {
                    required: true,
                },
                valor: {
                    required: true,
                },

                proyecto: {
                    required: true,
                },
                fecha: {
                    required: true,
                    date: true
                },
                descripcion: {
                    required: true,
                },
                


            },
            messages: {
                tipo: {
                    required: "Seleccionar tipo de egreso",
                },
                valor: {
                    required: "Ingresar valor",
                },
                proyecto: {
                    required: "Seleccionar",
                },
                fecha: {
                    required: "Ingrese una fecha",
                    date: "Ingrese una fecha valida"
                },
                                
                descripcion: {
                    required: "Ingresar descripción",
                },

            },

            submitHandler: function() {
                   

                $("#alerta").removeClass("ocultar");
                $("#dato_financiero")[0].reset();

                
            },
        });


// validate del formulario de proyecto.html.html

        var validator = $("#actualizar_registro").validate({
            rules: {
                tipo: {
                    required: true,
                },
                valor: {
                    required: true,
                },

                proyecto: {
                    required: true,
                },
                fecha: {
                    required: true,
                    date: true
                },
                motivo: {
                    required: true,
                },
                


            },
            messages: {
                tipo: {
                    required: "Seleccionar tipo de egreso",
                },
                valor: {
                    required: "Ingresar valor",
                },
                proyecto: {
                    required: "Seleccionar",
                },
                fecha: {
                    required: "Ingrese una fecha",
                    
                },
                                
                motivo: {
                    required: "Ingrese una descripción",
                },

            },

            submitHandler: function() {
                   

                $("#alerta").removeClass("ocultar");
                $("#actualizar_registro")[0].reset();

                
            },
        });


// validate del formulario de proyecto.html.html

        var validator = $("#presupuesto").validate({
            rules: {
                proyecto: {
                    required: true,
                },


            },
            messages: {
                proyecto: {
                    required: "Seleccionar proyecto",
                },

            },

            submitHandler: function() {
                   

                $("#alerta").removeClass("ocultar");
                $("#presupuesto")[0].reset();

                
            },
        });

        // validate del formulario de proyecto.html.html

        var validator = $("#ampliar_presu").validate({
            rules: {
                proyecto: {
                    required: true,
                },
                sol_valor: {
                    required: true,
                },
                descripcion: {
                    required: true,
                },


            },
            messages: {
                proyecto: {
                    required: "Seleccionar proyecto",
                },
                sol_valor: {
                    required: "Ingresar valor",
                },
                descripcion: {
                    required: "Ingresar descripción",
                },

            },

            submitHandler: function() {
                   

                $("#alerta").removeClass("ocultar");
                $("#ampliar_presu")[0].reset();

                
            },
        });







    }); //cierra el jquery linea 1









    function validar_usuario() {
        var correo = document.getElementById("inputEmail").value;
        var pass = document.getElementById("inputPassword").value;

        if (correo == 'daniel@kiwanet.com' && pass == '1234') {
            window.location.replace("modulos/voluntario/index.html");
            return false;
        } else if (correo == 'julian@kiwanet.com' && pass == '1234') {
            window.location.replace("modulos/ejecutor/index.html");
            return false;
        } else {
            document.getElementById("alerta").style.display = "block";
            return false;
        }
    }

    function registrar_usuario() {
        $('#exampleModalCenter').modal('show'); // abrir
        return false;
    }

    //Para validar contraseña
    function validar_contrasena() {
        var pass_1 = document.getElementById("pass_1").value;
        var pass_2 = document.getElementById("pass_2").value;

        if (pass_1 == pass_2 && pass_1 != '') {
            document.getElementById("confirmacion").innerHTML = "&nbsp;";

            // Verde #39B339
            document.getElementById("pass_1").style.borderColor = "#ced4da";
            document.getElementById("pass_2").style.borderColor = "#ced4da";
            document.getElementById("pass_1").style.color = "#ced4da";
            document.getElementById("pass_2").style.color = "#ced4da";
            document.getElementById("confirmacion").style.color = "#ced4da";

        } else {
            document.getElementById("confirmacion").innerHTML = "<label id='error'>No coinciden</label>";
            document.getElementById("pass_1").style.color = "#FF0000";
            document.getElementById("pass_2").style.color = "#FF0000";
            document.getElementById("pass_1").style.borderColor = "#FF0000";
            document.getElementById("pass_2").style.borderColor = "#FF0000";
            document.getElementById("error").style.color = "#FF0000";
        }

    }

    function recordar_contrasena() {
        var correo = document.getElementById("inputEmail").value;

        if (correo == 'daniel@kiwanet.com') {
            document.getElementById("alerta-ok").classList.remove("ocultar");
            return false;
        } else {
            document.getElementById("alerta").style.display = "block";
            return false;
        }
    }


    window.onload = function() {
        var chart = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,
            animationDuration: 1000,

            title: {
                text: "Material usado en Marzo 2018",
                fontSize: "30"
            },
            exportFileName: "MaterialUsadoMarzo2018", //Give any name accordingly
            exportEnabled: true,

            data: [{
                // Change type to "doughnut", "line", "splineArea", etc.
                type: "column",
                dataPoints: [
                    { label: "Ropa", y: 35 },
                    { label: "Alimentos", y: 55 },
                    { label: "Construcción", y: 25 },
                    { label: "Aseo", y: 30 },
                ]
            }]
        });
        chart.render();
    }

    function grafica() {
        var fecha_inicio = document.getElementById("fecha_inicio").value;
        var fecha_fin = document.getElementById("fecha_fin").value;

        if (fecha_fin < fecha_inicio) {
            document.getElementById("alerta").classList.remove("ocultar");
        } else {
            document.getElementById("chartContainer").classList.remove("ocultar");
            document.getElementById("form_grafica").style.display = "none";
            document.getElementById("c_b").style.height = "450px";
        }




        return false;
    }
