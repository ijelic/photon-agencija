import React from 'react'
import logo from '../assets/images/logo.png'
class Header extends React.Component {
    render() {
        return (

            <section id="header">

                <div className="inner">


<span className="logo"><img src={logo} alt="" /></span>

                    <h1><strong>SELECTION CONSULTING</strong></h1>
                    <p><span className="icon fa-envelope"> email adresa</span></p>
                    <p><span className="icon fa-phone"> Telefonski broj</span></p>
                    <p><span className="icon fa-map-marker"> Adresa</span></p>


                    <ul className="actions">
                        <li><a href="#one" className="button scrolly">Saznaj više</a></li>
                    </ul>

                </div>
            </section>
        )
    }
}

export default Header
