import { useState } from "react";
import logotipo from "./assets/logotipo.jpeg";
import "./estilo/acceso.css";
import { useNavigate } from "react-router-dom";

const Acceso = () => {
  const navigate= useNavigate();
 const [correo, setCorreo] = useState("");
 const [password, setPassword] = useState("");


 const onAcceso =async () => {{
  const url="http://localhost:4000/ingresar";
  const response=await fetch(url,{
    method:"POST",
    body: JSON.stringify({
      Correo: correo,
      Contraseña:password
    }),
    headers:{
"Content-Type":"application/json"
    }
  });
  if(response.ok){
    navigate("/categorias");
  }else{
    alert("Usuario inicio sesion correctamente");
    navigate("/");
  }
 }}

  return(
    <div className="contenedor">
      <div className="titulo">Enseña.Me LSM</div>

      <div>
        <img src={logotipo} className="logo"/>
      </div>
      <div className="titulo">Iniciar Sesión</div>

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
           placeholder="password"
           className="caja-password"
           value={password}
           onChange={(e)=> setPassword(e.target.value)}
           />
         </div>
         </div>
         
        <div className="agrupador-boton">
        <button className="boton-ingresar" onClick={()=> onAcceso()}>Ingresar</button>
         </div>

        <div className="agrupador-boton">
            <a href="/registro"className="link-registro">Registrarse</a>
            <a href="/recuperar-password" className="link-password">Olvide mi contraseña</a>
        </div>
    </div>
  )
}
export default Acceso