import AllPosts from "../../components/Posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

const PostsPage = ({ posts }) => {
  return <AllPosts posts={posts} />;
};

export function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
}

export default PostsPage;
