import { useState } from 'react';
import './Calculator.styles.css';

export const Calculator = () => {
    const [num, setNum] = useState(0);
    const [oldNum, setOldNum] = useState(0);
    const [operator, setOperator] = useState('');

    const changeNum = e => {
        const value = e.target.innerHTML;
        if (num === 0) {
            setNum(value);
        } else {
            setNum(num + value);
        }
    };

    const changeOperator = e => {
        if (!operator) {
            setOldNum(num);
            setNum(0);
            setOperator(e.target.innerHTML);
        } else {
            setOperator(e.target.innerHTML);
        }
    };

    const clearInput = () => {
        setNum(0);
        setOldNum(0);
        setOperator('');
    };

    const percentage = () => {
        setNum(num / 100);
    };

    const changeNumberSign = () => {
        if (num !== 0) {
            setNum(num * -1);
        }
    };

    const calc = () => {
        switch (operator) {
            case '+':
                setNum(parseFloat(oldNum) + parseFloat(num));
                setOperator('');
                break;
            case '-':
                setNum(oldNum - num);
                setOperator('');
                break;
            case 'X':
                setNum(oldNum * num);
                setOperator('');
                break;
            case '÷':
                setNum(oldNum / num);
                setOperator('');
                break;
        }
    };

    return (
        <div className="calculator">
            <div className="calculator-wrapper">
                <div className="calculator-result">
                    <h1>{num}</h1>
                    <span>{operator}</span>
                </div>
                <button onClick={clearInput} className="calculator-clear">
                    AC
                </button>
                <button onClick={changeNumberSign} className="calculator-special-char">
                    +/-
                </button>
                <button onClick={percentage} className="calculator-special-char">
                    %
                </button>
                <button onClick={changeOperator} className="calculator-special-char">
                    ÷
                </button>
                <button onClick={changeNum}>1</button>
                <button onClick={changeNum}>2</button>
                <button onClick={changeNum}>3</button>
                <button onClick={changeOperator} className="calculator-special-char">
                    X
                </button>
                <button onClick={changeNum}>4</button>
                <button onClick={changeNum}>5</button>
                <button onClick={changeNum}>6</button>
                <button onClick={changeOperator} className="calculator-special-char">
                    -
                </button>
                <button onClick={changeNum}>7</button>
                <button onClick={changeNum}>8</button>
                <button onClick={changeNum}>9</button>
                <button onClick={changeOperator} className="calculator-special-char">
                    +
                </button>
                <button onClick={changeNum}>0</button>
                <button onClick={changeNum}>.</button>
                <button style={{ visibility: 'hidden' }}>.</button>
                <button onClick={calc} className="calculator-special-char strong">
                    =
                </button>
            </div>
        </div>
    );
};
