import React, { useState } from 'react'
import Header from  '../../templates/header'
import TCard from '../../templates/card'
import {DATA} from '../../JSON/data'

function Start (){


    function renderData(DATA){
        return(    
            DATA.map((pers) => {
                return(
                    <TCard key={pers.id} id={pers.id} name={pers.name} cea={pers.cea} cpa20={pers.cpa20} cpa10={pers.cpa10} cga={pers.cga} cnpi={pers.cnpi} 
                            presentation={pers.about} acoes={true} training={pers.training} consultory={pers.consultory} percent={pers.percent} course={pers.course}>
                    </TCard>
                )
            } )
        )
    }


    return(
        <div>
            <Header></Header>
            <div container>
                <div className="row">4
                    <div className="col-4 row"></div>
                    <div className="col-8 row">
                        {renderData(DATA)}
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Start