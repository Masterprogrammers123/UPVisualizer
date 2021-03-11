import React from 'react'
import { render } from 'react-dom'

export default function App(props) {
    return (
        <div className="center">
            <h1>TEST</h1>
        </div>
    )
}

const appDiv = document.getElementById('app')
render(<App />, appDiv)
