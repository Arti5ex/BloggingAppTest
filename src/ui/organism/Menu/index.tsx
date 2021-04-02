import React, { useEffect, useState } from "react";
import css from "./index.module.css";
import {Post, PostFull} from "ui/molecule";

type Props = {
}

const Menu: React.FC<Props> = () => {

  const [posts, setPosts] = useState<any[]>([]);
  const [activePost, setActivePosts] = useState<number|null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setPosts(json));
  }, []);

  console.log(posts.find((value) => value.id === activePost))

  return (
    <div className={css.container}>
      <div className={css.containerMenu}>
        {posts.map((value) => (
          <Post {...value} activePost={activePost} onClick={() => setActivePosts(value.id)}/>
        ))}
      </div>
      <div>
        {activePost &&
          <PostFull {...posts.find((value) => value.id === activePost)}/>
        }
      </div>
    </div>
  );
};

export default Menu;