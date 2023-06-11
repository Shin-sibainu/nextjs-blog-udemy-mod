import Head from 'next/head';
import styles from '../styles/Home.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <section>
        <p className={utilStyles.headingMd}>プロフィールの文章です。</p>
      </section>
    </Layout>
  );
}
