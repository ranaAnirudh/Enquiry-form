import React , {useState} from 'react'
import './Message.css'
import '../input.css'
import { setUserLoginDetails } from '../features/UserLoginSlice'
import {useDispatch} from 'react-redux'

const initialState={
    reference:"",
    email:"",
    emp_code:"",
    department:"",
    position:"",
    type:"",
    description:"",
    
}
function Message() {
    const dispatch = useDispatch();
    const [state, setstate] = useState(initialState);
    const onchangeHandler = e =>{
        setstate({...state,[e.target.name]:e.target.value});
    }
    // console.log(state)
    const submitHandler = e =>{
        e.preventDefault();
        // console.log(state);
        dispatch(
            setUserLoginDetails({
                reference:state.reference,
                email:state.email,
                emp_code:state.emp_code,
                department:state.department,
                position:state.position,
                type:state.type,
                description:state.description,
            })
        )
        for (let [key, value] of Object.entries(state)) {
            console.log(key,value);    
        }
        setstate(initialState);
    }
    return (
        <div className="message">
            <div>
                <input type="checkbox"/>
                <label>Autofill</label>
            </div>
            <form className="message__form" onSubmit={submitHandler}>
                <div className="form">
                    <input 
                        type="text" autoComplete="off" placeholder=" " 
                        className="form__input" id="reference" 
                        value={state.reference} name="reference"
                        onChange={onchangeHandler} required
                    />
                    <label for="reference" className="form__label">Reference To</label>
                </div>
                <div className="form">
                    <input 
                        type="text" autoComplete="off" placeholder=" " 
                        className="form__input" id="email" 
                        name="email" value={state.email}
                        onChange={onchangeHandler} required
                    />
                    <label for="email" className="form__label">Email Address</label>
                </div>
                <div className="form">
                    <input 
                        type="text" autoComplete="off" placeholder=" " 
                        className="form__input" id="emp_code" 
                        name="emp_code" value={state.emp_code}
                        onChange={onchangeHandler} required
                    />
                    <label for="emp_code" className="form__label">Employee Code</label>
                </div>
                <div className="form">
                    <input 
                        type="text" autoComplete="off" placeholder=" " 
                        className="form__input" id="department" 
                        name="department" value={state.department}
                        onChange={onchangeHandler} required
                    />
                    <label for="department" className="form__label">Department</label>
                </div>
                <div className="form">
                    <input 
                        type="text" autoComplete="off" placeholder=" " 
                        className="form__input" id="position" 
                        name="position" value={state.position}
                        onChange={onchangeHandler} required
                    />
                    <label for="position" className="form__label">Position</label>
                </div>
                <div className="form">
                    <input 
                        type="text" autoComplete="off" placeholder=" " 
                        className="form__input" id="type" required
                        name="type" value={state.type}
                        onChange={onchangeHandler}
                    />
                    <label for="type" className="form__label">Type</label>
                </div>
                <label>Description</label>
                <textarea  name="description" onChange={onchangeHandler} 
                    value={state.description} required
                />
                <input type="submit" />
            </form>   
        </div>
    )
}
export default Message


