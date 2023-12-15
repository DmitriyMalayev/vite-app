import {useEffect, useState} from "react"

const url = "https://api.github.com/users/QuincyLarson"

const MultipleReturns = () => {
    // const [isLoading, setIsLoading] = useState(true)
    const [user, setUser] = useState(null)

    useEffect(() => {
            const fetchUser = async () => {
                try {
                    const response = await fetch(url)
                    const user = await response.json()
                    console.log(user)
                } catch (error) {
                    console.log(error)
                }
            }
            fetchUser()
        }, [])
    return (
        <section>
            <h3>User Info</h3>
        </section>
    )
}
//     if (isLoading) {
//         return <h2>Loading...</h2>
//     }
//     return (
//         <div>
//             <h2>Multiple Returns</h2>
//         </div>
//     );
// };

export default MultipleReturns;