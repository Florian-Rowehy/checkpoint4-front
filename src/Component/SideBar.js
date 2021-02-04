import React from 'react';

const SideBar = (props) => {
    //console.log(props.classifications);
    return (
        <div>
            <ul className="list-group">
                {props.categories.map(
                    (categorie, i)=>(
                        <li key={i} className="list-group-item">
                            <a href={'/'+categorie.name}>{categorie.name}</a>
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