import {useState} from 'react';

const UserChallenge = () => {
        const [isUser, setIsUser] = useState(null)

        const logIn = () => {
            setIsUser({name: "Sample Name"})
        }
        const logOut = () => {
            setIsUser(null)
        }

        return (
            <div>
                {isUser ?
                    <LogOutUser name={isUser.name} button={logOut}/>
                    :
                    <LogInUser button={logIn}/>
                }
            </div>
        )
            ;
    }
;
const LogOutUser = ({name, button}) => {
    return (<div>
        <h1>Hello {name}</h1>
        <button className={"btn"} onClick={button}>Log Out</button>
    </div>)
}
const LogInUser = ({button}) => {
    return (<div>
        <button className={"btn"} onClick={button}>Log In</button>
    </div>)
}
export default UserChallenge;