<%-- 
    Document   : InsertarAlumno
    Created on : 27-oct-2018, 19:23:56
    Author     : HH
--%>


<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <script type="text/javascript" src="js/requi.js"></script>
    <script src="jq/jquery-3.3.1.min.js" type="text/javascript"></script>
    <link href="css/estilos.css" rel="stylesheet"/>
    <title>JSP Page</title>
</head>
<body>


<div class="contenido abrir">

    <h1 style="text-align: center;color: cornflowerblue">Registro de Expendientes</h1>

    <form action="Alumno" method="post" style="background-color: aliceblue;text-align: center; table-layout: auto;">
        <input type="hidden" value="buscar" name="accion" id="accion"/>
        <fieldset>
            <br>
            <label>Facultad:</label>
            <input type="text" style="width: 350px" name="facultad" value="${datos.facultad}"/>

            <label>Escuela:</label>
            <input type="text" style="width: 180px" name="escuela" value="${datos.escuela}"/>

        </fieldset>
        <br>
        </fieldset>
        <br><br>
        <input type="button" value="Guardar Expediente" id="agregar" onclick="cambiarInsert('IN-EX')"/>
    </form>

    <script src="js/abrir.js" type="text/javascript"></script>
</body>
</html>
