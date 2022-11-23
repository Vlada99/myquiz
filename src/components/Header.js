import React from 'react';
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <div>
      <Link to="/">Start</Link>
      <Link to="/quiz">Quiz</Link>
    </div>
  )
}
