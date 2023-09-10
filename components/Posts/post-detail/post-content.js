import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";

import styles from "./post-content.module.css";

const DUMMY_POST = {
  title: "Getting started with next.js",
  image: "getting-started-nextjs.png",
  slug: "next-js",
  date: "2023-09-10",
  content: "# This is my first post",
};

const PostContent = () => {
  const imgPath = `/images/posts/${DUMMY_POST.image}`;

  return (
    <article className={styles.content}>
      <PostHeader title={DUMMY_POST.title} image={imgPath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
