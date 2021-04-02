import React, { useEffect, useState } from "react";
import css from "./index.module.css";

type Props = {
  name: string;
  email: string;
  body: string;
}

const Comment: React.FC<Props> = ({name, body, email}) => {

  return (
    <div className={css.container} >
      <div className={css.title}>{name}</div>
      <div className={css.body}>{email}</div>
      <div className={css.body}>{body}</div>
    </div>  
  ) 
}

export default Comment;