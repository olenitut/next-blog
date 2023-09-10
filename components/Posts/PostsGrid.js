import PostItem from "./PostItem";

import styles from "./posts-grid.module.css";

const PostsGrid = ({ posts }) => {
  return (
    <ul className={styles.grid}>
      {posts.map((el) => (
        <PostItem post={el} key={el.slug} />
      ))}
    </ul>
  );
};

export default PostsGrid;
