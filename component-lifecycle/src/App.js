import {Component, Fragment} from 'react';
import Utc from "./Utc"
import Timer from "./Timer"
class App extends Component{

  render(){
    let AppUI = <Fragment>
      <Utc/>
      <Timer/>
    </Fragment>
    return AppUI
  }
}
// let App = _=> <h1>hello</h1>

export default  App;