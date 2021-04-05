import React, { useEffect, useState } from "react";
import css from "./index.module.css";
import {Post, PostFull} from "ui/molecule";
import { Media } from "lib/media";
import { Link } from "react-router-dom";

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

  const removePost = (id: number) => {
    setPosts(posts.filter((item) => item.id !== id))
  }

  return (
    <div className={css.container}>
      <div className={css.containerMenu}>
        {posts.map((value) => (
          <>
            <Media greaterThanOrEqual="md">
              <Post 
                {...value} 
                activePost={activePost} 
                onClick={() => setActivePosts(value.id)}
                onRemove={removePost}
              />
            </Media>
            <Media lessThan="md">
              {/* <Link to={`post/${value.id}`}> */}
                <Post {...value} activePost={activePost} onRemove={removePost} withLink={true}/>
              {/* </Link> */}
            </Media>
          </>
        ))}
      </div>
      <div className={css.activePost}>
        {activePost &&
          <PostFull {...posts.find((value) => value.id === activePost)}/>
        }
      </div>
    </div>
  );
};

export default Menu;