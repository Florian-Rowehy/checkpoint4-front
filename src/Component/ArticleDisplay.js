import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import ArticleCard from './ArticleCard';

const ArticleDisplay = (props) => {
    const url = useLocation();
    const pathname = url.pathname;
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const categorie = pathname.length > 1? pathname.slice(1) : null;
        let uri = "";
        if (categorie && categorie === "kids") {
            uri = "?categories.name[]=boys&categories.name[]=girls";
        } else {
            uri = "?categories.name="+categorie;
        }
        const query = "http://localhost:8000/api/articles" + uri;
        axios.get(query)
             .then(res => res.data['hydra:member'])
             .then(data => {
                 setArticles(data);
                })
    }, [pathname]);

    return (
        <div className="row">
            {articles.map((article, i)=><ArticleCard key={i} image={article.image} name={article.name} description={article.description} />)}
        </div>
    );
}

export default ArticleDisplay;