import React, {useState} from 'react'
import logo from '../../assets/elephant.png'
import './styles.css'
import {Col, FormGroup, Label, Input, Button, Form} from 'reactstrap'

function Login(){

    const [email, setEmail] = useState('') 
    const [password, setPassword] = useState('')

    return(
        <div className="login-page container-fluid align-items-center justify-content-center">
            <Form className="login-div bg-white row shadow offset-4">
                <Col md={12} className="login-div-1">
                    <img src={logo} alt="logo" className=""/>
                    <h2 className="mt-5">E L E P H A N T</h2>
                </Col>
                <FormGroup className="col-12 justify-content-center">
                    <Input className="offset-2 col-8" type="email" name="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}></Input>
                </FormGroup> 
                <FormGroup className="col-12 justify-content-center">
                    <Input className="offset-2 col-8" type="password" name="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}></Input>
                </FormGroup>   
                <FormGroup className="col-12 justify-content-center">
                    <Button className="offset-2 col-8" type="submit">LOGIN</Button>
                </FormGroup>
            </Form>
        </div>
    )
}

export default Login