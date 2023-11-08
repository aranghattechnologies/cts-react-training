
import React, { useEffect,useState } from 'react';


function FavQuotes() {

     let [quotes, setQuotes] = useState([]);
     let [fetchStatus,setFetchStatus] = useState(true);

     useEffect( () => {
                window.fetch("https://dummyjson.com/quotes")
                            .then(response => response.json())
                         .then(data => {
                                 setQuotes(data.quotes);
                                 setFetchStatus(false);
                         });
     }, []);

     useEffect(() => setFetchStatus(false),[quotes]);

    return (
        <div className=''>
                {fetchStatus ?
                    <span><div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                    
                  </div>Loading... </span>: quotes.map((quote,index) => 
                        <div key={index} className='card m-2'>
                            <div className='card-body'>
                                <i>{quote.quote}</i>
                                <strong>{quote.author}</strong>
                            </div>
                        </div>)
                }
        </div>
    );
}

export default FavQuotes;
