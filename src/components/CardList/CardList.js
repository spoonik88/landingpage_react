import React from "react";
import Card from "../Card";
import s from "./CardList.module.scss";

export const wordsList = [
    {
        eng: 'between',
        rus: 'между'
    },
    {
        eng: 'high',
        rus: 'высокий'
    },
    {
        eng: 'really',
        rus: 'действительно'
    },
    {
        eng: 'something',
        rus: 'что-нибудь'
    },
    {
        eng: 'most',
        rus: 'большинство'
    },
    {
        eng: 'another',
        rus: 'другой'
    },
    {
        eng: 'much',
        rus: 'много'
    },
    {
        eng: 'family',
        rus: 'семья'
    },
    {
        eng: 'own',
        rus: 'личный'
    },
    {
        eng: 'out',
        rus: 'из/вне'
    },
    {
        eng: 'leave',
        rus: 'покидать'
    },
  ];
  

class CardList extends React.Component {
 render(){
      return(
          <div className={s.cardWrap}>
               {
         wordsList.map(({ eng, rus  }, index) => <Card  onDeleted={()=>console.log("ghbdfsdf")} eng={eng} rus={rus} key={index}/>)
         }
          </div>
      )
 }
}
export default CardList