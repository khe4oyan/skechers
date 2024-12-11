// styles
import classes from "./styles.module.css";

export default function SoleVariants({ data }) {
  const { general, professional, casual } = data;

  return (
    <div className={classes.root}>
      <h2>Sole Variants</h2>
      <div className={classes.content}>
        <div className={classes.box}>
          <h3>General</h3>
          {general.map((general, i) => (
            <div key={i} className={classes.typeBox}>
              <p className={classes.name}>{general.name}</p>
              <p className={classes.description}>{general.description}</p>
            </div>
          ))}
        </div>

        <div className={classes.box}>
          <h3>Proffesional</h3>
          <div className={classes.insoles}>
            {professional.insoles.map((insole, i) => (
              <p key={i} className={classes.insole}>
                {insole}
              </p>
            ))}
          </div>
          
          {professional.shoes.map((proff, i) => (
            <div key={i} className={classes.typeBox}>
              <p className={classes.name}>{proff.name}</p>
              <p className={classes.description}>{proff.description}</p>
            </div>
          ))}
        </div>

        <div className={classes.box}>
          <h3>Casual</h3>
          <div className={classes.insoles}>
            {casual.insoles.map((insole, i) => (
              <p key={i} className={classes.insole}>
                {insole}
              </p>
            ))}
          </div>
          {professional.shoes.map((proff, i) => (
            <div key={i} className={classes.typeBox}>
              <p className={classes.name}>{proff.name}</p>
              <p className={classes.description}>{proff.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
