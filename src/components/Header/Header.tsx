import React, { FunctionComponent } from 'react';
import css from './Header.module.scss';

type HeaderProps = {
    title: string
};

const header:FunctionComponent<HeaderProps> = props => (
    <header className={css.header}>
        <div className="container">
            <h1 className={css.title}>{props.title}</h1>
        </div>
        <nav className={css.nav}></nav>
    </header>
);

export default header;