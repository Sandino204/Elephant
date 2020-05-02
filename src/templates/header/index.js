import React, { useState } from 'react'
import {Nav, NavLink, Input, Button} from 'reactstrap'
import {Link} from 'react-router-dom'
import Elep from '../../assets/elephant.png'
import './styles.css'
import {Modal, ModalHeader, ModalBody, Form, FormGroup, Label} from 'reactstrap'

function Header (){

    const [search, setSearch] = useState('')
    const [login, setLogin] = useState(false)
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const toggle = () => {
        setLogin(!login)
    }

    return(
        <div className="container-fluid shadow">
            <Nav className="m-0 row">
                <Link to="/" className="col-4  ml-2 p-0 text-dark"> < img className="logo" src={Elep} alt="Logo"/> <h1 className="mb-0" style={{fontSize: "2em"}}> <span className="text-muted">|</span>  Elephant </h1></Link>
                <Input placeholder="Search Linkedin" onChange={e => setSearch(e.target.value)} value={search} className="rounded space col-4"/>
                <button className="offset-2 button text-dark bg-white" onClick={toggle}>Sing Up</button>
            </Nav>
            <Modal isOpen={login}>
                <ModalHeader toggle={toggle} className="justify-content-center bg-primary"><h3 className="text-center">Login</h3></ModalHeader>
                <ModalBody>
                    <Form className="container" >
                        <FormGroup className="row">
                            <Label className="col-4" >Nome: </Label>
                            <Input className="col-8" type="text" onChange={e => setName(e.target.value)} value={name}></Input>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-4" >Password: </Label>
                            <Input className="col-8" type="password" onChange={e => setPassword(e.target.value)} value={password}></Input>
                        </FormGroup>
                        <Button type="submit" className="mr-3" color="primary">Entrar</Button>
                        <Button onClick={toggle} color="danger">Cancelar</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default Header