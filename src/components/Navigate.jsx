import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Navigate() {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/planet/mercury/overview')
  })
  return <div></div>
}
