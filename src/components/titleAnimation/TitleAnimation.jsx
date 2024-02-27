import { useState } from 'react';
import './titleAnimation.scss'
import { useEffect } from 'react';
import { listDescDynamic } from '../../data';


const TitleAnimation = () => {
    const [indexWord, setIndexWord] = useState(0);
    const [currentChar, setCurrentChar] = useState(0)
    const [currentText, setCurrentText] = useState('');
    const [word, setWord] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    useEffect(() => {
        const typeWritter = setTimeout(() => {
            if (!isDeleting && currentChar < word.length) {
                setCurrentChar(currentChar => currentChar + 1);
                setCurrentText(currentText => currentText + word.charAt(currentChar));
            } else if (isDeleting && currentChar >= 0) {
                if (currentChar === 0) {
                    console.log(indexWord);
                    indexWord < listDescDynamic.length - 1 ? setIndexWord(indexWord => indexWord + 1) : setIndexWord(0);
                    setWord(listDescDynamic[indexWord]);
                    setIsDeleting(!isDeleting)
                }
                setCurrentChar(currentChar => currentChar - 1);
                setCurrentText(word.substring(0, currentChar));
            } else if (currentChar == word.length) {
                setIsDeleting(!isDeleting);
            }
            // setIndexWord(indexWord => (indexWord + 1) % word.length);
        }, 50)

        return () => {
            clearTimeout(typeWritter);
        }

    }, [currentText, currentChar, isDeleting, word])

    return (
        <div className='home-content container'>
            <h1 className='name'>Emma Smith</h1>
            <h4 className='desc'>
                I&lsquo;m a <span className='desc-dynamic'>{currentText}</span>
            </h4>
        </div>
    );
};

export default TitleAnimation;