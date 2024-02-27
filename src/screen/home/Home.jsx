import { ListIcon, Menu, TitleAnimation } from '../../components';
import './home.scss';

const Home = () => {
    return (
        <section className='home'>
            <Menu></Menu>
            <TitleAnimation></TitleAnimation>
            <ListIcon></ListIcon>
        </section>
    );
};

export default Home;