import PropTypes from 'prop-types';
import './section.scss';
import { IoClose } from "react-icons/io5";

const Section = ({ children, handleClickBackToHome }) => {
    return (
        <section className='section'>
            <div className='container'>
                <div className='lightbox-close' onClick={handleClickBackToHome}>
                    <IoClose size={30} />
                </div>
                <div className='lightbox-content'>
                    {children}
                </div>
            </div>
        </section>
    );
};

Section.propTypes = {
    children: PropTypes.element.isRequired,
    handleClickBackToHome: PropTypes.func
}

export default Section;