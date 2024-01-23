import React, { useCallback, useState } from 'react'
import { MdEast } from 'react-icons/md';
import "./TodoInsert.scss"

interface TodoInsertProps {
    onInsert:(text: string) => void;
}

const TodoInsert:React.FC<TodoInsertProps> = ({onInsert}) => {
    const [value, setValue] = useState("");
  
    const onChange = useCallback((e:React.ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value);
    },[])

    const onSubmit = useCallback((e:React.FormEvent)=>{
        onInsert(value);
        setValue("");
        e.preventDefault();
    },[onInsert, value])

    return (
    <form className='TodoInsert'>
        <input 
            value={value}
            onChange={onChange}
            placeholder='할일을 적어주세요'
        />
        <button type='submit' onClick={onSubmit}>
            <MdEast />
        </button>
    </form>
  )
}

export default TodoInsert;