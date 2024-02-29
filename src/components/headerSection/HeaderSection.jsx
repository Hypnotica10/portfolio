import './headerSection.scss';
import PropTypes from 'prop-types';

const HeaderSection = ({desc, title}) => {
    return (
        <div className='section-header'>
            <p className='section-desc'>{desc}</p>
            <h2 className='section-title'>{title}</h2>
            <div className='line'></div>
        </div>
    );
};

HeaderSection.propTypes = {
    desc: PropTypes.string,
    title: PropTypes.string
}

export default HeaderSection;