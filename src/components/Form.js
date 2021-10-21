import React, {useState} from 'react';

const Form = ({addText}) => {
    const [userInput, setUserInput] = useState('')
    const [number, setNumber] = useState('')
    const [textarea, setTextarea] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        addText(userInput, number, textarea)
        setUserInput('')
        setNumber('')
        setTextarea('')
        console.log(userInput, number, textarea)
    }

    return (
        <div>
            <form
                className='form-control mt-3'
                onSubmit={handleSubmit}
            >
                <div>
                    <input
                        placeholder='text'
                        className='input-group mb-3 mt-3'
                        type="text"
                        value={userInput}
                        onChange={e => setUserInput(e.target.value.trim())}
                    />
                </div>
                <div>
                    <input
                        placeholder='number'
                        className='input-group mb-3'
                        type="number"
                        value={number}
                        onChange={e => setNumber(e.target.value.trim())}
                    />
                </div>
                <div>
                    <textarea
                        placeholder='text'
                        className='input-group mb-3'
                        value={textarea}
                        onChange={e => setTextarea(e.target.value.trim())}
                    />
                </div>
                <button className='btn-dark'>SEND</button>
            </form>
        </div>
    );
};

export default Form;