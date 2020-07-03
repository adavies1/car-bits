import React, { FunctionComponent } from 'react';
import css from './ProgressBar.module.scss';

type ProgressBarProps = {
    steps: { text: string, status: number }[]
};

const progressBar:FunctionComponent<ProgressBarProps> = props => {
    const activeIndex = props.steps.indexOf(props.steps.find(step => step.status === 1) || props.steps[0]);
    const carLeft = `calc(${(100 / (props.steps.length * 2)) * ((activeIndex * 2) + 1)}% - 30px)`;

    return (
        <div className={css.outer}>
            <div className={css.container}>
                <img className={css.car} src="/img/robin.png" alt="" style={{left: carLeft}}/>
                <ul className={css.list}>
                    {props.steps.map(step => {
                        return (
                            <li className={`${css.step} ${step.status === 1 ? css.active : ''} ${step.status === 2 ? css.complete : ''}`}>
                                <div className={css.dot}></div>
                                <button className={css.button} disabled={step.status === 0}>
                                    {step.text}
                                </button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
};

export default progressBar;
