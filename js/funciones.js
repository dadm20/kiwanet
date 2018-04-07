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