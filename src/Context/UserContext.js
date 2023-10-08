import { createContext, useState } from "react";
// import { useHistory } from "react-router-dom";


export let UserContext = createContext()

export default function UserContextProvider(props) {
    
    const [userToken, setUserToken] = useState(null)
    // const history = useHistory();

    // function handleClick() {
    //   history.push("/brands");
    // }
    return<>
    <UserContext.Provider value={{userToken,setUserToken}}>
        {props.children}
    </UserContext.Provider>
    </>
}






