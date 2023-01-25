import classes from './DeleteBtn.module.css';

const deleteBtn = (props) => {
    return(
        <div className={classes.deleteBtn}>
            {props.children}
        </div>
    )
}

export default deleteBtn;