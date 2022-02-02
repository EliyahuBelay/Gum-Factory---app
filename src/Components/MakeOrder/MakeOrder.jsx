import {MyContex} from '../../MyContex/AgentContex';
import { useContext } from 'react';


const MakeOrder = ()=>{
    const {agents,setAgent} = useContext(MyContex);

    function ChangeAgent(event){
        agents[event.target.name] = event.target.value;
    }
    function UpdateAll(){
        setAgent({...agents});
        alert(`number order ${agents.numOrders}  succeed`);
        console.log(agents);
    }
    
    return(
        <div>
            name <input name="nameAgent" onChange={ChangeAgent} type={"text"}/>
            mail <input name="mail" onChange={ChangeAgent}type={"email"}/>
            num order <input name="numOrders" onChange={ChangeAgent} type={"number"}/>
            <button onClick={UpdateAll} >Go</button>
        </div>
    )
}
export default MakeOrder;