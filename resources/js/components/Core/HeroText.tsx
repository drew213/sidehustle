import { useEffect, useState } from 'react';

const HeroText = () => {
    const [currentText, setCurrentText] = useState<number>(0);

    const texts: string[] = [
        ' Welcome to the Age of Reason !!',
        'Make Your SideH your MainH !!',
        'Let us Improve What you do -',
        'And How you do it !!',
        "We don't get PAID till you do !!",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentText((prev) => (prev + 1) % texts.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [texts.length]);

    return <h1>{texts[currentText]}</h1>;
};

export default HeroText;
