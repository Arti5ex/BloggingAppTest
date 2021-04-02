import React, { useEffect, useState } from "react";
import styles from "./index.module.css";

type Props = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PostFull: React.FC<Props> = ({title, body}) => {
console.log(title)
  return (
    <div className={styles.post}>
      <div className={styles.title} title={title}>{title}</div>
      <div className={styles.body} title={body}>{body}</div>
    </div>  
  ) 
}

export default PostFull;