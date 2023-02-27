import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useContext, useState } from "react";
import ContextOrigin from "../Context";
const { Context } = ContextOrigin;

export default function AsidePerfil() {

    const navigate = useNavigate();

    const { setSession, data } = useContext(Context);

    const logout = () => {
        setSession(null);
        alert(`Sesión cerrada con éxito, hasta pronto ${data.name}`);
        navigate("/");
    };

    return (
        <aside className="text-center p-5" style={{ background: '#11194c' }}>
        <div>
            <Link to='/perfil' style={{ textDecoration: 'none' }}>
                <div style={{ color: 'white', paddingBottom: '10vh' }}>
                    <img src="./logo-white.png" alt="logo-white" style={{ width: '30px' }}/>
                    <h6>KANRI</h6>
                    <hr />
                    <h6>Bienvenido</h6> 
                    {data.name}
                </div>
            </Link>
            <Link to="/perfil" className="text-white text-decoration-none" >
            <h6 className="mb-3">Mis datos</h6>
            </Link>
            <Link to="/inventario" className="text-white text-decoration-none">
            <h6 className="mb-3">Inventario</h6>
            </Link>
            <Link to="/iplist" className="text-white text-decoration-none">
            <h6 className="mb-5">Listado de IPs</h6>
            </Link>
            <div>
            {/* <Button variant="danger" onClick={logout}> */}
            <Button variant="outline-light" style={{ marginTop: '30vh' }} onClick={logout}>
                Cerrar Sesión
            </Button>
            </div>
        </div>
        </aside>
  );
}
