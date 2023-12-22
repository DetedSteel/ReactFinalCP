import { FC } from "react";
import { ButtonPropsT } from "../../types/app";

export const Button:FC<ButtonPropsT> = ({text, onClick, style, className}) => {
  return <button style={style} onClick={onClick} className={className??''}>{text}</button>;
}
