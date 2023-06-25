import React from 'react'

export default function Card({ title, description }:
  { title: string, description?: string | string[] }): JSX.Element {
  return (
    <div className="card" style={{ gap: '1rem' }}>
      <div style={{ fontSize: '2rem', fontWeight: 600 }}>{title}</div>
      {Array.isArray(description)
        ? (
          <div className='fv g1'>
            {description.map((paragr, i) => <p key={i} className='fv g1'>{paragr}</p>)}
          </div>
        )
        : description && <p className='fv g1'>{description}</p>}
    </div>
  )
}
