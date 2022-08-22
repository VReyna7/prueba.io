<?php
session_start();
require_once('../modelo/class.conexion.php');
require_once('../modelo/class.cliente.php');
require_once('../modelo/class.admin.php');
require_once('../modelo/class.sesion.php');

$clnt = new Cliente;
$doc = new Doctor;
$admin = new Admin;
$sesion = new Sesion;

$mail = isset($_POST['mail'])?$_POST['mail']:"";
$pass = isset($_POST['pass'])?$_POST['pass']:"";

if(isset($_SESSION['cliente'])){
    //$clnt->setCliente($_SESSION['cliente']);
    header("location: ../vistas/dashboard.php");
}else if(isset($_SESSION['doctor'])){
    header("location: ../vistas/dashboard.php");
}else if(isset($_SESSION['admin'])){
    header("location: ../vistas/dashboard.php");
}else if($clnt->searchCliente($mail,md5($pass))){
    $clnt->setCliente($mail);
    $sesion->setClienteActual($clnt->getId());
    header("location: ../vistas/dashboard.php");
}else if($doc->searchDoctor($mail, md5($pass))){
    $doc->setDoctor($mail);
    //cambia el estado de la sesion a activo
    $doc->cambiarEstado($doc->getId());
    $sesion->setDoctorActual($doc->getId());
    header("location: ../vistas/dashboard.php");
}else if($admin->searchAdmin($mail,$pass)){
    $admin->setAdmin($mail);
    $sesion->setAdminActual($admin->getId());
    header("location: ../vistas/dashboard.php");
}else{
    $errorLog = "Error. Correo o contraseña son incorrectos";
    include_once("../vistas/Iniciosesion.php");
}
?>