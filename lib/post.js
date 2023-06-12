import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

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
