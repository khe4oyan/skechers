// styles
import classes from "./styles.module.css";

export default function SoleMaterials({ data }) {
  return (
    <div className={classes.root}>
      <h2>Sole Materials</h2>
      <div className={classes.content}>
        {data.map((material, i) => (
          <p key={i} className={classes.text}>
            {material}
          </p>
        ))}
      </div>
    </div>
  );
}
