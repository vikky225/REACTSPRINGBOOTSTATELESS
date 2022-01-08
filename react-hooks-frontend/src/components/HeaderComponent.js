import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
const HeaderComponent = () => {
   
    return (
        <div>
            <header>
                <nav className = "navbar nabvar-expand-md navbar-dark bg-dark"></nav>
                <div>
                    <a href = "https://vikky.com" className ="navbar-brand">Employee Managment system</a>
                </div>
            </header>
        </div>
    )
}

export default HeaderComponent
