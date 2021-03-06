import React, { useEffect, useState } from 'react';
import News from '../News/News';

const Headline = () => {
    const [articles,setArticles] = useState([])
    useEffect(()=>{
        fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=aa83b5d287e94483bdf47a0a22137b91`)
        .then(res =>res.json())
        .then(data=> setArticles(data.articles))
    },[])
    return (
        <div>
           <h1>TopNews: {articles.length}</h1>
           {
               articles.map(article => <News article={article}></News>)
           }           
        </div>
    );
};

export default Headline;