import { FC } from 'react';
import { Button } from '../Button/Button';
import styles from './mainpromotion.module.scss';
import { ButtonPropsT } from '../../types/app';
import { useNavigate } from 'react-router-dom';

export const MainPromotion: FC = () => {
  const navigate = useNavigate();

  const btnProps: ButtonPropsT = {
    text: 'Check out',
    onClick: () => {
      navigate('/categories/discounts');
    },
    style: {
      padding: '16px 56px',
      fontSize: '20px',
      fontWeight: '600',
      color: '#fff',
      backgroundColor: '#393',
      border: 'none',
      borderRadius: '6px',
      width: 'fit-content'
    },
  };

  return (
    <div className={styles.backgroundImg}>
      <h1>Amazing Discounts on Garden Products!</h1>
      <Button text={btnProps.text} onClick={btnProps.onClick} style={btnProps.style} />
    </div>
  );
};
