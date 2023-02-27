import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ImUser } from 'react-icons/im';

import { useContext, useState } from "react";

import ContextOrigin from "../Context";
const { Context } = ContextOrigin;

export default function Registrarse() {
  const { setUsers, users, session, data } = useContext(Context);

  const [user, setUser] = useState({});

  const updateUser = () => {
    const { user_id } = session;
    const userFoundIndex = users.findIndex((u) => u.user_id === user_id);
    users[userFoundIndex] = user;
    setUsers([...users]);
    alert("Datos actualizados con éxito");
  };

  return (
    <div className="pt-5" style={{ width: '90vh', height: '82vh', textAlign: 'center' }}>
      <Form className="w-50 border p-3 mx-5 rounded text-white " style={{ backgroundColor: '#324adc' }}>
        <div>
          <span>Perfil</span>
          <ImUser style={{paddingBottom: '4px'}}/>
          <hr />
        </div>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Correo</Form.Label>
          <Form.Control
            disabled
            value={data.email}
            onChange={({ target }) =>
              setUser({ ...user, ["email"]: target.value })
            }
            type="email"
            placeholder="name@example.com"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            value={data.name}
            onChange={({ target }) =>
              setUser({ ...user, ["Nombre"]: target.value })
            }
            type="text"
            placeholder="Nombre"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Rol</Form.Label>
          <Form.Control
            value={data.rol}
            onChange={({ target }) =>
              setUser({ ...user, ["rol"]: target.value })
            }
            type="text"
            placeholder="rol"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Empresa</Form.Label>
          <Form.Control
            value={data.company}
            onChange={({ target }) =>
              setUser({ ...user, ["company"]: target.value })
            }
            type="text"
            placeholder="company"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={data.password}
            onChange={({ target }) =>
              setUser({ ...user, ["password"]: target.value })
            }
            type="password"
            placeholder="Contraseña"
          />
        </Form.Group>

        <Button variant="outline-light me-3" onClick={updateUser} style={{ borderColor: 'white', fontSize: '10px'}}>
          Actualizar
        </Button>
      </Form>
    </div>
  );
}
