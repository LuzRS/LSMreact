import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logotipo from "./assets/logotipo.jpeg";
import "./estilo/acceso.css";

const Recuperar = () => {


  const navigate= useNavigate();

const [correo, setCorreo] = useState("");

const onRegistro=async () => {{
   if (correo==""){
      alert("ingrese un correo");
      return;
   }
const url="http://localhost:4000/aceptar-enviar-contraseña";
const response=await fetch(url,{
  method:"POST",
  body:JSON.stringify({
      Correo: correo
  }),
  headers:{
      "Content-Type":"application/json"
  }
})

if (!response.ok){
  const mensaje=await response.text();
  alert(mensaje);
}else{
  alert ("se envio correo");
  navigate("/");
}
}
}


  return(
    <div className="contenedor">
      <div className="titulo">Enseña.Me LSM</div>

      <div>
        <img src={logotipo} className="logo"/>
      </div>
      <div className="titulo">Olvide mi contraseña</div>

      <div className= "agrupador-correo">
        <div>Correo Electronico</div>
        <div>

        <input
        type ="text"
        placeholder="ingresa tu correo electronico"
        className="caja-correo"
        value={correo}
        onChange= {(e)=> setCorreo(e.target.value)}/>
        </div>
        </div>

       
        <div className="agrupador-boton">
        <button className="boton-ingresar" onClick={()=> onRegistro()}>Aceptar</button>
         </div>

        </div>
  )
}
export default Recuperar