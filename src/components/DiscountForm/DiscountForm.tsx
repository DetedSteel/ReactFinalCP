import { FC } from 'react';
import styles from './discountform.module.scss';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import { IFormInputs } from '../../types/app';



export const DiscountForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();
  const onSubmit: SubmitHandler<IFormInputs> = data => {
    console.log(data);
    axios.post('http://localhost:3333/sale/send', data).then(res => {
      console.log(res);
    });
  };

  return (
    <div className={`container ${styles.container}`}>
      <h2 className={styles.header}>5% off on the first order</h2>
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
        <input type="submit" value="Get a discount" className={styles.btn} />
      </form>
    </div>
  );
};
