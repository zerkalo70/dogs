import React from 'react';
import dog from './dog.jpg'

const item = (props) => {
    let imgClass = props.index === props.randomIndex ? "photo show" : "photo";
    let onClickHandler = props.index === props.randomIndex ? props.onClickHandler : () => {};
    return (
        <div className={"item"} onClick={onClickHandler}>
            <img className={imgClass} src={dog} alt="dogImg"/>
        </div>
    );
};

export default item;