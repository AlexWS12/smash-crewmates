import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from './supabase'

export default function CrewmateDetail() {
  const { id } = useParams()
  const [crewmate, setCrewmate] = useState(null)

  useEffect(() => {
    async function fetchCrewmate() {
      const { data } = await supabase.from('crewmates').select().eq('id', id).single()
      setCrewmate(data)
    }
    fetchCrewmate()
  }, [id])

  if (!crewmate) return <p>Loading...</p>

  return (
    <div className="crewmate-detail">
      <h2>{crewmate.name}</h2>
      <p>Type: {crewmate.type}</p>
      <p>Color: {crewmate.color}</p>
    </div>
  )
}
