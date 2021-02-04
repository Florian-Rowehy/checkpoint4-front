import React from "react";
import { NavLink } from "react-router-dom";

const ArticleCard = (props) => {
    return (
        <div className="card col-4 col-md-3 px-0">
            <img className="card-img-top" src={props.image} alt=""/>
            <div className="card-body">
                <NavLink to={'/article/'+ props.id } className="card-title h6">{props.name}</NavLink>
            </div>
        </div>
    );
}

export default ArticleCard;
