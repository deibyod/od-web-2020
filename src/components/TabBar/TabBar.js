import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

import './tab-bar.scss';


class TabBar extends Component {
    render() {
        return(
            <div className="tab-bar-container">
                <h1>PERFILES</h1>

                <ul className='tab-bar'>
                    <li>
                        <NavLink to="enterprise-agile-coach" className={({isActive}) => (isActive ? "active" : "")}>
                            Enterprise Agile Coach
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="software-developer" className={({isActive}) => (isActive ? "active" : "")}>
                            Software Developer
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="private-investor" className={({isActive}) => (isActive ? "active" : "")}>
                            Inversor Privado
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="online-store" className={({isActive}) => (isActive ? "active" : "")}>
                            Tienda Online
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="personal" className={({isActive}) => (isActive ? "active" : "")}>
                            Personal
                        </NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}

export default TabBar;