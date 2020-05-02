import React, { useState } from 'react'
import Header from '../../templates/header'
import {Form, FormGroup, Input, Label, Button} from 'reactstrap'
import './styles.css'
import {Link} from 'react-router-dom'

function Register(){

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [about, setAbout] = useState('')
    const [dateCea, setDateCea] = useState(null)
    const [dateCga, setDateCga] = useState(null)
    const [dateCnpi, setDateCnpi] = useState(null)
    const [dateCpa10, setDateCpa10] = useState(null)
    const [dateCpa20, setDateCpa20] = useState(null)
    const [facebook, setFacebook] = useState(null)
    const [linkedin, setLinkedin] = useState(null)
    const [instagram, setInstagram] = useState(null)
    const [twitter, setTwitter] = useState(null)
    const [local, setLocal] = useState(null)

    return(
        <div>
            <Header></Header>
            <div className="div">
                <Form className="container m-5 justify-content-center shadow rounded"> 
                    <h2 className="text-danger text-center">Se não ouver alguns dos campos deixe vazio</h2>
                    <FormGroup className="row m-4">
                        <Label className="col-2 mt-2">Nome: </Label>
                        <Input type="text" value={name} onChange={e => setName(e.target.value)} name="name" className="col-8 mt-2" placeholder="Digite seu nome completo"></Input>
                    </FormGroup>
                    <FormGroup className="row m-4">
                        <Label className="col-2 mt-2">Password: </Label>
                        <Input type="password" value={password} onChange={e => setPassword(e.target.value)} name="password" className="col-8 mt-2" placeholder="Password"></Input>
                    </FormGroup>
                    <FormGroup className="row m-4">
                        <Label className="col-2 mt-2">Sobre:</Label>
                        <textarea value={about} onChange={e => setAbout(e.target.value)} name="about" className="col-8 mt-2" placeholder="Escreva algo sobre você"></textarea>
                    </FormGroup>
                    <FormGroup className="row m-4">
                        <Label className="col-2 mt-2">CEA: </Label>
                        <Input className="col-8 mt-2" type="date" value={dateCea} onChange={e => setDateCea(e.target.value)}></Input>
                    </FormGroup>
                    <FormGroup className="row m-4">
                        <Label className="col-2 mt-2">CGA: </Label>
                        <Input className="col-8 mt-2" type="date" value={dateCga} onChange={e => setDateCga(e.target.value)}></Input>
                    </FormGroup>
                    <FormGroup className="row m-4">
                        <Label className="col-2 mt-2">CNPI: </Label>
                        <Input className="col-8 mt-2" type="date" value={dateCnpi} onChange={e => setDateCnpi(e.target.value)}></Input>
                    </FormGroup>
                    <FormGroup className="row m-4">
                        <Label className="col-2 mt-2">CPA-10: </Label>
                        <Input className="col-8 mt-2" type="date" value={dateCpa10} onChange={e => setDateCpa10(e.target.value)}></Input>
                    </FormGroup>
                    <FormGroup className="row m-4">
                        <Label className="col-2 mt-2">CPA-20: </Label>
                        <Input className="col-8 mt-2" type="date" value={dateCpa20} onChange={e => setDateCpa20(e.target.value)}></Input>
                    </FormGroup>
                    <FormGroup className="row m-4">
                        <Label className="col-2 mt-2">Local de trabalho: </Label>
                        <Input className="col-8 mt-2" type="text" value={local} onChange={e => setLocal(e.target.value)}></Input>
                    </FormGroup>
                    
                    <FormGroup className="row m-4">
                        <Label className="col-2 mt-2">Facebook: </Label>
                        <Input className="col-8 mt-2" type="text" value={facebook} onChange={e => setFacebook(e.target.value)}></Input>
                    </FormGroup>
                    <FormGroup className="row m-4">
                        <Label className="col-2 mt-2">Linkedin: </Label>
                        <Input className="col-8 mt-2" type="text" value={linkedin} onChange={e => setLinkedin(e.target.value)}></Input>
                    </FormGroup>
                    <FormGroup className="row m-4">
                        <Label className="col-2 mt-2">Twitter: </Label>
                        <Input className="col-8 mt-2" type="text" value={twitter} onChange={e => setTwitter(e.target.value)}></Input>
                    </FormGroup>
                    <FormGroup className="row m-4">
                        <Label className="col-2 mt-2">Instagram: </Label>
                        <Input className="col-8 mt-2" type="text" value={instagram} onChange={e => setInstagram(e.target.value)}></Input>
                    </FormGroup>
                    <FormGroup className="row m-4 justify-content-end">
                        <Button className="bg-primary mr-2 mb-5" type="submit">Enviar</Button>
                        <Link to="/"><Button className="bg-secondary">Cancelar</Button></Link> 
                    </FormGroup>
                </Form>
            </div>
        </div>
    )
}

export default Register