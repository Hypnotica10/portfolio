import { useEffect } from "react";
import { useState } from "react";

const steps = {
    typing: 'typing',
    pausing: 'pausing',
    deleting: 'deleting'
};

const TYPING_TIME = 200;
const PAUSING_TIME = 1500;
const DELETING_TIME = 120;

export const useTypeWritter = (listWords) => {
    const [currentText, setCurrentText] = useState('');
    const [index, setIndex] = useState(0);
    const [step, setStep] = useState(steps.typing);
    const currentWord = listWords[index];

    useEffect(() => {
        switch (step) {
            case steps.typing: {
                const nextText = listWords[index].slice(0, currentText.length + 1);

                if (nextText === currentText) {
                    setStep(steps.pausing);
                    return;
                }

                const timeout = setTimeout(() => {
                    setCurrentText(nextText);
                }, TYPING_TIME)

                return () => clearTimeout(timeout)
            }

            case steps.deleting: {
                if (!currentText) {
                    const nextIndex = index + 1;
                    setIndex(listWords[nextIndex] ? nextIndex : 0)
                    setStep(steps.typing);
                    return;
                }

                const prevText = listWords[index].slice(0, currentText.length - 1);

                const timeout = setTimeout(() => {
                    setCurrentText(prevText);
                }, DELETING_TIME)

                return () => clearTimeout(timeout)
            }

            case steps.pausing: {
                const timeout = setTimeout(() => {
                    setStep(steps.deleting);
                }, PAUSING_TIME)

                return () => clearTimeout(timeout)
            }
        }
    }, [currentText, index, step])

    return {
        currentText,
        index,
        step,
        currentWord
    }
}