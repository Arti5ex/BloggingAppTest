import React, { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./index.module.css";

type Props = {
  userId: number;
  id: number;
  title: string;
  body: string;
  activePost: number;
  onClick: any;
}

const Comment: React.FC<Props> = ({userId, id, title, body, activePost, onClick}) => {

  return (
    <div className={cn(styles.post, {[styles.active]: activePost === id})} onClick={onClick}>
      <div className={styles.title} title={title}>{title}</div>
      <div className={styles.body} title={body}>{body}</div>
    </div>  
  ) 
}

export default Comment;