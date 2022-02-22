// /pages/posts/[id].jsページを作成。
//必要なもの(reactコンポーネント、getStaticPaths, getStaticProps)

import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

//動的ルーティング設定のための関数。pathsがルーティング設定になっている。
//idがとりうる値のリストを返す
export async function getStaticPaths() {
  //ブログ投稿データのファイル名(id)を取得。
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false, //あとで説明。
  };
}

//SSG(id(ファイル名)に基づいて必要なデータを取得)
export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      {/* ... */}
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  );
}
