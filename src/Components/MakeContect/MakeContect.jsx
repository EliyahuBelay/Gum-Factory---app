import { useState } from "react";
import {getInfo} from '../../Services/movies-service';

const MakeContect = () => {
    const [apiData, setApiData] = useState([]);
    
    return (
        <div>
            <button onClick={()=>getInfo(setApiData)}>Go</button>
            <ul>
                {apiData.map(item => <li>{item.movieName}</li>)}
            </ul>
        </div>
    )
}
export default MakeContect;

//i create a component with a state and on click on the button invoce the 
//function in *service* file. 