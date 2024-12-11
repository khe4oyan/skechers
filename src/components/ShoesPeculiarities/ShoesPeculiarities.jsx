// styles
import classes from "./styles.module.css";

export default function ShoesPeculiarities({ data }) {
  return (
    <div className={classes.root}>
      <h2>Shoes Peculiarities</h2>
      <ul className={classes.ul}>
        {data.map((pec, i) => (
          <li key={i} className={classes.li}>{pec}</li>
        ))}
      </ul>
    </div>
  );
}
