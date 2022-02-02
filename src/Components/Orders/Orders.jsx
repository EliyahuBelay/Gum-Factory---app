import { useContext } from 'react';
import { MyContex } from '../../MyContex/AgentContex';


const Orders = () => {
    const { agents, setAgent } = useContext(MyContex);

    function UpdateAllState(){
        agents.numOrders = agents.numOrders+1;
        setAgent({...agents});
        alert(`${agents.mail} ${agents.numOrders}`);
    }

    return (
        <div>
            <p>number orders - {agents.numOrders}</p>
            <button onClick={UpdateAllState}>Go</button>
            <p>this is Orders page</p>
        </div>
    )
}
export default Orders;