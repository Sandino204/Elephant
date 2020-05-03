import React, { useState } from 'react'
import Header from '../../templates/header'
import {Nav, Row, Form, FormGroup, Input, InputGroup , Label, Button} from 'reactstrap'
import './styles.css'
import {Link} from 'react-router-dom'
import Elep from '../../assets/elephant.png'

function Register(){

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [type, setType] = useState('Independente')


    return(
        <div>
            <div className="container-fluid p-0">
                <Nav className="m-0 row shadow container-fluid">
                    <Link to="/" className="col-4  ml-2 p-0 text-dark"> < img className="logo" src={Elep} alt="Logo"/> <h1 className="mb-0 mt-1" style={{fontSize: "1.7em"}}> <span className="text-muted">|</span> E L E P H A N T</h1></Link>
                </Nav>
                <Form className="div-register shadow">
                    <h2 className="col-12 text-center mt-5 mb-5">SEJA BEM VINDO</h2>
                    <InputGroup className="div-row mb-5 offset-2 col-8">
                        <Button type="button" className="bg-secondary text-light mr-2" onClick={() => setType('Independente')}>Independente</Button>
                        <Button type="button" className="bg-secondary text-light mr-2" onClick={() => setType('Consultor')}>Consultor</Button>
                        <Button className="bg-secondary text-light mr-2" onClick={() => setType('Acessor')}>Acessor</Button>
                    </InputGroup>
                    
                    <FormGroup className="col-12 justify-content-center">
                        <Input className="offset-2 col-8" type="text" name="name" placeholder="Nome Completo" value={name} onChange={e => setName(e.target.value)}></Input>
                    </FormGroup>

                    <FormGroup className="col-12 justify-content-center">
                        <Input className="offset-2 col-8" type="email" name="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}></Input>
                    </FormGroup> 
                    <FormGroup className="col-12 justify-content-center">
                        <Input className="offset-2 col-8" type="password" name="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}></Input>
                    </FormGroup>   
                    <FormGroup className="col-12 justify-content-center">
                        <Button className="offset-2 col-8" type="submit">Registrar-se</Button>
                    </FormGroup>
                </Form>
                <div className="background"></div>
            </div>
        </div>
    )
}

export default Register