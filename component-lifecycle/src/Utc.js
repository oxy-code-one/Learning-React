import {Component} from 'react';
import "./Utc.css"
class Utc extends Component{
    render(){
        let dateContainer = <div className="border-box">
            <h2 className='utc-date-string'> Current Date is {new Date().toDateString()}</h2>
        </div>
        return dateContainer;
    }
}

export default Utc