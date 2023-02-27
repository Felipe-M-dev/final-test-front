import { useContext, useState } from "react";
import Ip from "./Ip";
import ContextOrigin from "../Context";
const { Context } = ContextOrigin;

export default function Ips() {
    const { servers } = useContext(Context);
    const [name, setName] = useState("");

    const serversFiltradas = servers.filter((p) =>
        p.ip.toLowerCase().includes(name.toLowerCase())
    );

    return (
        <div className="p-5" style={{ width: '90vh', height: '82vh', textAlign: 'center'}}>
            <div className="d-flex align-items-center px-2 mb-3">
                Nombre:
                <input
                type="text"
                className="ms-2 form-control"
                onChange={({ target }) => setName(target.value)}
                value={name}
                placeholder="Buscar por nombre o IP"
                />
            </div>

            <div className="servers">
                {serversFiltradas.map((p, i) => {
                    return <Ip server={p} key={i} />;      
                })}
            </div>
        </div>
    );
}