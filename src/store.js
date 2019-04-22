import { createStore } from 'redux'

const initialState = {
  name: '', 
  category: '', 
  authorFirst: '',
  authorLast: '',
  ingredients:[], 
  instructions: [], 
  recipes: []

}

export const UPDATE_NAME= "UPDATE_NAME"
export const UPDATE_CAT="UPDATE_CAT"
export const UPDATE_FIRSTNAME="UPDATE_FIRSTNAME"
export const UPDATE_LASTNAME="UPDATE_LASTNAME"
export const UPDATE_INGREDIENTS= 'UPDATE_INGREDIENTS'
export const UPDATE_INSTRUCTIONS= 'UPDATE_INSTRUCTIONS'
export const ADD_RECIPE= 'ADD_RECIPE'


function reducer(state=initialState, action ) {

const {type, payload} = action

  switch(type){
    case UPDATE_NAME:
    return {...state, name:payload}

    case UPDATE_CAT:
   return {...state, category:payload}

   case UPDATE_FIRSTNAME:
   return {...state, authorFirst:payload}

   case UPDATE_LASTNAME:
   return {...state, authorLast:payload}

    case UPDATE_INGREDIENTS:
    return {...state, ingredients:[...state.ingredients, payload]}
    
    case UPDATE_INSTRUCTIONS: 
    return {...state, instructions:[...state.instructions, payload]}
    
    case ADD_RECIPE: 

    const {
      name, 
      category, 
      authorFirst, 
      authorLast, 
      ingredients, 
      instructions
    }= state
    const recipe = {
      name,
      category, 
      authorFirst, 
      authorLast, 
      ingredients, 
      instructions
    }
    
    const newRecipes= [...state.recipes, recipe]

    return {...state, recepies: newRecipes}

    default:
    return state;
  }

}




export default createStore(reducer)