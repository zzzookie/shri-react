import React from 'react'

export default function Spinner() {
  return (
    <div
      className='page-container'
      style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', minHeight: '70vh', maxHeight: '100%' }}
    >
      <span className="spinner"></span>
    </div>
  )
}
