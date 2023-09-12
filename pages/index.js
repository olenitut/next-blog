import FeaturedPosts from "../components/HomePage/FeaturedPosts";
import Hero from "../components/HomePage/Hero";
import { getFeatured } from "../lib/posts-util";

const HomePage = ({ posts }) => {
  return (
    <main>
      <Hero />
      <FeaturedPosts posts={posts} />
    </main>
  );
};

export function getStaticProps() {
  const posts = getFeatured();

  return {
    props: {
      posts,
    },
  };
}

export default HomePage;
