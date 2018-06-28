const defaultState = {
    mylist: [],
    recommendations: []
}

function moviesReducer(previousState = defaultState,action){
    let newState = JSON.parse(JSON.stringify(previousState))
    switch ( action.type ) {
      case 'RESPONSE_RECEIVED': {
        debugger
          const nextState = Object.assign( {}, previousState, action.response )
          console.log(nextState)
          return nextState
      }
        break;

      case 'ADD_TO_MY_LIST': {
          const currentRecommendations = previousState.recommendations
          const newRecommendations = []
          currentRecommendations.forEach(eachMovie=>{
              if(eachMovie.id != action.movie.id){
                  newRecommendations.push(eachMovie)
              }
          })
          return Object.assign( {},
                          previousState,
                          {
                            recommendations: newRecommendations,
                            mylist: [...previousState.mylist, action.movie]
                          }
                      )
      }
        break;

      case 'REMOVE_FROM_MY_LIST': {
        const currentMylist = previousState.mylist
        const newMylist = []
        currentMylist.forEach(eachMovie=>{
            if(eachMovie.id != action.movie.id){
                newMylist.push(eachMovie)
            }
        })

        return Object.assign( {},
                      previousState,
                      {
                        recommendations: [...previousState.recommendations, action.movie],
                        mylist: newMylist
                      }
                  )
      }
        break;

      default:
          return previousState
    }
}

module.exports = moviesReducer
