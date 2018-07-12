import React from 'react';
import MaterialItem from "../elements/MaterialItem";
import Button from "../modules/Button";

import {history} from "../../../app";


const Materials = ({}) => {
    return (<div className="flex-col frame" style={{paddingTop: '20px'}}>
        <Button className="trans-grey soft-edge"
                text={<span><i className="fas fa-chevron-left mr-10"/>Back To Home</span>}
                clickFunc={() => history.replace('/')}
                style={{
                    height: '60px',
                    width: '200px', marginRight: 'auto', marginLeft: '10px'}} />
        <div style={{textAlign: 'center'}} className="p-10">
            <h1>
                <u>Stack Hack Materials</u>
            </h1>
        </div>
        <div className="flex-row" style={{maxWidth: '800px'}}>
            <MaterialItem session={"Session 1"}
                          videos={["https://youtu.be/dnz_wsA3Vls", "https://youtu.be/KBgAivPcuj0"]}
                          exercises={["http://rice.codeskulptor.org/#user44_jQxx6GjlxU_2.py"]}/>
            <MaterialItem session={"Session 2"}
                          videos={["https://youtu.be/WzMzT-KQkMU"]}
                          exercises={["http://rice.codeskulptor.org/#user44_7XnpXJvnNc_2.py"]}/>
            <MaterialItem session={"Session 3"}
                          videos={["https://youtu.be/I5n6ooroSYg"]}
                          exercises={["http://rice.codeskulptor.org/#user44_nNTtvwjjMR_1.py"]}/>
            <MaterialItem session={"Session 4"}
                          videos={["https://youtu.be/HUxNYS-ND3A", "https://youtu.be/z_g9G4XGpxw"]}
                          exercises={["http://rice.codeskulptor.org/#user44_O4mYj0JPGF_0.py"]}/>
            <MaterialItem session={"Session 5"}
                          videos={["https://youtu.be/dZjLz3SWHA4"]}
                          exercises={["http://rice.codeskulptor.org/#user44_WtsxcURi2e_1.py"]}/>
        </div>

    </div>);
};

export default Materials;
