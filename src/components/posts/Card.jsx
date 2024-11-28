import image from "../../assets/images.png";
import Button from "../UI/button/button";
import style from "./Card.module.css";
// import { posts } from "../../posts";

export default function card(props) {
  const tags = props.tags;

  return (
    <div className={style.card}>
      <img className={style.thumbnail} src={props.image} alt="" />

      <div className={style.body}>
        <h3 className={style.title}>{props.title}</h3>
        <div key={props.id}>
          {tags.map((tag) => (
            <span key={tag} className={style.cardTag}>
              {tag}
            </span>
          ))}
        </div>
        <div className={style.description}>{props.description}</div>
        <div>
          <Button />
        </div>
      </div>
    </div>
  );
}
