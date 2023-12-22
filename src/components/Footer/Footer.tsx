import { FC } from 'react';
import styles from './footer.module.scss'
import instIC from '/public/ic-instagram.svg'
import whatsAppIC from '/public/ic-whatsapp.svg'

export const Footer: FC = () => {
  return (
    <div className={`container ${styles.container}`}>
      <h2>Contact</h2>
      <div className={styles.cardsContainer}>
        <div className={styles.infoContainer}>
          <p className={styles.title}>Phone</p>
          <p className={styles.text}>+7 (499) 350-66-04</p>
        </div>
        <div className={styles.infoContainer}>
          <p className={styles.title}>Socials</p>
          <a className={styles.link} href="#"><img src={instIC} alt="inst" /></a>
          <a className={styles.link} href="#"><img src={whatsAppIC} alt="whatsapp" /></a>
        </div>
        <div className={styles.infoContainer}>
          <p className={styles.title}>Address</p>
          <p className={styles.text}>Dubininskaya Ulitsa, 96, Moscow, Russia, 115093</p>
        </div>
        <div className={styles.infoContainer}>
          <p className={styles.title}>Working Hours</p>
          <p className={styles.text}>24 hours a day</p>
        </div>
      </div>
      <div style={{ width: '100%' }}>
        <iframe
          className={styles.map}
          width="1360"
          height="350"
          style={{ margin: '0' }}
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Dubininskaya%20Ulitsa,%2096,%20Moscow,%20Russia,%20IThub,%20115093+(IThub%20college)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.maps.ie/population/">Population calculator map</a>
        </iframe>
      </div>
    </div>
  );
};
