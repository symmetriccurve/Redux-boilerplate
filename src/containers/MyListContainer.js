import React, { Component } from 'react';
import MovieThumbnail from '../components/MovieThumbnail'
import { connect } from 'react-redux'

class MyListContainer extends Component {
  render() {

    if(!this.props.myList.length){
      return(
          <div>
                {
                  this.props.hoverMessage == 'Remove' ?
                    <span className='no-items-text'>Try adding few items to show up on list</span> :
                    <span className='no-items-text'> That is all the recommendations we have for you</span>
                }
              }
          </div>
      )
    }

    return (
      <div className='main-list-cont'>
        {
          this.props.myList.map((eachItem,i)=>{
            return (
              <div className='list-cont' key={eachItem.id}>
                  <MovieThumbnail hoverMessage={this.props.hoverMessage} eachListItem={eachItem} handleModifyMovies={(removeItem)=>this.props.handleModifyMovies(removeItem)}/>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default MyListContainer
