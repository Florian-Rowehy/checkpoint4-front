import React, {useState, useEffect}  from "react";
import { useParams } from 'react-router-dom'
import articlesAPi from '../Service/articlesAPI';
import usersAPI from "../Service/usersAPI";


const Article = (props) => {
    const [article, setArticle] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        articlesAPi.findArticle(id)
             .then(data => {
                setArticle(data);
                })
             .catch(e => {console.log(e);})
    }, [id]);
    
    const addToCart = () => {
        try {
            usersAPI
                .addToCart(id)
                .then(()=>{props.history.replace('/cart');});
        } catch(e) {
            console.log(e);
        }
    }

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
                <p className='my-0'>Brand: {capitalize(article.brand.name)}</p>
                <p className='my-0'>Category: {article.categories.map((category, i)=><span key={i}>{capitalize(category.name)}</span>)}</p>
                <p className='mt-0'>Classification: {capitalize(article.articleClassification.name)}</p>
                <p>
                    Price: {article.price}€ 
                    <button className="border-0 bg-transparent" type="button" onClick={addToCart}>
                        <i className="fas fa-cart-arrow-down" style={style}></i>
                    </button>
                </p>
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

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

export default Article;
