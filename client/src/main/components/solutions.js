import React from 'react';
import MaterialItem from "../elements/MaterialItem";
import Button from "../modules/Button";

import {history} from "../../../app";


const Solutions = ({}) => {
    return (<div className="flex-col frame" style={{paddingTop: '20px'}}>
        <Button className="trans-grey soft-edge"
                text={<span><i className="fas fa-chevron-left mr-10"/>Back To Home</span>}
                clickFunc={() => history.replace('/')}
                style={{
                    height: '60px',
                    width: '200px', marginRight: 'auto', marginLeft: '10px'}} />
        <Button className="trans-grey soft-edge"
                text={<span><i className="fas fa-chevron-left mr-10"/>Go To Materials</span>}
                clickFunc={() => history.replace('/materials')}
                style={{
                    height: '60px',
                    width: '200px', marginRight: 'auto', marginTop: '20px', marginLeft: '10px'}} />
        <div style={{textAlign: 'center'}} className="p-10">
            <h1>
                <u>Stack Hack Solutions</u>
            </h1>
        </div>
        <div className="flex-row" style={{maxWidth: '1000px'}}>
            <MaterialItem session={"Session 1"}
                          solution={"http://rice.codeskulptor.org/#user44_Dcdfki5ZPH_3.py"}/>
            <MaterialItem session={"Session 2"}
                          solution={"http://rice.codeskulptor.org/#user44_GwFcGuH9vl_2.py"}/>
            <MaterialItem session={"Session 3"}
                          solution={"http://rice.codeskulptor.org/#user44_75nc18lcJ4_3.py"}/>
            <MaterialItem session={"Session 4"}
                          solution={"http://rice.codeskulptor.org/#user44_fX5QGz1Dbe_4.py"}/>
            <MaterialItem session={"Session 5"}
                          solution={"http://rice.codeskulptor.org/#user44_WtsxcURi2e_1.py"}/>
            <MaterialItem session={"Session 6"}
                          solution={"http://rice.codeskulptor.org/#user45_RzSQoBKzFW_2.py"}/>
        </div>

    </div>);
};

export default Solutions;
