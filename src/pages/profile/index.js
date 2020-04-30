import React from 'react'
import imgF from   '../../assets/mountains.jpeg'
import Header from '../../templates/header'
import tumb from  '../../assets/empresario.jpeg'

import Cea from '../../assets/AnbimaCEA.png'
import Cga from '../../assets/AnbimaCGA.png'
import Cpa20 from "../../assets/AnbimaCPA-20.png"
import Cpa10 from '../../assets/AnbimaCPA-10.png'
import Cnpi from '../../assets/AnbimaCNPI-T.PNG'

import './styles.css'
import {Row, Card, Col} from 'reactstrap'

// {name, imgF, tumb, local, facebook, instagram, linkedin, twitter, work,
//     about, respRate, orderComp, onTime, rating,
//     cpa10, cpa20, cea, cga}

function Profile (){

    const local = 'Saint-Petersburg, Russia'
    const facebook = 'kevinsmith55'
    const linkedin = 'kevin_smith'
    const instagram = 'kevinSmith'
    const twitter = 'kevin_smith' 

    const cea = '01/01/2020';
    const cga = '01/01/2020';
    const cpa10 = '01/01/2020';
    const cpa20 = '01/01/2020'; 
    const cnpi = '01/01/2020'; 

    const perc = 98

    const conteudo = 'lalallal'

    function renderLocal(local){
        if(local !== null){
            return(
                <p className="nomeb text-muted "><i className="fa fa-map-marker "></i> {local}</p>
            )
        }else{
            return(<></>)
        }
    }

    function renderFacebook(facebook){
        if(facebook !== null){
            return(
                <p className="nomeb ml-3 text-muted "><i className="fa fa-facebook-f"></i> {facebook}</p>
            )
        }else{
            return(<></>)
        }
    }

    function renderInstagram(instagram){
        if(instagram !== null){
            return(
                <p className="nomeb ml-3 text-muted "><i className="fa fa-instagram"></i> {instagram}</p>
            )
        }else{
            return(<></>)
        }
    }

    function renderLinkedin(linkedin){
        if(linkedin !== null){
            return(
                <p className="nomeb ml-3 text-muted "><i className="fa fa-linkedin"></i> {linkedin}</p>
            )
        }else{
            return(<></>)
        }
    }
    
    function renderTwitter(twitter){
        if(twitter !== null){
            return(
                <p className="nomeb ml-3 text-muted "><i className="fa fa-twitter"></i> {twitter}</p>
            )
        }else{
            return(<></>)
        }
    }

    function renderCea(cea){
        if (cea !== null){
            return(
                <div className="col-2">
                    <img src={Cea} alt="Anbima Cea" className="cert" style={{width: "100px", height: "100px"}}/>
                    <p className="pc">Local: ANBIMA</p>
                    <p className="pc">data de emissão: {cea}</p>
                </div>
            )
        }else{
            return( 
                <></>
            )
        }
    }

    function renderCga(cga){
        if (cga !== null ){
            return(
                <div className="col-2">
                    <img src={Cga} alt="Anbima Cga" className="cert" style={{width: "100px", height: "100px"}}/>
                    <p className="pc">Local: ANBIMA</p>
                    <p className="pc">data de emissão: {cga}</p>
                </div>
            )
        }else{
            return( 
                <></>
            )
        }
    }

    function renderCpa20(cpa20){
        if(cpa20 !== null){
            return(
                <div className="col-2">
                    <img src={Cpa20} alt="Anbima CPA - 20" className="cert" style={{width: "100px", height: "100px"}}/>
                    <p className="pc">Local: ANBIMA</p>
                    <p className="pc">data de emissão: {cpa20}</p>
                </div>
            )
        }else{
            return( 
                <></>
            )
        }
    }

    function renderCpa10(cpa10){
        if(cpa10  !== null){
            return(
                <div className="col-2">
                    <img src={Cpa10} alt="Anbima CPA - 10" className="cert" style={{width: "100px", height: "100px"}}/>
                    <p className="pc">Local: ANBIMA</p>
                    <p className="pc">data de emissão: {cpa10}</p>
                </div>
            )
        }else{
            return( 
                <></>
            )
        }
    }

    function renderCnpi(cnpi){
        if(cnpi  !== true){
            return(
                <div className="col-2">
                    <img src={Cnpi} alt="Apimec CNPI" className="cert" style={{width: "100px", height: "100px"}}/>
                    <p className="pc">Local: apimec</p>
                    <p className="pc">data de emissão: {cnpi}</p>
                </div>
            )
        }else{
            return( 
                <></>
            )
        }
    }


    const ph = {
        height: `${perc}%`
    }

    return(
        <div>
            <Header></Header>
            <div className="container-fluid p-0">
                <img src={tumb} alt="tumb" style={{ height: "200px", width: "200px"}} className="img-thumbnail rounded-circle thumb"/>
                <div className="row shadow">
                    <img className="col-12" src={imgF} alt="img" style={{ height: "250px"}}/>
                    <h2 className="col-12 nome">Kevin Smith  <i class="fa fa-check-circle"></i></h2>
                    <p className="col-12 nome nomep text-muted">Advisor and Consultant at Stripe Inc</p>
                    <div className="nome col-12 mb-4">{renderLocal(local)}{renderFacebook(facebook)}{renderInstagram(instagram)}{renderTwitter(twitter)}{renderLinkedin(linkedin)}</div>
                </div>
                <div className="container">
                    <Row className="m-5">
                        <Col md="12" className="row">
                            <Card className="col-12 mt-1 about shadow">
                                <h5 className="mt-3 ml-3 text-dark ab">Sobre: </h5><hr></hr>
                                <p>ajfndviuebfaidvifnsdvfuibiafdvnfafuidsvfubvofuadbviubfsiafndisvufnajfnduviun asdjoifnsio dcuioanwdivj 9aeionspdvfousnfaiou dvpuavud zuipav pupauik
                                    anaisunduioan aoi aosnioan joancsj aj osandio ac 
                                    ascj ajks cjkv aj sjk akj as scajkn dhvag8os7odhibiftqoa8e78i
                                </p>
                            </Card>
                        </Col>
                        <Col md="12" className="row mt-5">
                            <Card className="col-12 mt-1 about shadow">
                                <h5 className="mt-3 ml-3 text-dark ab">Certificações: </h5><hr></hr>
                                <div className="row">{renderCea(cea)}{renderCga(cga)}{renderCpa10(cpa10)}{renderCpa20(cpa20)}{renderCnpi(cnpi)}</div>
                            </Card>
                        </Col>
                        <Col md="12" className="row mt-5">
                            <Card className="col-12 mt-1 about shadow">
                                <h5 className="mt-3 ml-3 text-dark ab">Publicações: </h5><hr></hr>
                                <div>{conteudo}</div>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Profile