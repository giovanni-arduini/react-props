import image from "../../assets/images.png";
import Button from "../UI/button/button";
import style from "./Card.module.css";
import { posts } from "../../posts";

export default function card() {
  const publishedPost = posts.filter((post) => post.published === true);
  // console.log(publishedPost);

  return publishedPost.map((post) => (
    <div className={style.card}>
      <img className={style.thumbnail} src={image} alt="" />

      <div className={style.body}>
        <h3 className={style.title}>Titolo del post</h3>
        <div>
          {post.tags.map((tag) => (
            <span className={style.cardTag}>{tag}</span>
          ))}
        </div>
        <div className={style.description}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
          omnis illum doloremque porro sit veniam exercitationem autem animi ab
          eligendi?
        </div>
        <div>
          <Button />
        </div>
      </div>
    </div>
  ));
}
