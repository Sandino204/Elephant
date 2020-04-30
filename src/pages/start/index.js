import React, { useState } from 'react'
import Header from  '../../templates/header'
import TCard from '../../templates/card'

function Start (){



    return(
        <div>
            <Header></Header>
            <div container>
                <div className="row">4
                    <div className="col-4 row"></div>
                    <div className="col-8 row">
                        <TCard name="Jeorge Abc" cea={true} cpa20={true} cpa10={true} 
                            presentation="asjdiaudncunva a0sijdoinvoscnd ionaiosncio j 
                            iacnoinoinadvionnvapinco iadmiom
                            ajsnocinasoianinoainscoinas" acoes={true} training="sim" consultory="sim" time="ano" percent="20%" course="não">
                        </TCard>
                        <TCard name="Jeorge Abc" cea={true} cpa20={true} cpa10={true} 
                            presentation="asjdiaudncunva a0sijdoinvoscnd ionaiosncio j 
                            iacnoinoinadvionnvapinco iadmiom
                            ajsnocinasoianinoainscoinas" acoes={true} training="sim" consultory="sim" time="ano" percent="20%" course="não">
                        </TCard>
                        <TCard name="Jeorge Abc" cea={true} cpa20={true} cpa10={true} 
                            presentation="asjdiaudncunva a0sijdoinvoscnd ionaiosncio j 
                            iacnoinoinadvionnvapinco iadmiom
                            ajsnocinasoianinoainscoinas" acoes={true} training="sim" consultory="sim" time="ano" percent="20%" course="não">
                        </TCard>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Start