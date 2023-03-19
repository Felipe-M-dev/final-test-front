import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import jwtDecode from 'jwt-decode';

export default function AsidePerfil() {

    const token = localStorage.getItem('token');
    const user = jwtDecode(token);

    const navigate = useNavigate();

    const logout = () => {
        alert(`Sesión cerrada con éxito, hasta pronto ${user.email}`);
        navigate("/");
    };

    return (
        <aside className="text-center p-5" style={{ background: '#11194c' }}>
        <div>
            <Link to='/perfil' style={{ textDecoration: 'none' }}>
                <div style={{ color: 'white', paddingBottom: '10vh' }}>
                    <img src="https://i.ibb.co/hfNScjt/logo-white.png" alt="logo-white" style={{ width: '30px' }}/>
                    <h6>KANRI</h6>
                    <hr />
                    <h6>Bienvenido</h6> 
                    {user.email}
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
