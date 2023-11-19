import './Calculator.styles.css';

export const Calculator = () => {
    return (
        <div className="calculator">
            <div className="calculator-wrapper">
                <div className="calculator-result">
                    <h1>01</h1>
                </div>
                <button className="calculator-clear">AC</button>
                <button className="calculator-special-char">+/-</button>
                <button className="calculator-special-char">%</button>
                <button className="calculator-special-char">÷</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button className="calculator-special-char">X</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button className="calculator-special-char">-</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button className="calculator-special-char">+</button>
                <button>0</button>
                <button>.</button>
                <button style={{ visibility: 'hidden' }}>.</button>
                <button className="calculator-special-char strong">=</button>
            </div>
        </div>
    );
};
