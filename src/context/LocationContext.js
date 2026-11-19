const { useContext, useEffect, useState } = require("react");


const LocationContext =useContext();


export const LocationProvider= ({Children})=>{
    const[error, setError]=useState(null);
    const[location, setLocation]=useState(null);
    const[loading, setLoading]=useState(true);

    useEffect (()=>{

        navigator.geolocation.getCurrentPosition(
            (position)=>{
                const{latitude,longitude}= position.coords;
                fetchLocationData(latitude,longitude);
            },
            ()=>{
             setError("Unable to retrive your location");
             setLoading(false);
               
            }
        )
    },[])


    return(
        <LocationContext.Provider value={{location,loading,error}}>
            {Children}
        </LocationContext.Provider>
    )

}