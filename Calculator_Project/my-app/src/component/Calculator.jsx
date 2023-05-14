import React, { useEffect, useState } from 'react';
import moon from "../assets/moon.jpg"
import sun from '../assets/sun.png'

const Calculator = () => {
    const [result, setResult] = useState('');
    const [theme, setTheme] = useState('light-theme');
    const [icon, setIcon] = useState(moon)


    //dark mode
    const toggleTheme = () => {
        if(theme === 'light-theme'){
            setTheme('dark-theme')
            setIcon(sun)
        }
        else{
            setTheme('light-theme')
            setIcon(moon)
        }
    }

    useEffect(() => {
        document.body.className = theme;
        
    }, [theme])


    // const icon = () => {
    //     theme === 'light-theme'?
    // }

    const handleChange = (event) => {
        setResult(result.concat(event.target.value))
    }

    const handleClear = () => {
        setResult(' ')
    }

    const handleCalc = () => {
        try {
            // eslint-disable-next-line no-eval
            setResult(eval(result).toString())

        }
        catch (error) {
            setResult('Invalid')
        }
    }

    const handleDelete = () => {
        setResult(result.slice(0, -1))
    }



    return (
        <div className='container'>

            <div className='calc-box'>
                <form className='calc-form' id='mode'>
                    <div className='input-box'>
                        <div className='img-box'>
                            
                            <a href="#" onClick={() => toggleTheme()}><img src={icon} alt="dark-mode" className='img' /></a>
                        </div>
                        <input type="text" id='answer' value={result} onChange={handleChange} />

                    </div>

                    <div className='btn-box'>
                        <div className='row f-row' id='rOne'>
                            <input type="button" value="AC" onClick={handleClear} />
                            <input type="button" value="%" onClick={handleChange} />
                            <input type="button" value="/" onClick={handleChange} />
                            <button type='button'><i className="fa-solid fa-delete-left" onClick={handleDelete}></i></button>
                        </div>
                        <div className='row'>
                            <input type="button" value="7" onClick={handleChange} />
                            <input type="button" value="8" onClick={handleChange} />
                            <input type="button" value="9" onClick={handleChange} />
                            <input type="button" value="*" onClick={handleChange} />
                        </div>
                        <div className='row'>
                            <input type="button" value="4" onClick={handleChange} />
                            <input type="button" value="5" onClick={handleChange} />
                            <input type="button" value="6" onClick={handleChange} />
                            <input type="button" value="-" onClick={handleChange} />
                        </div>
                        <div className='row'>
                            <input type="button" value="1" onClick={handleChange} />
                            <input type="button" value="2" onClick={handleChange} />
                            <input type="button" value="3" onClick={handleChange} />
                            <input type="button" value="+" onClick={handleChange} />
                        </div>
                        <div className='row'>
                            <input type="button" value="0" onClick={handleChange} />
                            <input type="button" value="." onClick={handleChange} />
                            <input className='equal' type="button" value="=" onClick={handleCalc} />
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}





export default Calculator
