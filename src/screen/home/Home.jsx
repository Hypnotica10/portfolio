import { ListIcon, Menu, TitleAnimation } from '../../components';
import PropTypes from 'prop-types';
import './home.scss';

const Home = ({ handeClickChangeScreen }) => {
    return (
        <section className='home'>
            <Menu handeClickChangeScreen={handeClickChangeScreen}></Menu>
            <TitleAnimation></TitleAnimation>
            <ListIcon classListIcon='list-icon'></ListIcon>
        </section>
    );
};

Home.propTypes = {
    handeClickChangeScreen: PropTypes.func
}

export default Home;