import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

// mdファイルのデータを取り出す

export const getPostsData = () => {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((file) => {
    const id = file.replace(/\.md$/, ''); // ファイル名(ID)

    // マークダウンファイルを文字列として読み取る

    const fullPath = path.join(postsDirectory, file);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    // idとデータをマージして返す
    return {
      id,
      ...matterResult.data,
    };
  });

  return allPostsData;
};

// getStaticPathsでreturnするpathを取得する
export const getAllPostIds = () => {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((file) => file.replace(/\.md$/, '')); // ファイル名(ID)
};

// IDからブログのデータを取得する
export const getPostData = async (id) => {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  const blogContent = await remark().use(html).process(matterResult.content);

  const blogContentHtml = blogContent.toString();

  return { id, blogContentHtml, ...matterResult.data };
};
