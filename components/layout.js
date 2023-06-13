import Head from 'next/head';
import styles from './layout.module.css';
import utilsStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Masaru Suzuki';

export const siteTitle = 'Next.js Sample Website';

const Layout = ({ children, home }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title></title>
        <link rel="stylesheet" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <img
          className={`${utilsStyles.borderCircle} ${
            home ? styles.headerHomeImage : styles.headerImage
          }`}
          src="/images/profile.png"
          alt=""
        />
        <h1 className="">{name}</h1>
      </header>
      <main>{children}</main>
      {!home && (
        <>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </>
      )}
    </div>
  );
};

export default Layout;
