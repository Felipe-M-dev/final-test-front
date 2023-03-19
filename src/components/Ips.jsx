import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { Container, Form, Table, Col, Row } from "react-bootstrap";

export default function Ips() {

    const url = 'http://localhost'
    const port = '3001'
    const navigate = useNavigate()

    const [servers, setServers] = useState([])
    const [search, setSearch] = useState("")
  
    const loadServers = async () => {
        const res = await fetch(`${url}:${port}/servers`)
        const data = await res.json()
        setServers(data)
    }

    const searcher = (e) => {
        setSearch(e.target.value)
      }
    
    const results = !search ? servers : servers.filter( (data) => data.ip.toLowerCase().includes(search.toLocaleLowerCase()))

    useEffect(() => {
        loadServers()
    }, [])

    return (
        <Container>
            <h3 style={{
                padding: '15px'
            }}>Estado de IPs</h3>
            <hr />
            <Container>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: '10px',
                    }}>
                        <div>
                            <Form.Control
                                id="outlined-basic" 
                                placeholder="Buscar por IP" 
                                variant="outlined" 
                                value={ search }
                                onChange={ searcher }
                                type='text'
                                style={{
                                    borderRadius: '.2rem'
                                }}
                            />
                        </div>
                    </div>
                </Container>

                <Container style={{
                    display: 'flex', 
                    flexDirection:'row', 
                    justifyContent: 'space-between',
                }}>
                    <Row style={{
                        marginLeft: '10px'
                    }}>
                        IP
                    </Row>
                    <Row style={{
                        marginRight: '10px'
                    }}>
                        Estado
                    </Row>
                </Container>

                <div className='serverListPage'>
                    {
                        results.map(server => (
                            <Table striped key={server.id}>
                                <tbody>
                                <tr>
                                    <td style={{textAlign: 'start' }}>{server.ip}</td>
                                    <td style={{textAlign: 'end' }}>{server.state}</td>
                                </tr>
                                </tbody>
                            </Table>
                        ))
                    }
                </div>

        </Container>
    );
}