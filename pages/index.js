import FeaturedPosts from "../components/HomePage/FeaturedPosts";
import Hero from "../components/HomePage/Hero";

const DUMMY_POSTS = [
  {
    title: "Getting started with next.js",
    image: "getting-started-nextjs.png",
    slug: "next-js",
    excerpt: "NextJS is the react framework for production. ",
    date: "2023-09-10",
  },
  {
    title: "Getting started with next.js",
    image: "getting-started-nextjs.png",
    slug: "next-js2",
    excerpt: "NextJS is the react framework for production. ",
    date: "2023-09-10",
  },
  {
    title: "Getting started with next.js",
    image: "getting-started-nextjs.png",
    slug: "next-js3",
    excerpt: "NextJS is the react framework for production. ",
    date: "2023-09-10",
  },
  {
    title: "Getting started with next.js",
    image: "getting-started-nextjs.png",
    slug: "next-js4",
    excerpt: "NextJS is the react framework for production. ",
    date: "2023-09-10",
  },
];

const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </main>
  );
};

export default HomePage;
