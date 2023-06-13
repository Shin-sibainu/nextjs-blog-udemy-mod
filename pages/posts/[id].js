import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/post';
import utilStyle from '../../styles/utils.module.css';
import Head from 'next/head';

const Post = ({ post }) => {
  // const router = useRouter();

  // if (router.isFallback) {
  //   return <div>Loading...</div>;
  // }

  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article>
        <h1 className={utilStyle.title}>{post.title}</h1>
        <div className={utilStyle.lightText}>{post.date}</div>

        {/* 記事本文 */}
        <div dangerouslySetInnerHTML={{ __html: post.blogContentHtml }} />
      </article>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const allPostIds = getAllPostIds();
  const paths = allPostIds.map((id) => {
    return {
      params: {
        id,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getPostData(params.id);
  return {
    props: { post },
  };
};

export default Post;
