import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import css from './Nav.module.scss';

const links = [
    { path: '/', text: 'Home' },
    { path: '/checkout', text: 'Checkout' },
]

type NavProps = {

};

const nav:FunctionComponent<NavProps> = props => (
    <nav className={css.nav}>
        <ul className={`container ${css.list}`}>
            {links.map(link => (
                <li className={css.listItem}>
                    <Link className={css.link} to={link.path}>{link.text}</Link>
                </li>
            ))}

            <li className={`${css.listItem} ${css.basketItem}`}>
                <Link className={css.link} to='/basket'>Basket</Link>
            </li>
        </ul>
    </nav>
);

export default nav;