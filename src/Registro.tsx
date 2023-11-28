import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logotipo from "./assets/logotipo.jpeg";
import "./estilo/acceso.css";

const Registro = () => {
  const navigate= useNavigate();
 const [correo, setCorreo] = useState("");
 const [password, setPassword] = useState("");
 const [nameuser, setNameuser] = useState("");


 const onRegistro =async () => {{
  const url="http://localhost:4000/aceptar-nuevo-registro";
  const response=await fetch(url,{
    method:"POST",
    body: JSON.stringify({
      Nombre: nameuser,
      Correo: correo,
      Contraseña:password
      
    }),
    headers:{
"Content-Type":"application/json"
    }
  });
  if(!response.ok){
    const mensaje=await response.json();
    alert(mensaje);
  }else{
    alert("Usuario registrado correctamente");
    navigate("/");
  }
   

 }}
//separando;
  return(
    <div className="contenedor">
      <div className="titulo">Enseña.Me LSM</div>

      <div>
        <img src={logotipo} className="logo"/>
      </div>
      <div className="titulo">Registrarme</div>
  
         <div className= "agrupador-name">
        <div>Nombre de usuario</div>
        <div>

        <input
        type ="text"
        placeholder="ingresa tu nombre de usuario"
        className="caja-name"
        value={nameuser}
        onChange= {(e)=> setNameuser(e.target.value)}/>
        </div>
        </div>
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

        <div className="agrupador-password">
         <div>contraseña</div>
         <div>
          <input
           type="password"
           placeholder="Password"
           className="caja-password"
           value={password}
           onChange={(e)=> setPassword(e.target.value)}/>
         </div>
         </div>
         
        <div className="agrupador-boton">
        <button className="boton-ingresar" onClick={()=> onRegistro()}>Registro</button>
         </div>
        
        </div>
  
  )
}
export default Registro