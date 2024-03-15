import React, { useEffect } from 'react';
import './preloader2.scss';
import PropTypes from 'prop-types';

const Preloader2 = ({setIsLoading}) => {

    useEffect(()=> {
        setTimeout(()=> {
            document.querySelector('#preloader').classList.add('preloaded')
        }, 2000)
        setTimeout(()=> {
            setIsLoading(false)
        }, 2800)
    }, [])
    return (
        <div id='preloader'>
            <div className='loader_line'></div>
        </div>
    );
};

Preloader2.propTypes = {
    setIsLoading: PropTypes.func
}

export default Preloader2;