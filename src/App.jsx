import { act, useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const initialState={
name:'',
occasion:'',
gift:'',
personalPurchase:'',
gender:'',
lowAge:'',
highAge:'',
religion:'',
jewellery:'',
budget:''

}

const reducer=(state,action)=>{
  switch(action.type){
    case 'name':
      return {...state,name:action.payload};
      case 'occasion':
        return {...state,occasion:action.payload}
        case 'gift':
          return {...state,gift:action.payload}
          case 'personalPurchase':
            return {...state,personalPurchase:action.payload}
            case 'gender':
              return {...state,gender:action.payload}
              case 'lowAge':
                return {...state,lowAge:action.payload}
                case 'highAge':
                  return {...state,highAge:action.payload}
                  case 'religion':
                    return {...state,religion:action.payload}
                    case 'jewellery':
                      return {...state,jewellery:action.payload}
                      case 'budget':
                        return {...state,budget:action.payload}
                        case 'reset':
                          return initialState;
                        default:
                          return state
  }
}

function App() {
  const [state,dispatch]=useReducer(reducer,initialState)
 
  const [submited, setSubmitted] = useState([])

  const HandleSubmit=(e)=>{
   e.preventDefault()
  
   setSubmitted([...submited, { ...state }]);
   dispatch({ type: "reset" });
  }
  return (
    <div>
      <div id='MainContainer'>
     <h2>Input Form</h2>
     <form onSubmit={HandleSubmit}>
    <span>Name:</span>  <input type="text" placeholder='Enter Your Name' name='name' value={state.name} onChange={(e)=>dispatch({type:"name",payload:e.target.value})} />
      <br />
      <br />
      <span>Occasion</span>: <select name='occasion' value={state.occasion} onChange={(e)=>dispatch({type:"occasion",payload:e.target.value})}>
        <option>Select one Occasion</option>
        <option value="Engagement">Engagement</option>
        <option value="Anniversary">Anniversary</option>
        <option value="Birthday">Birthday</option>
        <option value="Daily-Wear">Daily-Wear</option>
      </select>
      <br />
      <br />
      <span>Gift</span><input  type="radio" checked={state.gift === 'gift'} value="gift" onChange={(e)=>dispatch({type:"gift",payload:e.target.value})}   name="purchaseType" id="personalPurchase"  /> <span>Personal Purchase</span> <input type="radio" checked={state.personalPurchase=="personalPurchase"} value="personalPurchase" onChange={(e)=>dispatch({type:"personalPurchase",payload:e.target.value})}  name="purchaseType" id="gift"/>
      <br />
      <br />
      <span>Gender</span>
      <select name='gender' value={state.gender} onChange={(e)=>dispatch({type:"gender",payload:e.target.value})}>
      <option>Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <br />
      <br />
      <span>18 to 25</span> <input checked={state.lowAge=="lowAge"} value="lowAge"  type="radio"  onChange={(e)=>dispatch({type:"lowAge",payload:e.target.value})} name="Age" id="25+" /> <span>25+</span> <input type="radio" name="Age" checked={state.highAge=="highAge"} value="highAge" onChange={(e)=>dispatch({type:"highAge",payload:e.target.value})} id="18To25" />
      <br />
      <br />
      <span>Religion:</span> <select name='religion' value={state.religion} onChange={(e)=>dispatch({type:"religion",payload:e.target.value})}>
      <option>Select Religion</option>
      <option value="Hindu">Hindu</option>
      <option value="Muslim">Muslim</option>
      <option value="Sikh">Sikh</option>
      <option value="Christian">Christian</option>
      </select>
      <br />
      <br />
      <span>Type of jewellery:</span>
       <select name='jewellery' value={state.jewellery} onChange={(e)=>dispatch({type:"jewellery",payload:e.target.value})}>
       <option>Select jewellery</option>
        <option value="rings">rings</option>
        <option value="necklaces">necklaces</option>
        <option value="pendants">pendants</option>
      </select>
      <br />
      <br />
      <span>Budget</span>
      <select name='budget' value={state.budget} onChange={(e)=>dispatch({type:"budget",payload:e.target.value})}>
      <option>Select Budget</option>
        <option value="5000">5000 To 10000</option>
        <option value="10000">10000 To 20000</option>
        <option value="20000+">20000+</option>
      </select>
      <br />
      <button type='submit' id='Btn'>Submit</button>
     </form>
     </div>

     <div id='parentContainer'>
     {submited.length === 0 ? (
    <h2>No Data Found</h2>
  ) : (
    submited.map((ele, index) => (
      <div id='dataContainer' key={index}>
       <h2>{ele.name}</h2>
       <p>{ele.occasion}</p>
       <p>{ele.gift}</p>
       <p>{ele.personalPurchase}</p>
       <p>{ele.gender}</p>
       <p>{ele.lowAge}</p>
       <p>{ele.highAge}</p>
       <p>{ele.religion}</p>
       <p>{ele.jewellery}</p>
       <p>{ele.budget}</p>
      </div>
    ))
  )}
     </div>
    </div>
  )
}

export default App
