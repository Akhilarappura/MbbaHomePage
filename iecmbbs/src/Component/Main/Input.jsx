import React from 'react'

export default function Input({placeholder,type='text'}) {
  return (
<>
<input type={type} style={{height:'30px',borderRadius:'5px',paddingLeft:'5px'}}  placeholder={placeholder}/>    
</>
  )
}
