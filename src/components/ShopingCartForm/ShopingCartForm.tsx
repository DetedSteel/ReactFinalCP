import { FC } from 'react';
import styles from './shopingcartform.module.scss'
import { SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import { IFormInputs } from '../../types/app';

export const ShopingCartForm: FC<{ count: number, totalPrice: string, submitPopUp: () => void}> = ({count, totalPrice, submitPopUp}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();
  const onSubmit: SubmitHandler<IFormInputs> = data => {
    console.log(data);
    axios.post('http://localhost:3333/order/send', data).then(res => {
      console.log(res);
      submitPopUp();
    });
  };

  return (
    <div className={styles.cartForm}>
      <h3 className={styles.header}>Order details</h3>
      <div className={styles.orderInfo}>
        <p className={styles.text}>{count} items</p>
        <p className={styles.text}>Total</p>
        <p className={styles.price}>${totalPrice}</p>
      </div>
      <form className={styles.form} action="" onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputContainer}>
          <input
            {...register('name', { required: true, pattern: /^[A-Z]{1}[A-Za-z- ]+$/ })}
            placeholder="Name"
            className={styles.input}
          />
          {errors.name && <p className={styles.error}>{errors.name.type}</p>}
        </div>
        <div className={styles.inputContainer}>
          <input
            {...register('phone', { required: true, pattern: /^\+\d{11}$/ })}
            placeholder="Phone number"
            className={styles.input}
          />
          {errors.phone && <p className={styles.error}>{errors.phone.type}</p>}
        </div>
        <div className={styles.inputContainer}>
          <input
            {...register('eMail', { required: true, pattern: /^\S+@\S+\.\S+$/ })}
            placeholder="Email"
            className={styles.input}
          />
          {errors.eMail && <p className={styles.error}>{errors.eMail.type}</p>}
        </div>
        <input type="submit" value="Order" className={styles.btn} />
      </form>
    </div>
  );
};
