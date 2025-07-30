import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from './supabase'

export default function SummaryPage() {
  const [crewmates, setCrewmates] = useState([])

  useEffect(() => {
    async function fetchCrewmates() {
      const { data } = await supabase
        .from('crewmates')
        .select()
        .order('created_at', { ascending: false })
      setCrewmates(data)
    }
    fetchCrewmates()
  }, [])

  const colorCounts = crewmates.reduce((acc, c) => {
    const color = c.color.toLowerCase()
    acc[color] = (acc[color] || 0) + 1
    return acc
  }, {})

  return (
    <div className="summary-page">
      <h2 className="summary-heading">Crewmates Summary</h2>

      <div className="crewmate-list">
        {crewmates.map((c) => (
          <div key={c.id} className="crewmate-card">
            <Link to={`/crewmate/${c.id}`} className="crewmate-link">
              {c.name} ({c.type} - {c.color})
            </Link>{' '}
            | <Link to={`/edit/${c.id}`} className="edit-link">Edit</Link>
          </div>
        ))}
      </div>

      {crewmates.length > 0 && (
        <div className="stats-box">
          <h3>Stats</h3>
          <p>Total: {crewmates.length}</p>
          {Object.entries(colorCounts).map(([color, count]) => (
            <p key={color}>
              {color.charAt(0).toUpperCase() + color.slice(1)} Crewmates: {count}
            </p>
          ))}
          <p>Types: {Array.from(new Set(crewmates.map(c => c.type))).join(', ')}</p>
        </div>
      )}
    </div>
  )
}
