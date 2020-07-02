import React, { FunctionComponent } from 'react';
import css from './Header.module.scss';

type HeaderProps = {
    title: string
    subtitle?: string
};

const header:FunctionComponent<HeaderProps> = props => (
    <header className={css.header}>
        <div className="container">
            <div className={css.top}>
                <img className={css.logo} src="/img/allegro.png" alt="Austin Allegro"/>
                <div>
                    <h1 className={css.title}>{props.title}</h1>
                    {props.subtitle && <p className={css.subtitle}>{props.subtitle}</p>}
                </div>
            </div>
        </div>
        <nav className={css.nav}></nav>
    </header>
);

export default header;