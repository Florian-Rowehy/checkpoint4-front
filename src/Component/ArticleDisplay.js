import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import ArticleCard from './ArticleCard';
import Pagination from './Pagination';

const ArticleDisplay = (props) => {
    const [articles, setArticles] = useState([]);
    const [nbPages, setNbPages] = useState(1);
    const [currentPage, setCurrentpage] = useState(1);
    const url = useLocation();
    
    const pageClickHandler= (page)=>{
        setCurrentpage(page);
    }
    const prevPageClickHandler= (page)=>{
        setCurrentpage(currentPage-1>0? currentPage-1:currentPage);
    }
    const nextPageClickHandler= (page)=>{
        setCurrentpage(currentPage+1<=nbPages? currentPage+1:currentPage);
    }

    useEffect(() => {
        const pathname = url.pathname;
        const categorie = pathname.length > 1? pathname.slice(1) : null;
        let uri = "?page="+currentPage;
        if (!categorie) {
            uri+=""
        } else if (categorie === "kids") {
            uri += "&categories.name[]=boys&categories.name[]=girls";
        } else {
            uri += "&categories.name="+categorie;
        }
        const query = "http://localhost:8000/api/articles" + uri;
        axios.get(query)
             .then(res => res.data)
             .then(data => {
                 setNbPages(Math.ceil(data['hydra:totalItems']/15));
                 setArticles(data['hydra:member']);
                })
             .catch(e => {console.log(e);})
    }, [url, currentPage]);

    return (
        <div>
            <div className="row">
                {articles.map((article, i)=><ArticleCard key={i} image={article.image} name={article.name} description={article.description} />)}
            </div>
            <Pagination 
                currentPage={currentPage} 
                nbPages={nbPages} 
                pageClickHandler={pageClickHandler}
                prevPageClickHandler={prevPageClickHandler}
                nextPageClickHandler={nextPageClickHandler}
            />
        </div>
    );
}

export default ArticleDisplay;