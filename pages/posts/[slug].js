import PostContent from "../../components/Posts/post-detail/post-content";
import { getPostData } from "../../lib/posts-util";

const OnePostPage = ({ post }) => {
  return <PostContent post={post} />;
};

export function getStaticProps(context) {
  const { params } = context;

  const post = getPostData(`${params.slug}.md`);

  return {
    props: {
      post,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export default OnePostPage;
