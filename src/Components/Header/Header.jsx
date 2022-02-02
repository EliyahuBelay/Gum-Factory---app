import {MyContex} from '../../MyContex/AgentContex';
import React,{ useContext} from 'react';
const Header = () => {
    const agentHeader = useContext(MyContex);
    console.log(agentHeader);
    return (
        <div className="header">
            <p>{agentHeader.agents.nameAgent}</p>
        </div>
    )
}
export default Header;
//using useContex to get the value that i provide in the contex and display it. 