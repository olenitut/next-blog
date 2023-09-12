import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "posts");

export const getPostData = (filename) => {
  const fileCotent = fs.readFileSync(path.join(postsDir, filename), "utf-8");
  const { data, content } = matter(fileCotent);

  const postData = {
    ...data,
    content,
    slug: filename.replace(/\.md$/, ""),
  };

  return postData;
};

export const getAllPosts = () => {
  const postFiles = fs.readdirSync(postsDir);

  return postFiles
    .map((el) => getPostData(el))
    .sort((prev, cur) => (prev.date > cur.date ? -1 : 1));
};

export const getFeatured = () => {
  return getAllPosts().filter((el) => el.isFeatured);
};
