import './App.css';
import Form from "./components/Form";
import Info from "./components/Info";
import {useState} from "react";

function App() {
    const [texts, setTexts] = useState([])
    const addText = (userInput, number, textarea) => {
        if (userInput || number || textarea) {
            const newItem = {
                textUser: [userInput, number, textarea],
                id: Math.random().toString(36).substr(2, 9),
            }
            setTexts([...texts, newItem])
        }
    }
    return (
        <div className='container'>
            <h1 className='mt-3'>Задание 4</h1>
            <Form addText={addText}/>
            {texts.map((text) =>
                (<Info
                    text={text}
                    key={text.id}

                />))}
        </div>

    );
}

export default App;
