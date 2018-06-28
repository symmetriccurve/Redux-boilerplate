import React, { Component } from 'react';

//redux
import { connect } from 'react-redux'

//styles
import '../styles/App.css';

//components
import MyListContainer from './MyListContainer'

//Actions
import { requestAPIResponse } from '../actions/apiActions'
import { removeFromMylist, addToMylist } from '../actions/userActions'

class App extends Component {
  componentDidMount(){
    this.props.requestAPIResponse()
  }

  handleRemoveFromMyList(removeItem){
      let newMyList = []
      let { recommendations, myList } = this.state
      myList.forEach((eachItem)=>{
          if(removeItem.id != eachItem.id){
              newMyList.push(eachItem)
          }else{
            recommendations.push(eachItem)
          }
       })

       this.setState({
         myList: newMyList
       })
  }

  handleAddItemToMyList(addItem){
    let newRecommendation = []
    let { recommendations, myList } = this.state
    recommendations.forEach((eachItem)=>{
        if(addItem.id != eachItem.id){
            newRecommendation.push(eachItem)
        }else{
          myList.push(eachItem)
        }

        this.setState({
            recommendations: newRecommendation,
            myList
        })
     })
  }


  render() {
    return (
      <div className="App">
          <div className='header'>
              <img className='netflix-txt' src={"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2000px-Netflix_2015_logo.svg.png"}/>
          </div>
          <div>
              <span className='header-text'>My List</span>
          </div>
          <MyListContainer myList = {this.props.mylist}  hoverMessage={'Remove'} handleModifyMovies={(removeMovie)=>this.props.removeFromMylist(removeMovie)}/>
          <div className='header-text'>
              <span className='header-text'>Recommendations</span>
          </div>
          <MyListContainer myList = {this.props.recommendations}  hoverMessage={'Add'}  handleModifyMovies={(addMovie)=>this.props.addToMylist(addMovie)}/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
    return {
       requestAPIResponse: ()=>dispatch(requestAPIResponse()),
       addToMylist: (addMovie)=>dispatch(addToMylist(addMovie)),
       removeFromMylist: (removeMovie)=>dispatch(removeFromMylist(removeMovie)),
    }
}

function mapStateToProps(state){
    return {
       mylist: state.moviesReducer.mylist,
       recommendations: state.moviesReducer.recommendations
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
