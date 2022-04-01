import React from 'react';
import SingleNewsItem from './SingleNewsItem';

function News ({ news }){
    return (
        <div>
			{news.map(item => <SingleNewsItem title={item.title} id={item.id} key={item.id}/>)}
        </div>
    );
}

export default News;