import './Display.css'
const Display = ({ entry }) => {
    return (
        <div id='displayWrapper'>
            <div className='info'>
                <p>Name: <b>{entry.firstName}</b></p>
            </div>
            <div className='info'>
                <p>Username: <b>{entry.userName}</b></p>
            </div>
            <div className='info'>
                <p>Colour Choice: <b>{entry.favColour}</b></p>
            </div>
            <div className='info activity'>
                <p>Activity: <span>{entry.activity}</span></p>
            </div>
        </div>
    )
}
export default Display