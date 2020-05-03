import React, { useState } from 'react'
import {Nav, NavLink, Input, Button} from 'reactstrap'
import {Link} from 'react-router-dom'
import Elep from '../../assets/elephant.png'
import './styles.css'
import {Modal, ModalHeader, ModalBody, Form, FormGroup, Label} from 'reactstrap'

function Header (){

    const [search, setSearch] = useState('')


    return(
        <div className="container-fluid shadow">
            <Nav className="m-0 row">
                <Link to="/search" className="col-4  ml-2 p-0 text-dark"> < img className="logo" src={Elep} alt="Logo"/> <h1 className="mb-0 mt-1" style={{fontSize: "1.7em"}}> <span className="text-muted">|</span> E L E P H A N T</h1></Link>
                <Input placeholder="Search Linkedin" onChange={e => setSearch(e.target.value)} value={search} className="rounded space col-4"/>
                <div className="col-2 ml-auto align-self-center row">
                    <Link to="/myProfile/0" className="col-12 row"><h2 className="col-12 text-dark " style={{fontSize: "1.7em"}}>My Profile</h2></Link>
                </div>
            </Nav>
        </div>
    )
}

export default Header