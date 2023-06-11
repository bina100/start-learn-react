import { Component } from "react";
import Message from "./message";
import Exchange from "./exchange";
import Counter from "./counter";
import Gallery from "./gallery";
export default class AppHw extends Component {
    render(){
        return (
            <div className="App">
              <h1 className='text-danger'>Hi</h1>
              <Message msg="first-1" bg="red"/>
              <Message msg="second-1" bg="rgb(0,255,255)"/>
              <hr/>
              <Exchange/>
              <hr />
              <Counter/>
              <hr/>
              <Gallery/>
            </div>
          );
    }
  
}
