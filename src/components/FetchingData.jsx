import {useEffect, useState} from "react";

const url = "https://api.github.com/users/QuincyLarson"

const FetchingData = () => {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(url)
                if (!response){
                    setIsError(true)
                    setIsLoading(false)
                    return
                }
                const user = await response.json()
                setUser(user)
            } catch (e) {
                setIsError(true)
            }
            setIsLoading(false)
        }
        fetchUser()
    }, []);

    if (isLoading) {
        return <h3>Loading...</h3>
    }

    if (isError) {
        return <h3>Error</h3>
    }
    const {name, avatar_url, company, bio} = user   //Make sure destructure after conditions

    return (
        <div>
            <img style={{width: "150px", borderRadius: "25px"}} src={avatar_url} alt={name}/>
            <h2>{name}</h2>
            <h4>Works at {company}</h4>
            <p>{bio}</p>
        </div>
    )
}

export default FetchingData