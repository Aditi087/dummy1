import React,{useState} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {addTODO} from "../action/index";
import "./todo.css"



export const Todo = () => {

    const [inputData, setinputData] = useState('');
    const list = useSelector(state => state.TodoReducer.list)
    const dispatch = useDispatch();

    return (
        <div id="todo">
            <div>
                <figure>
                    <figcaption>
                        Add your list here
                    </figcaption>
                </figure>
                <div id="add-item">
                    <input type="text" placeholder='Add items' 
                    value={inputData}
                    onChange={(event) => setinputData(event.target.value)}></input>
                    <i className='fa fa-plus add-btn' onClick={()=>dispatch(addTODO(inputData),
                        setinputData(''))}></i>
                </div>
                <div id="list">
                    {
                        list.map((e)=>{
                            return(
                                <div key={e.id}>
                                    <h5>{e.data}</h5>
                                    {/* <i className="far fa-trash-alt add-btn" title='Delete Item' onClick={()=>dispatch(deleteTODO(inputData),
                                        setinputData(''))}></i> */}
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>
        </div>
    )
}
