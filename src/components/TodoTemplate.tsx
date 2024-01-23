import React from 'react'
import "./TodoTemplate.scss"

interface TodoTemplateProps {
    children: React.ReactNode
}

const TodoTemplate:React.FC<TodoTemplateProps> = ({children}) => {
  return (
    <div className='TodoTemplate'>
        <div className='app-title'>일정관리</div>
        <div className='content'>{children}</div>
    </div>
  )
}

export default TodoTemplate