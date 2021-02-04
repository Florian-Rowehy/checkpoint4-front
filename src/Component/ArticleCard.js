import React from "react";

const ArticleCard = (props) => {
    const style = {width: '18rem'}
    return (
        <div className="card" style={style}>
            <img className="card-img-top" src={props.image} alt=""/>
            <div className="card-body">
                <h5 className="card-title h6">{props.name}</h5>
                {/* <p className="card-text">{props.description}</p> */}
                <a href="/" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}

export default ArticleCard;
