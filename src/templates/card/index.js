import React, {useState} from 'react'
import {Card, Badge, Button, Modal, ModalHeader, ModalBody} from 'reactstrap'
import tumb from '../../assets/empresario.jpeg'
import Cea from '../../assets/AnbimaCEA.png'
import Cga from '../../assets/AnbimaCGA.png'
import Cpa20 from "../../assets/AnbimaCPA-20.png"
import Cpa10 from '../../assets/AnbimaCPA-10.png'
import Cnpi from '../../assets/AnbimaCNPI-T.PNG'
import {Link} from 'react-router-dom'
import logo from  '../../assets/elephant.png'

import './styles.css'

function TCard ({id, name, cea, cga, cpa10, cpa20, cnpi, presentation, acoes, percent, consultory, training, course, link}){

    const [modal, setModal] = useState(false)

    const [prize, setPrize] = useState('50')

    const toggle = () => setModal(!modal);

    function renderCea(cea){
        if (cea !== null && cea !== undefined){
            return(
                <img src={Cea} alt="Anbima Cea" className="cert" style={{width: "50px", height: "50px"}}/>
            )
        }else{
            return( 
                <></>
            )
        }
    }

    function renderCga(cga){
        if (cga !== null && cga !== undefined){
            return(
                <img src={Cga} alt="Anbima Cga" className="cert" style={{width: "50px", height: "50px"}}/>
            )
        }else{
            return( 
                <></>
            )
        }
    }

    function renderCpa20(cpa20){
        if(cpa20 !== null && cpa20 !== undefined){
            return(
                <img src={Cpa20} alt="Anbima CPA - 20" className="cert" style={{width: "50px", height: "50px"}}/>
            )
        }else{
            return( 
                <></>
            )
        }
    }

    function renderCpa10(cpa10){
        if(cpa10  !== null && cpa10 !== undefined){
            return(
                <img src={Cpa10} alt="Anbima CPA - 10" className="cert" style={{width: "50px", height: "50px"}}/>
            )
        }else{
            return( 
                <></>
            )
        }
    }

    function renderCnpi(cnpi){
        if(cnpi  !== null && cnpi !== undefined){
            return(
                <img src={Cnpi} alt="Anbima CNPI" className="cert" style={{width: "50px", height: "50px"}}/>
            )
        }else{
            return( 
                <></>
            )
        }
    }


    function renderAções(acoes){
            if(acoes === true){
                return(
                    <h3><Badge color="secondary pil" pill>Ações</Badge></h3>
                )
            }else{
                return(<></>)
            }
    }

    const curso = () => {
        setPrize('course')
    }
    const treinamento = () => {
        setPrize('training')
    }
    const rs50 = () => {
        setPrize('50')
    }
    const  consultoria = () => {
        setPrize('consultory')
    }

    

    return(
        <>
            <Card key={id} className="col-12 mt-5 rounded p-0 row card shadow">
                <div className="ml-5 col-8 p-0 row mt-5 ml-3">
                    <img className=" col-4" src={tumb} alt={name} className="rounded-circle tumb" style={{width: "100px", height: "100px"}}/>
                    <div className="col-8">
                        <Link to={`/profile/${id}`} ><h3 className="font-weight-bold text-dark">{name}</h3></Link>
                        <h4 className="text-muted">Certificações:</h4>
                        {renderCea(cea)}{renderCga(cga)}{renderCpa10(cpa10)}{renderCpa20(cpa20)}{renderCnpi(cnpi)}
                    </div>
                    <div className="col-12 mt-4">
                        <p>{presentation}</p>
                    </div>
                    <div className="col-12 mt-2 mb-2">
                        {renderAções(acoes)}
                    </div>
                </div>
                <div className="col-4 row mt-5">
                    <h3 className="col-12">Rendimento de <span className="text-dark font-weight-bold">{percent}</span> ao ano</h3><hr></hr>
                    <p className="col-12">Consultoria em aberto: {consultory}</p>
                    <p className="col-12">Treinamento: {training}</p>
                    <p className="col-12">Possui Curso: {course}</p>
                    <Button color="secondary" onClick={toggle} className="col-10 row text-decoration-none">Indicação</Button>
                </div>
            </Card>
            <Modal isOpen={modal} toggle={toggle} className="container md modal-lg" >
                <div className="row header-modal justify-content-center">
                    <img src={logo} alt="logo" className=""/>
                    <h4 className="mt-4">E L E P H A N T</h4>
                </div>
                <ModalBody className="row">
                    <div className="col-8 row div-modal-1">
                        <p className="col-12"><span className="bg-secondary mx-2">1</span>Escolha o tipo de recompensa que você deseja</p>
                        <p className="col-12"><span className="bg-secondary mx-2">2</span>copie o link abaixo</p>
                        <p className="col-12"><span className="bg-secondary mx-2">3</span>envie para seus amigos</p>
                    </div>
                    <div className="col-4 row">
                        <Button className="col-12 bg-secondary text-light my-2" onClick={curso}>Curso</Button>
                        <p></p>
                        <Button className="col-12 bg-secondary text-light my-2" onClick={treinamento}>Treinamento</Button>
                        
                        <Button className="col-12 bg-secondary text-light my-2" onClick={consultoria}>Consultoria</Button>
                        
                        <Button className="col-12 bg-secondary text-light my-2" onClick={rs50}>50R$</Button>
                        
                    </div>
                    <div className="col-12 justify-content-center row bg-light mx-0 my-5">
                        <p className="col-12 text-center mt-2">https:elephant.com.br/profile/{`${id}`}</p>
                    </div>
                </ModalBody>
            </Modal>    
        </>
    )
}

export default TCard