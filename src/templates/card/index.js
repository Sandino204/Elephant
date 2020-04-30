import React from 'react'
import {Card, Badge, Button} from 'reactstrap'
import tumb from '../../assets/empresario.jpeg'
import Cea from '../../assets/AnbimaCEA.png'
import Cga from '../../assets/AnbimaCGA.png'
import Cpa20 from "../../assets/AnbimaCPA-20.png"
import Cpa10 from '../../assets/AnbimaCPA-10.png'
import Cnpi from '../../assets/AnbimaCNPI-T.PNG'

import './styles.css'

function TCard ({name, cea, cga, cpa10, cpa20, cnpi, presentation, acoes, percent, consultory, training, course}){


    function renderCea(cea){
        if (cea === true){
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
        if (cga === true){
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
        if(cpa20 === true){
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
        if(cpa10  === true){
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
        if(cnpi  === true){
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

    return(
        <Card className="col-12 mt-5 rounded p-0 row card shadow">
            <div className="ml-5 col-8 p-0 row mt-5 ml-3">
                <img className=" col-4" src={tumb} alt={name} className="rounded-circle tumb" style={{width: "100px", height: "100px"}}/>
                <div className="col-8">
                    <h3 className="font-weight-bold">{name}</h3>
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
                <Button color="secondary" className="col-10">Contato</Button>
            </div>
        </Card>
    )
}

export default TCard