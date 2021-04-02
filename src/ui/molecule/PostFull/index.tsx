import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { List, Comment } from 'antd';

type Props = {
  id?: number;
  title?: string;
  body?: string;
}

const PostFull: React.FC<Props> = ({id, title, body}) => {
  const [postComments, setPostComments] = useState<any[]>([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then(response => response.json())
      .then(json => setPostComments(json));
  }, [id]);

  return (
    <div className={styles.post}>
      <div className={styles.title} title={title}>{title}</div>
      <div className={styles.body} title={body}>{body}</div> 
      {postComments.length > 0 &&
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
      }
    </div>  
  ) 
}

export default PostFull;