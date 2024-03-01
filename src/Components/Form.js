import { useState } from "react"
import './Form.css'
const Form = ({ setEntries, entries }) => {
    const [firstName, setFirstName] = useState("")
    const [userName, setUserName] = useState("")
    const [favColour, setFavColour] = useState("Red")
    const [activity, setActivity] = useState("")

    const handleDropDown = (e) => {
        setFavColour(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        let obj = {
            firstName: firstName,
            userName: userName,
            favColour: favColour,
            activity: activity
        }
        if(!firstName || !userName || !favColour || !activity){
            alert("fill in all fields")
        } else {
            setEntries([obj, ...entries])
            setFirstName("")
            setFavColour("Red")
            setActivity("")
            setUserName("")
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label className="formLabelText">First Name:
                    <input 
                    className="userInputs"
                    type="text"
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                    />
                </label>
                <label className="formLabelText">Username:
                    <input 
                    className="userInputs"
                    type="text"
                    onChange={(e) => setUserName(e.target.value)}
                    value={userName}
                    />
                </label>
                <label className="formLabelText">Select A Colour:
                    <select className="userInputs" value={favColour} defaultValue="Red" onChange={handleDropDown}>
                        <option value="Red">Red</option>
                        <option value="Blue">Blue</option>
                        <option value="Green">Green</option>
                    </select>
                </label>
                <label className="formLabelText">Activity:
                    <textarea 
                    className="userInputs"
                    type="text"
                    onChange={(e) => setActivity(e.target.value)}
                    value={activity}
                    />
                </label>
                <input id="submitButton" className="userInputs" type="submit"/>
            </form>
        </div>
    )
}

export default Form