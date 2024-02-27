import { useEffect } from 'react';
import PropTypes from 'prop-types';
import './preloader.scss'

const Preloader = ({ setIsLoading }) => {
    useEffect(() => {
        setTimeout(()=> {
            document.querySelector('.preloader').classList.add('loaded');
        }, 1500);
        setTimeout(()=> {
            setIsLoading(false);
        }, 2200);
    }, [])

    return (
        <div className='preloader'>
            <div className="line"></div>
        </div>
    )
}

Preloader.propTypes = {
    setIsLoading: PropTypes.func
}

export default Preloader;