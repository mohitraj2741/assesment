import React,{useState} from 'react'
import './Cards.css'

function Cards({amount}) {


    const [upstate, setUpstate] = useState(Array(amount).fill( false));
    const toggleFlip=(i)=>{
      let ids = [...Array(amount).fill( false)];     // create the copy of state array
ids[i] = true;                  //new value
setUpstate(ids );
    }


    return (<> 
    {/*  jsx fragment used */ }
    <div>{amount}</div>
    {/* <div className='Parent'>
    {Array.from(Array(amount), (e, i) => {
    return (<>
    <div >{upstate[i]===false?"Down":"Up"}</div>
    </>)
    })}
        </div> */}

    <table className='wholetable'>
      <tbody>
      <tr>
      {Array.from(Array(amount), (e, i) => {
      return (<td className='onecard'  onClick={() => toggleFlip(i)}>{upstate[i]===false?"Down":"Up"}</td>)
      })}
      </tr>
      </tbody>
      </table> 
    </>
  )
}

export default Cards