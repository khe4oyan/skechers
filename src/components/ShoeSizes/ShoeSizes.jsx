// styles
import classes from './styles.module.css';

export default function ShoeSizes({ data }) {
  const {
    infant,
    kids,
    male,
    female,
  } = data;


  return (
    <div className={classes.root}>
      <h2>Shoe Sizes</h2>
      <div className={classes.content}>
        <div className={classes.text}>Category</div>
        <div className={classes.text}>Size Range</div>

        <div className={classes.text}>Infant</div>
        <div className={classes.text}>{infant.range.join(' - ')}</div>
        
        <div className={classes.text}>Kids</div>
        <div className={classes.text}>{kids.range.join(' - ')}</div>
        
        <div className={classes.text}>Male</div>
        <div className={classes.text}>{male.range.join(' - ')}</div>
        
        <div className={classes.text}>Female</div>
        <div className={classes.text}>{female.range.join(' - ')}</div>
      </div>
    </div>
  )
}