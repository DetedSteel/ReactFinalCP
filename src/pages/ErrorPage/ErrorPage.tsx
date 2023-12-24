import { FC } from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import styles from './errorpage.module.scss'
import img from './404.png'
import { Link } from 'react-router-dom';

export const ErrorPage: FC = () => {
  return (
    <Provider store={store}>
      <div className={`container ${styles.container}`}>
        <Header />
        <div className={styles.img}>
          <img src={img} alt="" />
        </div>
        <p className={styles.errorText}>Page Not Found</p>
        <p className={styles.errorMsg}>We’re sorry, the page you requested could not be found. Please go back to the homepage.</p>
        <Link to={'/'} className={styles.homeBtn}>Go Home</Link>
        <Footer />
      </div>
    </Provider>
  );
};
