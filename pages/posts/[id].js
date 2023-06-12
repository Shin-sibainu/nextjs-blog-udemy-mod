import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/post';

const Post = ({ post }) => {
  return <Layout>{post.blogContentHtml}</Layout>;
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
