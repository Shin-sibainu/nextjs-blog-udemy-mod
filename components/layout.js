import Head from 'next/head';
import styles from './layout.module.css';

const name = 'Masaru Suzuki';

export const siteTitle = 'Next.js Sample Website';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="stylesheet" href="/favicon.ico" />
      </Head>
      <header>
        <img src="/images/profile.png" alt="" />
        <h1>{name}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
