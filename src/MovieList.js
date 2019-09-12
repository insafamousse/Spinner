import React from 'react';
import MovieC from './MovieC';

import LoadingHOC from './LoadingHOC';


const MovieList = ({movies}) => {
 
    return ( 
        <div>
           <div className='list-movie'>
        
        {movies.map(el=><MovieC key={el.id} Y={el}/>)}
        </div> 
        </div>
     );
}
 
export default LoadingHOC(MovieList);
