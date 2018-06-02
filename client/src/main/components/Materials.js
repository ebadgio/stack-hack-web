import React from 'react';
import MaterialItem from "../elements/MaterialItem";
import Button from "../modules/Button";

import {history} from "../../../app";


const Materials = ({}) => {
    return (<div className="flex-col frame" style={{paddingTop: '60px'}}>
        <Button className="trans-grey soft-edge"
                text={<span><i className="fas fa-chevron-left mr-10"/>Back To Home</span>}
                clickFunc={() => history.replace('/')}
                style={{position: 'absolute',
                    left: '20px',
                    height: '60px',
                    width: '200px',
                    top: '20px'}} />
        <div style={{textAlign: 'center'}}>
            <h1>
                <u>Stack Hack Materials</u>
            </h1>
        </div>
        <div className="flex-row" style={{maxWidth: '800px'}}>
            <MaterialItem session={"Session 1"}
                          videos={["https://youtu.be/dnz_wsA3Vls", "https://youtu.be/KBgAivPcuj0"]}
                          exercises={["http://rice.codeskulptor.org/#user44_jQxx6GjlxU_2.py"]}/>
            {/*<MaterialItem session={"Session 1"}*/}
                          {/*videos={["https://youtu.be/dnz_wsA3Vls", "https://youtu.be/KBgAivPcuj0"]}*/}
                          {/*exercises={["http://rice.codeskulptor.org/#user44_jQxx6GjlxU_2.py"]}/>*/}
            {/*<MaterialItem session={"Session 1"}*/}
                          {/*videos={["https://youtu.be/dnz_wsA3Vls", "https://youtu.be/KBgAivPcuj0"]}*/}
                          {/*exercises={["http://rice.codeskulptor.org/#user44_jQxx6GjlxU_2.py"]}/>*/}
            {/*<MaterialItem session={"Session 1"}*/}
                          {/*videos={["https://youtu.be/dnz_wsA3Vls", "https://youtu.be/KBgAivPcuj0"]}*/}
                          {/*exercises={["http://rice.codeskulptor.org/#user44_jQxx6GjlxU_2.py"]}/>*/}
            {/*<MaterialItem session={"Session 1"}*/}
                          {/*videos={["https://youtu.be/dnz_wsA3Vls", "https://youtu.be/KBgAivPcuj0"]}*/}
                          {/*exercises={["http://rice.codeskulptor.org/#user44_jQxx6GjlxU_2.py"]}/>*/}
        </div>

    </div>);
};

export default Materials;