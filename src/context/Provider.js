import React,{useState} from "react";
import PackageContext from "./context";


const Provider = (props) =>{

let [footballer, setFootballer] = useState({

    name: "Leonel Mesi",
    club: "Barcelone",
    country: "Argentina",
    age: 32,
    numberofGoals: 700

});


    return(
            <PackageContext.Provider value={footballer}>
                
                {props.children}

            </PackageContext.Provider>

    )
}

export default Provider;