import {Component , createRef} from "react"
import "./App.css"


class App extends Component{
  constructor(props){
    super(props);
    this.ratingsRef = null;
    this.starsRated.bind(this);
    this.state = {
      ratingNumber:0,
      activeStars:[false , false , false , false , false]
    }
  }
  
  starsRated(event , key){
    console.log("ratings given" , key );
    this.setState(prevState => 
      {
      let newState = {...prevState};
      newState.ratingNumber = key+1;
      newState.activeStars = newState.activeStars.map((elem , index)=>index<=key?true:false)
      return newState; 
    }
    )
  }
  render (){
    return <div className="App">
      <h1>Give Your Ratings</h1>
      <div>
      {[1, 2, 3, 4, 5].map( (starNumber , _ind) =>  <span 
        className={`star ${this.state.activeStars[_ind]?"star-active":"star-inactive"}`} key={starNumber} 
        onClick={event=>{this.starsRated(event , _ind)}}>
        </span> )}
      </div>
      <h3>
        <span>Current rating is </span> <span ref={(el)=>this.ratingsRef = el}>{this.state.ratingNumber}</span>
      </h3>
    </div>
  }
}

// function App() {
//   let stars = [1 ,2 ,3 ,4 ,5 ]
//   return (
//     <div className="App">
//       {stars.map( (starNumber , _ind)=>  <span className="star" key={starNumber}></span> )}
//     </div>
//   );
// }

export default App;

