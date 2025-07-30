import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { supabase } from './supabase'

export default function EditCrewmate() {
  const { id } = useParams()
  const [crewmate, setCrewmate] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    async function getCrewmate() {
      const { data } = await supabase.from('crewmates').select().eq('id', id).single()
      setCrewmate(data)
    }
    getCrewmate()
  }, [id])

  const updateCrewmate = async (e) => {
    e.preventDefault()
    await supabase.from('crewmates').update(crewmate).eq('id', id)
    navigate('/')
  }

  const deleteCrewmate = async () => {
    await supabase.from('crewmates').delete().eq('id', id)
    navigate('/')
  }

  if (!crewmate) return <p>Loading...</p>

  return (
    <form onSubmit={updateCrewmate}>
      <h2>Edit Crewmate</h2>
      <input value={crewmate.name} onChange={(e) => setCrewmate({ ...crewmate, name: e.target.value })} />
      <select value={crewmate.type} onChange={(e) => setCrewmate({ ...crewmate, type: e.target.value })}>
        <option value="Sword">Sword</option>
        <option value="Brawler">Brawler</option>
        <option value="Mage">Mage</option>
        <option value="Heavy">Heavy</option>
      </select>
      <select value={crewmate.color} onChange={(e) => setCrewmate({ ...crewmate, color: e.target.value })}>
        <option value="Red">Red</option>
        <option value="Blue">Blue</option>
        <option value="Green">Green</option>
        <option value="Yellow">Yellow</option>
      </select>
      <button type="submit">Update</button>
      <button type="button" onClick={deleteCrewmate}>Delete</button>
    </form>
  )
}
