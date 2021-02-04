import React from 'react';
import ArticleDisplay from '../Component/ArticleDisplay';
import SideBar from '../Component/SideBar';

const HomePage = (props) => {
    return (
        <div className="d-flex">
            <SideBar categories={props.categories} classifications={props.classifications}/>
            <ArticleDisplay/>
        </div>
    )
}

export default HomePage;