import AllPosts from "../../components/Posts/all-posts";

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

const PostsPage = () => {
  return <AllPosts posts={DUMMY_POSTS} />;
};

export default PostsPage;
