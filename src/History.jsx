import React from 'react'
import { useHistory } from 'react-router-dom'
function History() {
    let history = useHistory();
    const handleClick = () =>{
        history.push('/home')
    }
    return (
        <div>
           <i className="fas fa-arrow-left icon" onClick={history.goBack}/>
           <i className="fas fa-arrow-right icon" onClick={history.goForward}/>
           <i className="fas fa-home icon" onClick={handleClick}/>
        </div>
    )
}

export default History
