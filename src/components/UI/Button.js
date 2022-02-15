import classes from './Button.module.css';

function Button(props) {
    return (
      <div className={classes.Btn}>
        <button>{props.children}</button>
      </div>
    );
}

export default Button;