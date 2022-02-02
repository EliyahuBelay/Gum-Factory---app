import { MyContex } from '../../MyContex/AgentContex';
import React, { useEffect, useContext } from 'react';


const Products = () => {
    const agentProducts = useContext(MyContex);
    useEffect(()=>{alert(`Welcome ${agentProducts.agents.nameAgent}`)},[])
    return (
        <div>
            <p>this is Products page</p>
        </div>
    )
}
export default Products;
//using useContex to get the value that i provide in the contex and using 
//uesEffect to controll the time that i display the alert  
