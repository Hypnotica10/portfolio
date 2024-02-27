import { useEffect } from "react";
import { useState } from "react"

const steps = {
    typing: 'typing',
    pausing: 'pausing',
    deleting: 'deleting'
}

const TYPING_TIME = 200;
const PAUSING_TIME = 1500;
const DELETING_TIME = 100;

export const useTypeWritter = (listWord) => {
    const [currentText, setCurrentText] = useState('');
    const [currentStep, setCurrentStep] = useState(steps.typing);
    const [indexWord, setIndexWord] = useState(0);
    const currentWord = listWord[indexWord];

    useEffect(() => {
        switch (currentStep) {
            case steps.typing: {
                const nextChar = listWord[indexWord].slice(0, currentText.length + 1);

                const timeout = setTimeout(() => {
                    setCurrentText(nextChar)
                }, TYPING_TIME)

                if (nextChar === currentText) {
                    setCurrentStep(steps.pausing);
                    return
                }

                return () => clearTimeout(timeout)
            }

            case steps.deleting: {
                if (!currentText) {
                    const nextIndexWord = indexWord + 1;
                    setIndexWord(listWord[nextIndexWord] ? nextIndexWord : 0);
                    setCurrentStep(steps.typing);
                    return
                }

                const prevChar = listWord[indexWord].slice(0, currentText.length - 1);

                const timeout = setTimeout(() => {
                    setCurrentText(prevChar)
                }, DELETING_TIME)

                return () => clearTimeout(timeout)
            }

            default: {
                const timeout = setTimeout(() => {
                    setCurrentStep(steps.deleting)
                }, PAUSING_TIME)

                return () => clearTimeout(timeout)
            }
        }
    }, [currentStep, currentText, indexWord, currentWord])

    return { currentStep, currentText, currentWord, indexWord };
}