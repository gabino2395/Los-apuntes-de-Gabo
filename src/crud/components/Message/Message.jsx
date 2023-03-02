import React from 'react'

const Message = ({msg,bgColor}) => {
  return (
    <div className='message-box'>
    {/* <p>{msg}</p> */}
    <p dangerouslySetInnerHTML={{ __html: msg }} />
  </div>  )
}

export default Message