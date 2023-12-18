import { FC } from "react";
import styles from './categoeycard.module.scss'

export const CategoryCard:FC<{ image:string, title:string, width: number}> = ({ image, title, width}) => {
  return (
    <div className={styles.card} style={{width: `${width}px`}}>
      <div className={styles.img}>
        <img src={image} alt={title} style={{width: `${width}px`}}/>
      </div>
      <h5 className={styles.text}>{title}</h5>
    </div>
  );
}
