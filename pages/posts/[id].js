import Layout from "../../components/layout";
import { getAllPostIds } from "../../lib/posts";

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false, //あとで説明。
  };
}

export default function Post() {
  return <Layout>...</Layout>;
}
