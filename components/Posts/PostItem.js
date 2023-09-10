import Link from "next/link";
import Image from "next/image";

import styles from "./post-item.module.css";

const PostItem = ({ post }) => {
  const date = new Date(post.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imgPath = "/images/posts/" + post.image;

  console.log(imgPath);

  return (
    <li className={styles.post}>
      <Link href={`/posts/${post.slug}`}>
        <div className={styles.image}>
          <Image
            src={imgPath}
            alt={post.title}
            width={300}
            height={200}
            layout="responsive"
          />
        </div>
        <div className={styles.content}>
          <h3>{post.title}</h3>
          <time>{date}</time>
          <p>{post.excerpt}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;
