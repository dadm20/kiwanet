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
                    $(location).attr('href',url);
                } else if (correo == 'julian@kiwanet.co' && pass == '1234') {
                    var url = "modulos/ejecutor/index.html";
                    $(location).attr('href',url);
                } else if (correo == 'diego@kiwanet.co' && pass == '1234') {
                    var url = "modulos/tesorero/index.html";
                    $(location).attr('href',url);
                } else {
                    $("#alerta").removeClass("ocultar");
                } 
            },
        });
    });







/*
        // validate signup form on keyup and submit
        var validator = $("#signupform").validate({
            rules: {
                firstname: "required",
                lastname: "required",
                username: {
                    required: true,
                    minlength: 2,
                    remote: "users.action"
                },
                password: {
                    required: true,
                    minlength: 5
                },
                password_confirm: {
                    required: true,
                    minlength: 5,
                    equalTo: "#password"
                },
                email: {
                    required: true,
                    email: true,
                    remote: "emails.action"
                },
                dateformat: "required",
                terms: "required"
            },
            messages: {
                firstname: "Enter your firstname",
                lastname: "Enter your lastname",
                username: {
                    required: "Enter a username",
                    minlength: jQuery.validator.format("Enter at least {0} characters"),
                    remote: jQuery.validator.format("{0} is already in use")
                },
                password: {
                    required: "Provide a password",
                    minlength: jQuery.validator.format("Enter at least {0} characters")
                },
                password_confirm: {
                    required: "Repeat your password",
                    minlength: jQuery.validator.format("Enter at least {0} characters"),
                    equalTo: "Enter the same password as above"
                },
                email: {
                    required: "Please enter a valid email address",
                    minlength: "Please enter a valid email address",
                    remote: jQuery.validator.format("{0} is already in use")
                },
                dateformat: "Choose your preferred dateformat",
                terms: " "
            },
            // the errorPlacement has to take the table layout into account
            errorPlacement: function(error, element) {
                if (element.is(":radio"))
                    error.appendTo(element.parent().next().next());
                else if (element.is(":checkbox"))
                    error.appendTo(element.next());
                else
                    error.appendTo(element.parent().next());
            },
            // specifying a submitHandler prevents the default submit, good for the demo
            submitHandler: function() {
                alert("submitted!");
            },
            // set this class to error-labels to indicate valid fields
            success: function(label) {
                // set &nbsp; as text for IE
                label.html("&nbsp;").addClass("checked");
            },
            highlight: function(element, errorClass) {
                $(element).parent().next().find("." + errorClass).removeClass("checked");
            }
        });


*/








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

function grafica () {
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