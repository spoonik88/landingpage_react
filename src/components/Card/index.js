
import React from "react";
import Cardstyle from "./Card.module.scss";
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
        const {eng, rus} = this.props
       
        return (
            <div onClick={this.handelCardClick}  className= { this.state.done !== true ? Cardstyle.card : Cardstyle.card + ' ' + Cardstyle.done }>
              <div  className={Cardstyle.cardInner}>
                <div className={Cardstyle.cardFront}>{eng}</div>
                <div className={Cardstyle.cardBack}>{rus}</div>
              </div>
            </div>
          );
    }

}

export default Card;
