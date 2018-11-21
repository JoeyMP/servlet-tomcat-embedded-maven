/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function requisitosEM() {
    var record = document.getElementById("record").checked;
    var fichaSocio = document.getElementById("fichaSocioEconomica").checked;
    var padFalle = document.getElementById("padresFallecidos").checked;
    var padEnfer = document.getElementById("padresEnfermos").checked;
    var otros = document.getElementById("otros").checked;
    var conR = 0;
    var conCS = 0;
    var entrue = "";
    try {
        if (record === true) {
            entrue += "RC,";
            conR++;
        }
        if (fichaSocio === true) {
            entrue += "FS,";
            conR++;
        }
        if (padFalle === true) {
            entrue += "PF,";
            conCS++;
        }
        if (padEnfer === true) {
            entrue += "PE,";
            conCS++;
        }
        if (otros === true) {
            entrue += "OT";
            conCS++;
        }

        if (conR === 2 || conCS > 0) {
            alert("Requisitos Cumplidos");
            document.getElementById("agregar").type = "submit";
            document.getElementById("requisito").value = entrue;

        } else {
            alert("Falta de Requisitos");

        }
    } catch (exception) {

    }
}

function  requisitosSA()
{
    var record = document.getElementById("record").checked;
    var ficha = document.getElementById("fichMatricula").checked;
    var examMed = document.getElementById("examMedico").checked;
    var sis = document.getElementById("sis").checked;
    var fichaSocio = document.getElementById("fichaSocioEconomica").checked;
    var padFalle = document.getElementById("padresFallecidos").checked;
    var padEnfer = document.getElementById("padresEnfermos").checked;
    var otros = document.getElementById("otros").checked;
    var conR = 0;
    var conCS = 0;
    var entrue = "";
    try {
        if (record === true) {
            entrue += "RC,";
            conR++;
        }
        if (ficha === true) {
            entrue += "FM,";
            conR++;
        }
        if (examMed === true) {
            entrue += "EM,";
            conR++;
        }
        if (sis === true) {
            entrue += "SIS,";
            conR++;
        }
        if (fichaSocio === true) {
            entrue += "FS,";
            conR++;
        }
        if (padFalle === true) {
            entrue += "PF,";
            conCS++;
        }
        if (padEnfer === true) {
            entrue += "PE,";
            conCS++;
        }
        if (otros === true) {
            entrue += "OT";
            conCS++;
        }

        if (conR === 5 || conCS > 0) {
            alert("Requisitos Cumplidos");
            document.getElementById("agregar").type = "submit";
            document.getElementById("requisito").value = entrue;

        } else {
            alert("Falta de Requisitos");

        }
    } catch (exception) {

    }
}
function  requisitosBT() {
    var record = document.getElementById("record").checked;
    var ficha = document.getElementById("fichMatricula").checked;
    var fichaSocio = document.getElementById("fichaSocioEconomica").checked;
    var padFalle = document.getElementById("padresFallecidos").checked;
    var padEnfer = document.getElementById("padresEnfermos").checked;
    var otros = document.getElementById("otros").checked;
    var conR = 0;
    var conCS = 0;
    var entrue = "";
    try {
        if (record === true) {
            entrue += "RC,";
            conR++;
        }
        if (ficha === true) {
            entrue += "FM,";
            conR++;
        }
        if (fichaSocio === true) {
            entrue += "FS,";
            conR++;
        }
        if (padFalle === true) {
            entrue += "PF,";
            conCS++;
        }
        if (padEnfer === true) {
            entrue += "PE,";
            conCS++;
        }
        if (otros === true) {
            entrue += "OT";
            conCS++;
        }
        if (conR === 3 || conCS > 0) {

            alert("Requisitos Cumplidos");

            document.getElementById("agregar").type = "submit";
            document.getElementById("requisito").value = entrue;

        } else {
            alert("Falta de Requisitos");
        }
    } catch (exception) {

    }
}

function cambiarBuscar(search) {

    var cod = document.getElementById("cod").value;
    if (cod != null) {

        document.getElementById("accion").value = search;
        document.getElementById("buscar").type = "submit";

    } else {
        alert("Ingrese Codigo");
    }

}

function cambiarInsert(insert) {
    document.getElementById("accion").value = insert;
    document.getElementById("agregar").type = "submit";
}
function forpdf() {
    document.getElementById("accion").value = "pdf";

}

function calcular() {

    var matricula = document.getElementById("matricula").value;
    var cursos = document.getElementById("curJa").value * 20;

    var total = (parseInt(matricula) + parseInt(cursos)) % 3;

    if (total != 0) {
        document.getElementById("mes1").value = Math.floor((parseInt(matricula) + parseInt(cursos)) / 3);
        document.getElementById("mes2").value = Math.floor((parseInt(matricula) + parseInt(cursos)) / 3);
        document.getElementById("mes3").value = Math.floor((parseInt(matricula) + parseInt(cursos)) / 3) + total;
    } else {
        document.getElementById("mes1").value = (parseInt(matricula) + parseInt(cursos)) / 3;
        document.getElementById("mes2").value = (parseInt(matricula) + parseInt(cursos)) / 3;
        document.getElementById("mes3").value = (parseInt(matricula) + parseInt(cursos)) / 3;

    }

    //document.getElementById("total").value=total;
}