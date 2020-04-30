import React, { useState } from 'react'
import {Nav, NavLink, Input, Button} from 'reactstrap'
import Elep from '../../assets/elephant.png'
import './styles.css'

function Header (){

    const [search, setSearch] = useState('')


    return(
        <div className="container-fluid shadow">
            <Nav className="m-0 row">
                <NavLink className="col-4  ml-2 p-0"> < img className="logo" src={Elep} alt="Logo"/> <h1 className="mb-0" style={{fontSize: "2em"}}> <span className="text-muted">|</span>  Elephant </h1></NavLink>
                <Input placeholder="Search Linkedin" onChange={e => setSearch(e.target.value)} value={search} className="rounded space col-4"/>
                <button className="offset-2 button text-dark bg-white">Sing Up</button>
            </Nav>
        </div>
    )
}

export default Header