import { useState } from 'react'
import { supabase } from './supabase'
import { useNavigate } from 'react-router-dom'

export default function CreateCrewmate() {
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [color, setColor] = useState('')
  const navigate = useNavigate()

  const createCrewmate = async (e) => {
    e.preventDefault()
    const { error } = await supabase.from('crewmates').insert([{ name, type, color }])
    if (!error) navigate('/')
  }

  return (
    <form onSubmit={createCrewmate}>
      <h2>Create Crewmate</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <select value={type} onChange={(e) => setType(e.target.value)} required>
        <option value="">Select Type</option>
        <option value="Sword">Sword</option>
        <option value="Brawler">Brawler</option>
        <option value="Mage">Mage</option>
        <option value="Heavy">Heavy</option>
      </select>
      <select value={color} onChange={(e) => setColor(e.target.value)} required>
        <option value="">Select Color</option>
        <option value="Red">Red</option>
        <option value="Blue">Blue</option>
        <option value="Green">Green</option>
        <option value="Yellow">Yellow</option>
      </select>
      <button type="submit">Create</button>
    </form>
  )
}
