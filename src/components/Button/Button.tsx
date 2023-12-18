import { FC } from "react";
import { ButtonPropsT } from "../../types/app";

export const Button:FC<ButtonPropsT> = ({text, onClick, style}) => {
  return <button style={style} onClick={onClick}>{text}</button>;
}
