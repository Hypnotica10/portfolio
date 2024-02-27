import { ListIcon, Menu, TitleAnimation, TitleAnimationCss } from '../../components';
import './home.scss';

const Home = () => {
    return (
        <section className='home'>
            <Menu></Menu>
            {/* <TitleAnimation></TitleAnimation> */}
            <TitleAnimationCss></TitleAnimationCss>
            <ListIcon></ListIcon>
        </section>
    );
};

export default Home;