import React from 'react'
import Header from '../header/Header'
import '../posts/posts.scss'

function Todo({ show, setShow }) {
  return (
    <div className='coming'>
            <div className="header-div">
                <Header title={"ToDo"} show={show} setShow={setShow} />
            </div>
            <div className="content">
                <h1>Coming Soon</h1>
            </div>
        </div>
  )
}

export default Todo