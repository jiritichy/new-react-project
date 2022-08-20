import "./Card.css";

// container component

const Card = (props) => {

    const classes = 'card ' + props.className;

    //children is reserved word in react, its all content between opening acnd closing tag
    return <div className={classes}>{props.children}</div>
}

export default Card;