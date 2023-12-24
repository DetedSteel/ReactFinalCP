import { FC } from 'react';
import styles from './popup.module.scss';
import { Button } from '../Button/Button';

export const PopUp: FC<{ btnClick: () => void }> = ({btnClick}) => {
  return (
    <div className={styles.container}>
      <div className={styles.popUpContainer}>
        <p className={styles.header}>Congratulations! </p>
        <p className={styles.text}>
          Your order has been successfully placed on the website.
          <br />
          <br />A manager will contact you shortly to confirm your order.
        </p>
        <Button text='' onClick={() => btnClick()} className={styles.btn}/>
      </div>
    </div>
  );
};
