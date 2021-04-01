import React, { useEffect, useState } from "react";
// import css from "./index.module.css";
import {Post} from "ui/molecule";

type Props = {
}

const Menu: React.FC<Props> = () => {

  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setPosts(json));
  })
  return (
    <div>
      {posts.map((value) => (
        <Post data={value}/>
      ))}
    </div>
  );
};

export default Menu;