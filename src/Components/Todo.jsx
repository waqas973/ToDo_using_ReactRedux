import React from 'react';
import { useState } from 'react';
import {AddItem,DeleteItem,ClearAll} from '../Actions/Action';

import { getData } from '../Selectors/Selector';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

 function Todo(props) {
    const [Input , setInput] = useState('');
     const list = useSelector((state)=>state.lists);
     const dispatch = useDispatch();
       
    return (
        <div className='main-div'> 
        <div className="child-div">
            <div className='crud'>crud Operation in Todo</div>
            <div className="addItems">
                <input type="text" placeholder="Add items" autoComplete="off" id="" value={Input} onChange={(e)=>setInput(e.target.value)} /> 
             <i className="fas fa-plus add-btn" name="AddItem" onClick={()=>dispatch(AddItem(Input),setInput(''))}  title="Add items"  ></i> 
             </div> 
             <div className="showItems">
                 {
                     list.map((item)=>{
                         return  <div className="eachItem " key={item.id} >
                         <h3>{item.data}</h3>
                        <div className="todo-btn">
                             {/* <button className="far fa-edit  add-btn" title="Edit Items" onClick={()=>handleEdit(item.id)}></button> */}
                            <i className="far fa-trash-alt  add-btn"  onClick={()=>dispatch(DeleteItem(item.id))} title="Delete Items"></i>
                         </div>          
                     </div>
                     })
                 } 
               
             </div>
             <div className="showItems">
                <button className="btn effect04" onClick={()=>dispatch(ClearAll())} data-sm-link-text="Remove All" ><span>CHECK LIST</span></button>
             </div>
         </div> 
      </div>
    )
}


export default  Todo;