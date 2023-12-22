import { FC } from 'react';
import styles from './discountform.module.scss';
import { useForm, SubmitHandler } from 'react-hook-form';

interface IFormInputs {
  name: string;
  phone: string;
  eMail: string;
}

export const DiscountForm: FC = () => {
  const { register, handleSubmit, formState: {errors} } = useForm<IFormInputs>();
  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log(data);
  };

  return (
    <div className={`container ${styles.container}`}>
      <h2 className={styles.header}>5% off on the first order</h2>
      <form className={styles.form} action="" onSubmit={handleSubmit(onSubmit)}>
        <input {...register('name', {required: true, pattern: /^[A-Za-z]+ [A-Za-z]+$/})} placeholder='Name' className={styles.input} />
        {errors.name && <h2>{errors.name.type}</h2>}
        <input {...register('phone', {required: true})} placeholder='Phone number' className={styles.input} />
        <input {...register('eMail', {required: true})} placeholder='Email' className={styles.input} />
        <input type="submit" value="Get a discount" className={styles.btn} />
      </form>
    </div>
  );
};
