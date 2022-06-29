import React from 'react';


import '../styles/animatedCards.css';
import cardPoster from '../assets/images/bg/a1.jpg';



class AnimatedCards extends React.Component{
    render(){
        return(
            <div className="card-container-parent">
            <div className="container">
                <div className="card-grid">
                    <div className="card">
                        <div className="image">
                            <img src={cardPoster} alt="image" />
                        </div>
                        <div className="text1">
                            <h2>This is card</h2>
                            <p>This is the random text on card which will be visible initially</p>
                        </div>
                        <div className="text2">
                            <p>This is the random text on card which will be invisible initially and then be visible on hover</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
       
    }
};

export default AnimatedCards;