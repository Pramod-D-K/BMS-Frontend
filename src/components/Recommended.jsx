import React from 'react'
import './Recommended.css';
import { movies } from '../utils/constants';


const Recommended = () => {
  return (
    <div className='outer-movie-container'>
        <div className='inner-movie-container'>
            <div className='naming-container'>
                <h2 className='movies-naming'>Recommended Movies</h2>
                <span className='see-all-tag'>See All&gt; </span>
            </div>
            <div className='movie-grid'>
                    {
                        movies.map((movie, i)=>(
                            <div className='rec-movie-container'>
                                <img 
                                className='movie-image'
                                src={movie.img} alt={`movie ${i}`} />
                            </div>
                        ))
                    }
                

            </div>
        </div>
    </div>
  )
}

export default Recommended