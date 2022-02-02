import React,{ useState } from "react";

const obj = {nameAgent:"",numOrders:0,mail:""};
export const MyContex = React.createContext();
const AgentContex = (props)=>{
    const [agents,setAgent] = useState(obj);
    return(
        <MyContex.Provider value={{agents,setAgent}}>
            {props.children}
        </MyContex.Provider>
    )
}

export default AgentContex;