import './titleAnimationCss.scss'
import { listDescDynamic } from '../../data';
import { useEffect, useState } from 'react';


const TitleAnimationCss = () => {
    
    return (
        <div className='home-content container'>
            <h1 className='name'>Emma Smith</h1>
            <h4 className='desc'>
                <div className='desc-static'>I&lsquo;m a</div>
                <ul className='desc-dynamic'>
                    {listDescDynamic && listDescDynamic.map((item => (
                        <li key={item}>
                            <span style={{ animationTimingFunction: item.length }}>{item}</span>
                        </li>
                    )))}
                </ul>
            </h4>
        </div>
    );
};

export default TitleAnimationCss;