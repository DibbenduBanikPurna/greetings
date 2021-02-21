import React from 'react';

const Greet = (props) => {

    let greet;
    props.familiar?
        greet= <p>Welcome,My Friend</p>
        : greet=<p>Who The Hello Are You?</p>
        let food;
        props.familiar?food= <p>I Will Buy Food For You</p>: food= <p>Let,s Eat is His His Hoos Hoss</p>
        let conncet;
        props.familiar ? conncet= <p>Let,s Join My Facebook</p>: conncet= <p>I Don,t Add Stranger</p>
    
    return (
        <div>
            <h5>Greetings</h5>
           {greet}
           
            
            <h5>Food</h5>
           
          {food}
            
            <h5>Connection</h5>
           {conncet}
           
        </div>
    );
};

export default Greet;