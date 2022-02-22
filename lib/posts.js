import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react/cjs/react.production.min";

const postsDirectory = path.join(process.cwd(), "posts");
console.log(postsDirectory);

//mdファイルのデータを日付順に取り出す
export function getSortedPostsData() {
  // /posts配下のファイル名を取得
  const fileNames = fs.readdirSync(postsDirectory);
  console.log(fileNames);
  const allPostsData = fileNames.map((fileName) => {
    // idを取得するためにファイル名の拡張子を除外
    const id = fileName.replace(/\.md$/, "");

    //マークダウンファイルを文字列として読み取る
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    //投稿のメタデータ部分を解析
    const matterResult = matter(fileContents);

    //idとデータを返す。
    return {
      id,
      ...matterResult.data,
    };
  });
  console.log(allPostsData);
  //投稿を日付でソートする
  return allPostsData.sort((a, b) => {
    if (a.data < b.data) {
      return 1;
    } else {
      return -1;
    }
  });
}
