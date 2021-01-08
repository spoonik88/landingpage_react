
import React from "react";
import Cardstyle from "./Card.module.scss";
import cl from "classnames"
class Card extends React.Component{

    state={
        done:false
    }
    handelCardClick=()=>{
        if (this.state.done !== true){
            this.setState({ done:true})
          }else{this.setState({ done:false})}
  

    }
    render(){
        const {eng, rus} = this.props;
       const {done} = this.state;
        return (
            <div 
            onClick={this.handelCardClick} 
            className= { cl(Cardstyle.card, {[Cardstyle.done]:done})}
            >
              <div  className={Cardstyle.cardInner}>
                <div className={Cardstyle.cardFront}>{eng}</div>
                <div className={Cardstyle.cardBack}>{rus}</div>
              </div>
            </div>
          );
    }

}

export default Card;
