import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import CreateCrewmate from "./CreateCrewmate"
import SummaryPage from "./SummaryPage"
import EditCrewmate from "./EditCrewmate"
import CrewmateDetail from "./CrewmateDetail"

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Summary</Link> | <Link to="/create">Create Crewmate</Link>
      </nav>
      <Routes>
        <Route path="/" element={<SummaryPage />} />
        <Route path="/create" element={<CreateCrewmate />} />
        <Route path="/edit/:id" element={<EditCrewmate />} />
        <Route path="/crewmate/:id" element={<CrewmateDetail />} />
      </Routes>
    </Router>
  )
}
