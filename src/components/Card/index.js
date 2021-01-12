import React from "react";
import cl from "classnames";
import { CheckSquareOutlined, DeleteOutlined } from "@ant-design/icons";

import s from "./Card.module.scss";

class Card extends React.Component {
  state = {
    done: false,
    isRemamberd: false,
  };

  handleCardClick = (isRemamberd) => {
    this.setState(({ done }) => ({
      done: !done,
    }));
  };
  handleDeletedCard = () => {
     
      this.props.onDeleted();
     
  };
  handleRemamberdClick = () => {
    this.setState(({ isRemamberd }) => ({
      done: true,
      isRemamberd: true,
    }));
  };

  render() {
    const { eng, rus } = this.props;
    const { done, isRemamberd } = this.state;
  
    return (
      <div className={s.root}>
        <div
          className={cl(s.card, {
            [s.done]: done,
            [s.isRemamberd]: isRemamberd,
          })}
          onClick={this.handleCardClick}
        >
          <div className={s.cardInner}>
            <div className={s.cardFront}>{eng}</div>
            <div className={s.cardBack}>{rus}</div>
          </div>
        </div>
        <div className={s.icons} onClick={this.handleRemamberdClick}>
          <CheckSquareOutlined />
        </div>
        <div onClick={this.handleDeletedCard} className={cl(s.icons, s.deleted)}>
          <DeleteOutlined />
        </div>
      </div>
    );
  }
}

export default Card;
