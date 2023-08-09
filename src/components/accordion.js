import React from 'react';
import { Collapse } from 'antd';
import './style.css';

const { Panel } = Collapse;

const Accordions = () => {
    return (
        <div className="container">
            <div className="accordions-section">
                <Collapse className="members-accordion">
                    <Panel header="Members" key="1">
                        <p>First Member<br />username: hasankarahaliloglu<br />hasankarahaliloglu@gmail.com</p>
                        <p>Second Member<br />username: enesbugragurbuz<br />enesbugragurbuz@gmail.com</p>
                        <p>Third Member<br />username: zehragokce<br />zehragokce@gmail.com</p>
                        <p>Fourth Member<br />username: muratyanasoglu<br />muratyanasoglu@gmail.com</p>
                    </Panel>
                </Collapse>
                <Collapse className="admins-accordion">
                    <Panel header="Admins" key="1">
                        <p>First Admin<br />username: firatdikmen<br />firatdikmen@gmail.com</p>
                        <p>Second Admin<br />username: emincaner<br />emincaner@gmail.com</p>
                    </Panel>
                </Collapse>
            </div>
        </div>
    );
};

export default Accordions;
