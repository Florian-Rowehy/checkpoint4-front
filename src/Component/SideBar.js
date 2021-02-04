import React from 'react';
import { NavLink } from 'react-router-dom';

const SideBar = (props) => {
    //console.log(props.classifications);
    return (
        <div>
            <ul className="list-group">
                {props.categories.map(
                    (categorie, i)=>(
                        <li key={i} className="list-group-item">
                            <NavLink to={'/'+categorie.name}>{categorie.name}</NavLink>
                        </li>
                    )
                )}
            </ul>
            <hr/>
            <ul className="list-group">
                {props.classifications.map(
                    (classification, i)=> (
                        <li className="list-group-item" key={i}>
                            <input type="checkbox"/>{classification.name}
                        </li>
                    )
                )}
            </ul>
        </div>

    );
}

export default SideBar;