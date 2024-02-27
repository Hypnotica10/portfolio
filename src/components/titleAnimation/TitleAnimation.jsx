import './titleAnimation.scss'
import { listDescDynamic } from '../../data';
import { useTypeWritter } from './useTypeWritter';


const TitleAnimation = () => {
    const {currentText, currentWord, currentStep} = useTypeWritter(listDescDynamic);

    return (
        <div className='home-content container'>
            <h1 className='name'>Emma Smith</h1>
            <h4 className='desc'>
                I&lsquo;m a <span aria-label={currentWord} className={`desc-dynamic ${currentStep === 'pausing' ? 'blink' : ''}`}>{currentText}</span>
            </h4>
        </div>
    );
};

export default TitleAnimation;