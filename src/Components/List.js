import React from 'react';
import "../List.css"
import Joke from './Joke';

export default function List(props) {

    var list = props.jokes.map((element, index) => {
        return (

            <Joke
                key={index}
                name={element}
                deleteJoke={() => props.deleteJoke(index)}
                index={index} />

        )
    })

    return (

        <div className="favList">

            <h1>Favorite Jokes:</h1>

            {list}


        </div>

    )
}
