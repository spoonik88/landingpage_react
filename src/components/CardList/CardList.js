import React from "react";
import Card from "../Card";
import s from "./CardList.module.scss";

class CardList extends React.Component {
 render(){
      return(
          <div className={s.cardWrap}>
               {
         this.props.item.map(({ eng, rus  }, index) => <Card eng={eng} rus={rus} key={index}/>)
         }
          </div>
      )
 }
}
export default CardList