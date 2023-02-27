import { createContext, useState } from "react";

const Context = createContext(null);

function Provider({ children }) {
    const [users, setUsers] = useState([]);
    const [session, setSession] = useState(null);

    const [servers, setServers] = useState([
        {
            hostname: "srv-mongodb01-prd",
            description: "MongoDB",
            ip: "192.168.1.67",
            status: "ACTIVA",
        },
        {
            hostname: "srv-mongodb01-prd",
            description: "PSQL",
            ip: "192.168.1.68",
            status: "INACTIVA",
        },
        {
            hostname: "srv-mariadb06-prd",
            description: "MariaDB",
            ip: "192.168.1.69",
            status: "ACTIVA",
        },
        {
            hostname: "srv-k8s07-prd",
            description: "Cluster k8s",
            ip: "192.168.1.70",
            status: "ACTIVA",
        },
    ],);

    const [data, setData] =useState(
        {
            name: "Felipe Martinez",
            email: "fmartinez.redes@gmail.com",
            rol: "DevOps",
            company: "EGT Ltda",
            password: "123456",
        },
    )

    const state = {
        users,
        setUsers,
        session,
        setSession,
        servers,
        setServers,
        data,
        setData,
    };


    return <Context.Provider value={state}>{children}</Context.Provider>;
}

export default { Provider, Context };