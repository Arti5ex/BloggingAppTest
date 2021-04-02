import React, { useEffect, useState } from "react";
import cn from "classnames";
import css from "./index.module.css";
import {
  DeleteOutlined,
} from '@ant-design/icons';

type Props = {
  userId: number;
  id: number;
  title: string;
  body: string;
  activePost: number;
  onClick: any;
  onRemove: any;
}

const Post: React.FC<Props> = ({userId, id, title, body, activePost, onClick, onRemove}) => {

  return (
    <div className={cn(css.post, {[css.active]: activePost === id})} onClick={onClick}>
      <div className={css.title} title={title}>{title}</div>
      <div className={css.body} title={body}>{body}</div>
      <div className={css.icon} onClick={() => onRemove(id)}>
        <DeleteOutlined />
      </div>
    </div>  
  ) 
}

export default Post;