import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";

import styles from "./post-content.module.css";

const PostContent = ({ post }) => {
  const imgPath = `/images/posts/${post.image}`;

  return (
    <article className={styles.content}>
      <PostHeader title={post.title} image={imgPath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
