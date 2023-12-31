import { FC } from "react";
import styles from './categoeycard.module.scss'
import { Link } from "react-router-dom";

export const CategoryCard:FC<{ id:number, image:string, title:string, width: number}> = ({ id, image, title, width}) => {
  return (
    <Link to={`/categories/${id}`} className={styles.card} style={{width: `${width}px`}}>
      <div className={styles.img}>
        <img src={`http://localhost:3333/${image}`} alt={title} style={{width: `${width}px`}}/>
      </div>
      <p>{title}</p>
    </Link>
  );
}
