import React, {useState, useEffect}  from "react";
import { useParams } from 'react-router-dom'
import articlesAPi from '../Service/articlesAPI';

const Article = (props) => {
    const [article, setArticle] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        articlesAPi.findArticle(id)
             .then(data => {
                setArticle(data);
                console.log(data);
                })
             .catch(e => {console.log(e);})
    }, [id]);
    
    const style = {
        color: '#5f8b2f',
        fontSize: '1.5rem',
        cursor: 'pointer',
    }

    if (article) {
        return (
            <div className='container'>
                <h2 className='text-center'>{article.name}</h2>
                <img className='mx-auto mb-2' src={article.image} alt=""/>
                <p className='my-0'>Brand: {article.brand.name}</p>
                <p className='my-0'>Category: {article.categories.map((category, i)=><span key={i}>{category.name}</span>)}</p>
                <p className='mt-0'>Classification: {article.articleClassification.name}</p>
                <p>Price: {article.price}€ <i className="fas fa-cart-arrow-down" style={style}></i></p>
                <div>
                    <p className='mb-0'>Description:</p>
                    <p>{article.description}</p>
                </div>
            </div>
        );
    } else {
        return (
            <div>This article might not exist.</div>
        )
    }
    
}

export default Article;
