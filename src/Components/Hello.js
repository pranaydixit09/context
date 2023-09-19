import PackageContext from "../context/context";


const Hello = () =>{

    
    
    return(

        <div>
            <PackageContext.Consumer>
                {
                    (info)=>(<h1>{info.age}<br></br> {info.club}</h1>
                     )
                }
            </PackageContext.Consumer>
        </div>

)

}

export default Hello;