import Button from "../UI/button/button";
import style from "./Card.module.css";

export default function card(props) {
  const tags = props.tags;
  return (
    <div className={style.card}>
      <img className={style.thumbnail} src={props.image} alt="" />

      <div className={style.body}>
        <h3 className={style.title}>{props.title}</h3>
        <div key={props.id}>
          {tags.map(
            (tag) =>
              (tag === "js" && (
                <span key={tag} className={`${style.js} ${style.cardTag}`}>
                  {tag}
                </span>
              )) ||
              (tag === "php" && (
                <span key={tag} className={`${style.php} ${style.cardTag}`}>
                  {tag}
                </span>
              )) ||
              (tag === "css" && (
                <span key={tag} className={`${style.css} ${style.cardTag}`}>
                  {tag}
                </span>
              )) ||
              (tag === "html" && (
                <span key={tag} className={`${style.html} ${style.cardTag}`}>
                  {tag}
                </span>
              ))
          )}
        </div>
        <div className={style.description}>{props.description}</div>
        <div>
          <Button />
        </div>
      </div>
    </div>
  );
}
