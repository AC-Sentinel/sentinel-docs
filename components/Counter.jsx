import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '16px 20px',
      border: '1px solid var(--nextra-border-color, #e5e7eb)',
      borderRadius: 8,
      margin: '16px 0',
      fontFamily: 'inherit',
    }}>
      <button
        onClick={() => setCount(c => c - 1)}
        style={{
          width: 32, height: 32, borderRadius: 6,
          border: '1px solid currentColor', background: 'none',
          cursor: 'pointer', fontSize: '1.1rem',
        }}
      >−</button>
      <span style={{ fontWeight: 600, minWidth: 24, textAlign: 'center' }}>{count}</span>
      <button
        onClick={() => setCount(c => c + 1)}
        style={{
          width: 32, height: 32, borderRadius: 6,
          border: '1px solid currentColor', background: 'none',
          cursor: 'pointer', fontSize: '1.1rem',
        }}
      >+</button>
      <span style={{ opacity: .6, fontSize: '.85rem' }}>Click to increment / decrement</span>
    </div>
  )
}
