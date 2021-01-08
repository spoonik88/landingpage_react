import React from "react";
import s from "./HeaderBlock.module.scss";
import { ReactComponent as ReactLogoSvg } from "../../logo.svg";

const HeaderBlock = ({  hideBackground = false,children}) => {
    // console.log('####:props',props)
  const styleCover = hideBackground ? { background: "none" } : {};
  return (
    <div className={s.header} style={s.styleCover}>
      <ReactLogoSvg className={s.imgLogosvg} />{" "}
      {/* {title && <h1 className={s.header}> {title} </h1>}
      {descr && <p className={s.descr}> {descr} </p>}{" "} */}
      {children}
    </div>
  );
};

export default HeaderBlock;
