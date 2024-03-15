import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './preloader.scss'

const Preloader = ({ setIsLoading, isLoading }) => {

    useEffect(()=> {
        setTimeout(()=> {
            document.querySelector('.preloader').classList.add('preloaded');
        }, 3000)
        setTimeout(()=> {
            setIsLoading(false);
        }, 3400)
    }, [])

    return (
        <div className={`preloader ${isLoading ? '' : 'isLoaded'}`}>
            <div className='bounceball'></div>
        </div>
    )
}

Preloader.propTypes = {
    setIsLoading: PropTypes.func,
    isLoading: PropTypes.bool
}

export default Preloader;