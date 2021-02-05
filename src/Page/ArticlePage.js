import React from 'react';
import SideBar from '../Component/SideBar';
import Article from '../Component/Article'

const ArticlePage = (props) => {

    return (
        <div className="d-flex">
            <SideBar categories={props.categories} classifications={props.classifications}/>
            <Article history={props.history}/>
        </div>
    )
}

export default ArticlePage;