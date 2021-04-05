import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import {
  DeleteOutlined,
} from '@ant-design/icons';
import css from "./index.module.css";

type Props = {
  userId: number;
  id: number;
  title: string;
  body: string;
  activePost: number;
  onClick: any;
  onRemove: any;
  withLink?: boolean;
}

const Post: React.FC<Props> = ({userId, id, title, body, activePost, onClick, onRemove, withLink = false}) => {

  const postBody = () => (
    <>
      <div className={css.title} title={title}>{title}</div>
      <div className={css.body} title={body}>{body}</div>
    </>
  )

  return (
    <div className={cn(css.post, {[css.active]: activePost === id})} onClick={onClick}>
      {withLink ? <Link to={`post/${id}`}>{postBody()}</Link> : postBody() }
      <div className={css.icon} onClick={() => onRemove(id)}>
        <DeleteOutlined />
      </div>
    </div>  
  ) 
}

export default Post;