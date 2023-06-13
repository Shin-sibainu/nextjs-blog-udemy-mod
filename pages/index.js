import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Layout, { siteTitle } from '../components/layout';
import { getPostsData } from '../lib/post';

export async function getStaticProps() {
  const allPostsData = getPostsData();

  return {
    props: { allPostsData },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p className={utilStyles.headingMd}>フルスタックに憧れています。好きなフレームワークはNextjsです。</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2>📝エンジニアのブログ</h2>
        <div className={styles.grid}>
          {allPostsData.map(({ id, title, date, thumbnail }) => {
            return (
              <article key={id}>
                <Link href={`/posts/${id}`}>
                  <img
                    src={thumbnail}
                    className={styles.thumbnailImage}
                    alt={title}
                  />
                </Link>
                <Link href={`/posts/${id}`}>
                  <a className={utilStyles.boldText}>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>{date}</small>
              </article>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}
