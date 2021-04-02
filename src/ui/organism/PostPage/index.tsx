import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { List, Comment } from 'antd';
import { useParams } from "react-router";

type Props = {
  id?: number;
  title?: string;
  body?: string;
}

const PostPage: React.FC<Props> = ({title, body}, ...props) => {
  const [postComments, setPostComments] = useState<any[]>([]);
  const [post, setPost] = useState<any>({});
  const { id } = useParams<any>();

console.log(props)
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then(response => response.json())
      .then(json => setPostComments(json));

    if(!title) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.json())
        .then(json => setPost(json));
    } else {
      setPost({title: title, body: body});
    }
  }, [id]);

  return (
    <div className={styles.post}>
      <div className={styles.title} title={title}>{post.title}</div>
      <div className={styles.body} title={body}>{post.body}</div> 
      <List
        itemLayout="horizontal"
        header={`${postComments.length} replies`}
        dataSource={postComments}
        renderItem={item => (
          <Comment
            author={<b>{item.name}</b>}
            content={item.body}
          />
        )}
      />
    </div>  
  ) 
}

export default PostPage;