import {Component, Fragment} from 'react';
import "./Timer.css"

let timerComp = ({} , callback)=>{
    return <div className="border-box timer-font" onClick={event=>callback(event)}> Set Timer </div>
}

let timerFormComp = (callback)=>{
    let timerCount = 0;
    return <Fragment>
        <div>
        <span className="border-box inline-blk">Enter Duration </span>
        <input type='number' className="border-box timer-input"  onChange={e=>timerCount = e.target.value} />
        
        </div>
        <div className="border-box timer-font" onClick={event=>callback(timerCount)}> Start Timer </div>
    </Fragment> 

}
let timerRunningComp = ({currentTimerCount})=>{
    return <div className="border-box timer-font" > {currentTimerCount} </div>

}

class TimerBox extends Component{
    constructor(props){
        super(props);
        this.state = {
            currentTimerCount:0,
            timerHidden:true,

        }
        this.timerButtonPress.bind(this);
        this.timerStartButton.bind(this);
    }
    timerButtonPress(){
        console.log("timer clicked")
        this.setState({timerHidden: !this.state.timerHidden})
    }
    timerStartButton(timeCount = 0){
        this.setState( { currentTimerCount:timeCount } )
        let timer = ()=>{
            this.state.currentTimerCount>1? 
            this.setState({currentTimerCount: this.state.currentTimerCount-1}):
            this.setState({timerHidden: !this.state.timerHidden , currentTimerCount:0});
            if(this.state.currentTimerCount > 1 ){setTimeout(timer , 1000)}
        }
        setTimeout(timer , 1000);
    }
    
    render(){
        let timeContainer = <div >
            {
                this.state.timerHidden? timerComp(this.state , (event)=>{this.timerButtonPress()}):
                this.state.currentTimerCount>0?timerRunningComp( this.state ):timerFormComp((count)=>{this.timerStartButton(count)})
            }
        </div>
        return timeContainer;
    }
}

export default TimerBox