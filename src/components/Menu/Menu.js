import React from 'react'
import { Link } from 'gatsby'
import './Menu.scss'

export default function Menu() {
    return (
        <div className="menu">
            <Link to='/'>
                <h2>Blog developer</h2>
            </Link>
            <p>
                Blog sobre desarrollo web, programación JavaScript, React, Node, Electron, Next, Angular...
            </p>
            <h5>Social Media</h5>
            <h5>Lista de cursos</h5>
        </div>
    )
}
