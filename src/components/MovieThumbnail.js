import React, { Component } from 'react';

const MovieThumbnail = (props)=>{
  return (
      <div className='thumbnail-cont'>
          <img src={props.eachListItem.img} className='thumbnail'/>
            <button className='btn' onClick={()=>props.handleModifyMovies(props.eachListItem)}> {props.hoverMessage} </button>
      </div>
  );
}
export default MovieThumbnail;
