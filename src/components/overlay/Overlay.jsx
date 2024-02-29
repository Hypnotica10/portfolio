import './overlay.scss'
import PropTypes from 'prop-types';

const Overlay = ({ classActive }) => {
    return (
        <div id='overlay' className={classActive}></div>
    );
};

Overlay.propTypes = {
    classActive: PropTypes.string
}
export default Overlay;